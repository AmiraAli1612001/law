"use client";
import { toggleAttendance } from "@/globalState/Features/authSlice";
import { toggleAttendancePopup } from "@/globalState/Features/smallPopupsSlice";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Attendance = () => {
  const { attendance, JWT, attendanceId } = useSelector((store) => store.auth);

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
  async function handleCheckIn() {
    const res = await fetchWithCheck("/api/attendance/check-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JWT}`,
      },
      body: JSON.stringify({
        employeeId: 2,
        attendanceDate: "2024-12-07T01:31:48.713Z",
        checkInTime: "2024-12-07T01:31:48.713Z",
        checkOutTime: "2024-12-07T01:31:48.713Z",
        status: "string",
        delayReason: "string",
      }),
    });
    return res;
  }
  async function handleCheckOut(tasks = []) {
    const res = await fetchWithCheck(
      `/api/attendance/check-out/${attendanceId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JWT}`,
        },
        body: JSON.stringify(
          tasks.map((task) => ({
            taskId: 0,
            taskDescription: "string",
            dueDateStart: "2024-12-07T05:47:12.950Z",
            dueDateEnd: "2024-12-07T05:47:12.950Z",
          }))
        ),
      }
    );
    return res;
  }
  async function handleFormSubmit(e) {
    e.preventDefault();
    // setGeneralError("");
    // dispatch(openLoader("جاري التسجيل"));

    console.log("formData");
    try {
      let res;
      if (attendance) {
        res = await handleCheckOut();
        toast.success(" تم تسجيل الانصراف بنجاح");
      } else {
        res = await handleCheckIn();
        toast.success(" تم تسجيل الحضور بنجاح");
      }
      console.log(res);
      // dispatch(toggleAttendancePopup());
    } catch (err) {
      console.log(err);
      toast.error("حدث خطأ ما");
    }

    // dispatch(closeLoader());
  }
  if (attendance) {
    return (
      <form
        method="POST"
        onSubmit={handleFormSubmit}
        id="checkOutForm"
      >
        <h3 className="mb-8 text-2xl">هل انت متأكد من تسجيل الانصراف؟</h3>
        <button
          className="text-white text-xl p-4 w-full bg-[#D00000]"
          type="submit"
          form="#checkOutForm"
        >
          تسجيل الانصراف
        </button>
      </form>
    );
  }
  return (
    <form
      method="POST"
      onSubmit={handleFormSubmit}
      // id="checkInForm"
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
          value={new Date().toISOString().slice(0, 16)}
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
        type="butotn"
        // form="#checkInForm"
      >
        تسجيل الحضور
      </button>
    </form>
  );
};

export default Attendance;
