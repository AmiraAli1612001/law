"use client";
import DynamicList from "@/components/shared/dynamicList/DynamicList";
import { toggleAttendance } from "@/globalState/Features/authSlice";
import { toggleAttendancePopup } from "@/globalState/Features/smallPopupsSlice";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Attendance = () => {
  const attendance = useSelector((store) => store.auth.attendance);
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
  async function handleSubmitSignUp(formData, e) {
    // setGeneralError("");
    // dispatch(openLoader("جاري التسجيل"));

    console.log(formData);
    // const result = await fetchRegisterUser({
    //   ...formData,
    // });

    // dispatch(closeLoader());
  }
  if (attendance) {
    return (
      <form
        method="POST"
        onSubmit={handleSubmit(handleSubmitSignUp)}
        action=""
        noValidate
        id="addIssueRecord"
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
          onClick={() => {
            toast.error("تم تسجيل الانصراف بنجاح");
            dispatch(toggleAttendancePopup());
            dispatch(toggleAttendance());
          }}
        >
          تسجيل الانصراف
        </button>
      </form>
    );
  }
  return (
    <form
      method="POST"
      onSubmit={handleSubmit(handleSubmitSignUp)}
      action=""
      noValidate
      id="addIssueRecord"
    >
      {/* email !*/}
      {/* <div className="input">
        <label htmlFor="">البريد الالكتروني</label>
        <input
          type="email"
          name=""
          id="email"
          {...register("email", {
            required: "يجب كتابة الاسم الرباعي بالعربي",
          })}
          placeholder=""
        />
        <p className="input-error">{errors.email?.message}</p>
      </div> */}
      {/* password !*/}
      {/* <div className="input">
        <label htmlFor="">كلمة المرور</label>
        <input
          type="password"
          name=""
          id="password"
          {...register("password", {
            required: "يجب كتابة الاسم الرباعي بالعربي",
          })}
          placeholder=""
        />
        <p className="input-error">{errors.password?.message}</p>
      </div> */}
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
        onClick={() => {
          toast.success("تم تسجيل الحضور بنجاح");
          dispatch(toggleAttendancePopup());
          dispatch(toggleAttendance());
        }}
      >
        تسجيل الحضور
      </button>
    </form>
  );
};

export default Attendance;
