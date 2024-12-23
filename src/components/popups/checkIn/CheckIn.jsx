"use client";
import { toggleAttendanceId } from "@/globalState/Features/authSlice";
import { resetPopups, toggleCheckInPopup } from "@/globalState/Features/popupsSlice";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import AuthContext from "@/context/Auth";
import { useContext } from "react";


const CheckIn = () => {
  // const {
  //   user: { employeeId, token },
  //   attendanceId,
  // } = useSelector((store) => store.auth);
  const { employeeDetails } = useSelector((store) => store.tempData);
  const dispatch = useDispatch();

  const signUpForm = useForm();
  const {
    register,
    // handleSubmit,
    control,
    formState,
    setError,
    reset,
    trigger,
  } = signUpForm;
  let { errors, isSubmitted } = formState;

  const currentDate = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  ).toISOString();

  async function handleCheckIn() {
    console.log({
      employeeId,
      attendanceDate: currentDate,
      checkInTime: currentDate,
      checkOutTime: currentDate,
      status: "string",
      delayReason: "string",
    });
    // const res = await fetchWithCheck("/api/attendance/check-in", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: JSON.stringify({
    //     employeeId,
    //     attendanceDate: currentDate,
    //     checkInTime: currentDate,
    //     checkOutTime: currentDate,
    //     status: "string",
    //     delayReason: "string",
    //   }),
    // });
    dispatch(toggleAttendanceId(res.attendanceId));
    console.log(res);
    return res;
  }

  // async function handleSubmitSignUp(formData, e) {
  //   try {
  //     let res = await handleCheckIn();

  //     localStorage.setItem("isCheckOutTimeNull" , "true")
  //     toast.success(" تم تسجيل الحضور بنجاح");

  //     console.log(res);

  //     dispatch(toggleCheckInPopup());
  //   } catch (err) {
  //     console.log(err);
  //     toast.error("حدث خطأ ما");
  //   }
  // }
  // let { isCheckOutTimeNull, setIsCheckOutTimeNull ,  } = useContext(AuthContext);



  /******************************************************************************************************************************** */
  let [date, setDate] = useState(currentDate.slice(0, 16))
  let [absentReason, setAbsentReason] = useState("")

  let { isCheckOutTimeNull, setIsCheckOutTimeNull, setCheck } = useContext(AuthContext);



  const apiKey = process.env.NEXT_PUBLIC_DEV;

  const checkInApi = async () => {
    try {
      const response = await fetch(`${apiKey}/Attendance/check-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
        body: JSON.stringify({
          attendanceId: localStorage.getItem("attendanceId"),
          employeeId: localStorage.getItem("employeeId"),
          attendanceDate: new Date().toISOString(),
          checkInTime: new Date().toISOString(),
          checkOutTime: new Date().toISOString(),
          delayReason: absentReason || "",
        }),
      });

      if (response.ok) {
        toast.success("تم تسجيل الحضور بنجاح");
      }
      else {
        toast.error("حدث خطأ ما");
      }
    }
    catch (error) {
      console.error("Error fetching today attendance :", error);

    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    checkInApi();
    setIsCheckOutTimeNull(true)
    localStorage.setItem("isCheckOutTimeNull", true)
    setCheck(JSON.parse(localStorage.getItem("isCheckOutTimeNull")))
    console.log(absentReason)

  }
  return (
    <div className="wrapper relative p-4 pt-10 rounded w-fit h-fit bg-white justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="absolute top-2 right-2 cursor-pointer border border-red-500  rounded z-50"
        onClick={() => dispatch(resetPopups())}
      >
        <path
          fill="#FF0000"
          d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
        />
      </svg>
      <form
        method="POST"
        onSubmit={(e) => {
          handleSubmit(e)
        }}
        action=""
        noValidate
        id="checkInForm"
        className="!w-[500px]"
      >
        {/* datetime !*/}
        <div className="simple-input">
          <label htmlFor="">تاريخ الحضور</label>
          <input
            type="datetime-local"
            name=""
            // id="arabicName"
            // {...register("arabicName", {
            //   required: "يجب كتابة الاسم الرباعي بالعربي",
            // })}

            disabled
            value={currentDate.slice(0, 16)}
            placeholder=""
          />
          <p className="input-error">{errors.arabicName?.message}</p>
        </div>
        {/* delayReason ! */}
        <div className="simple-input">
          <label htmlFor="">سبب التأخير ان وجد</label>
          <textarea
            type="text"
            name=""
            id="delayReason"
            onChange={(e) => {
              setAbsentReason(e.target.value);
            }}
            // {...register("delayReason", {
            //   required: "يجب كتابة الاسم الرباعي بالعربي",
            // })}
            placeholder=""
          ></textarea>
          <p className="input-error">{errors.delayReason?.message}</p>

          <p className="input-error">{errors.delayReason?.message}</p>
        </div>
        <button
          className="text-white text-xl p-4 w-full bg-textGreen"
          type="submit"
          form="checkInForm"
        >
          تسجيل الحضور
        </button>
      </form>
    </div>
  );
};

export default CheckIn;
