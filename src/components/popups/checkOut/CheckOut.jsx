"use client";
import "./style.css";
import DynamicList from "@/components/shared/dynamicList/DynamicList";
import {
  toggleAttendance,
  toggleAttendanceId,
} from "@/globalState/Features/authSlice";
import {
  resetPopups,
  toggleCheckOutPopup,
} from "@/globalState/Features/popupsSlice";
import { toggleAttendancePopup } from "@/globalState/Features/smallPopupsSlice";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import AuthContext from "@/context/Auth";
import { useContext } from "react";


const CheckOut = () => {
  // const {
  //   user: { token },
  //   attendanceId,
  // } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  // const signUpForm = useForm();
  // const {
  //   register,
  //   handleSubmit,
  //   control,
  //   formState,
  //   setError,
  //   reset,
  //   trigger,
  // } = signUpForm;
  // let { errors, isSubmitted } = formState;

  async function handleCheckOut(tasks = []) {
    // const res = await fetchWithCheck(
    //   `/api/attendance/check-out/${attendanceId}`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(
    //       //   tasks.map((task) => ({
    //       //     taskId: 0,
    //       //     taskDescription: "string",
    //       //     dueDateStart: "2024-12-07T05:47:12.950Z",
    //       //     dueDateEnd: "2024-12-07T05:47:12.950Z",
    //       //   }))
    //       [
    //         {
    //           taskId: 0,
    //           taskDescription: "string",
    //           dueDateStart: new Date().toISOString(),
    //           dueDateEnd: new Date().toISOString(),
    //         },
    //       ]
    //     ),
    //   }
    // );
    // return res;
  }


  // ********************************************************************************************************************************
  let { isCheckOutTimeNull, setIsCheckOutTimeNull, setCheck } = useContext(AuthContext);

  let [fromTime, setFormTime] = useState("")
  let [toTime, setToTime] = useState("")
  let [taskDescription, setTaskDescription] = useState("")


  const apiKey = process.env.NEXT_PUBLIC_DEV;
  const checkOutApi = async () => {
    const id = JSON.parse(localStorage.getItem("attendanceId"));
    try {
      console.log("id", id);
      const response = await fetch(`${apiKey}/Attendance/check-out/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
        body: JSON.stringify([
          {
            "taskId": 0,
            "taskDescription": taskDescription,
            "dueDateStart": fromTime,
            "dueDateEnd": toTime
          }
        ]),
      });

      if (response.ok) {
        toast.success("تم تسجيل الانصراف بنجاح");
        setIsCheckOutTimeNull(false);
        localStorage.setItem("isCheckOutTimeNull", false);
        setCheck(JSON.parse(localStorage.getItem("isCheckOutTimeNull")))
        console.log(taskDescription)
        dispatch(toggleCheckOutPopup());
      }
    }

    catch (error) {
      toast.error(error.message || "حدث خطأ ما");
      console.error("Error:", error);
      console.log("response.status", response.status)

    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkOutApi();

  };


  return (
    <div className="wrapper relative bg-white w-full h-full p-10 checkout">
      {/* close popups btn */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="absolute top-6 right-6 cursor-pointer border border-red-500  rounded z-50"
        onClick={() => dispatch(resetPopups())}
      >
        <path
          fill="#FF0000"
          d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
        />
      </svg>

      <div className="left-[-10%] top-0 w-[120%] h-full absolute ">
        <div className="bg-black opacity-70 left-0 top-0 w-full h-full absolute z-10"></div>
        <img
          src="/images/logos/background.jpg"
          alt=""
          className="w-full absolute left-0 top-0 h-full object-cover blur-md"
        />
      </div>

      <div className="relative z-10">
        <div className="logo mx-auto w-fit mb-10">
          <Image
            src="/images/logos/صقور الشعار.png"
            alt="saudi logo"
            className="object-cover "
            width={360}
            height={0}
          />
        </div>
        <form
          method="POST"
          onSubmit={(e) => { handleSubmit(e) }
          }
          action=""
          noValidate
          id="checkOutForm"
          className="flex flex-col gap-4  p-4 rounded-lg  drop-shadow"
        >
          <h3 className="text-2xl text-white font-bold">
            اضف مهامك قبل الانصراف
          </h3>
          <div className="max-h-[50vh] overflow-auto ">
            <DynamicList
              className={"!gap-4 cbg-[#172749]  text-white p-2 rounded-lg"}
              styleType={2}
            >
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex gap-2">
                  <div className="simple-input flex-1">
                    <label htmlFor="">من</label>
                    <input type="time" name="" id="" onChangeCapture={(e) => {
                      setFormTime(e.target.value)
                    }} />
                  </div>
                  <div className="simple-input flex-1">
                    <label htmlFor="">الي</label>
                    <input type="time" name="" id="" onChangeCapture={(e) => {
                      setToTime(e.target.value)
                    }} />
                  </div>
                </div>
                <textarea name="" placeholder="حدد مهامك" id="" onChange={(e) => {
                  setTaskDescription(e.target.value)
                }}></textarea>
              </div>
            </DynamicList>
          </div>
          <button

            className="text-white rounded text-xl p-4 w-fit bg-[#D00000]"
            type="submit"
            form="checkOutForm"


          >
            تسجيل الانصراف
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
