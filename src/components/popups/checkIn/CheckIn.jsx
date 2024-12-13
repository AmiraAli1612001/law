"use client";
import { toggleAttendanceId } from "@/globalState/Features/authSlice";
import { toggleCheckInPopup } from "@/globalState/Features/popupsSlice";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CheckIn = () => {
  const {
    user: { employeeId, token },
    attendanceId,
  } = useSelector((store) => store.auth);
  const { employeeDetails } = useSelector((store) => store.tempData);
  const dispatch = useDispatch();

  const signUpForm = useForm();
  const {
    register,
    handleSubmit,
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
    const res = await fetchWithCheck("/api/attendance/check-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        employeeId,
        attendanceDate: currentDate,
        checkInTime: currentDate,
        checkOutTime: currentDate,
        status: "string",
        delayReason: "string",
      }),
    });
    dispatch(toggleAttendanceId(res.attendanceId));
    console.log(res);
    return res;
  }

  async function handleSubmitSignUp(formData, e) {
    // setGeneralError("");
    console.log(formData);
    try {
      let res = await handleCheckIn();

      dispatch(toggleAttendanceId(res.attendanceId));
      toast.success(" تم تسجيل الحضور بنجاح");

      console.log(res);

      dispatch(toggleCheckInPopup());
    } catch (err) {
      console.log(err);
      toast.error("حدث خطأ ما");
    }
  }
  return (
    <div className="wrapper bg-white p-4 pt-10 rounded w-[500px]">
      <form
        method="POST"
        onSubmit={handleSubmit(handleSubmitSignUp)}
        action=""
        noValidate
        id="checkInForm"
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
            {...register("delayReason", {
              // required: "يجب كتابة الاسم الرباعي بالعربي",
            })}
            placeholder=""
          ></textarea>
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
