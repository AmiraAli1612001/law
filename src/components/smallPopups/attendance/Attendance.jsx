"use client";
import DynamicList from "@/components/shared/dynamicList/DynamicList";
import {
  toggleAttendance,
  toggleAttendanceId,
} from "@/globalState/Features/authSlice";
import { toggleAttendancePopup } from "@/globalState/Features/smallPopupsSlice";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Attendance = () => {
  const { attendance, JWT, attendanceId } = useSelector((store) => store.auth);
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
      employeeId: employeeDetails.employeeId,
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
        Authorization: `Bearer ${JWT}`,
      },
      body: JSON.stringify({
        employeeId: employeeDetails.employeeId,
        attendanceDate: currentDate,
        checkInTime: currentDate,
        checkOutTime: currentDate,
        status: "string",
        delayReason: "string",
      }),
    });
    console.log(res);
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
            taskDescription: "string",
            dueDateStart: currentDate,
            dueDateEnd: currentDate,
          }))
        ),
      }
    );
    return res;
  }
  async function handleSubmitSignUp(formData, e) {
    // setGeneralError("");
    // dispatch(openLoader("جاري التسجيل"));

    console.log(formData);
    try {
      let res;
      if (attendanceId > 0) {
        res = await handleCheckOut([1]);
        toast.success(" تم تسجيل الانصراف بنجاح");
        dispatch(toggleAttendanceId(0));
      } else {
        res = await handleCheckIn();
        console.log(res);
        dispatch(toggleAttendanceId(res.attendanceId));
        toast.success(" تم تسجيل الحضور بنجاح");
      }
      console.log(res);
      dispatch(toggleAttendancePopup());
    } catch (err) {
      console.log(err);
      toast.error("حدث خطأ ما");
    }

    // dispatch(closeLoader());
  }
  if (attendanceId > 0) {
    return (
      <form
        method="POST"
        onSubmit={handleSubmit(handleSubmitSignUp)}
        action=""
        noValidate
        id="checkOutForm"
        className="flex flex-col gap-4"
      >
        <h3 className="text-2xl ">هل انت متأكد من تسجيل الانصراف؟</h3>
        <div className="max-h-[50vh] overflow-auto">
          <DynamicList className={"!gap-4"} title={"مهام اليوم"}>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex gap-2">
                <div className="simple-input flex-1">
                  <label htmlFor="">من</label>
                  <input type="time" name="" id="" />
                </div>
                <div className="simple-input flex-1">
                  <label htmlFor="">الي</label>
                  <input type="time" name="" id="" />
                </div>
              </div>
              <textarea name="" placeholder="حدد مهامك" id=""></textarea>
            </div>
          </DynamicList>
        </div>
        <button
          className="text-white text-xl p-4 w-full bg-[#D00000]"
          type="submit"
          form="checkOutForm"
        >
          تسجيل الانصراف
        </button>
      </form>
    );
  }
  console.log(new Date().toISOString());
  return (
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
  );
};

export default Attendance;
