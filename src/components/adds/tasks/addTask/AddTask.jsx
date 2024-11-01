"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { resetPopups } from "@/globalState/Features/popupsSlice";
import { toast } from "react-toastify";
import { setTasks } from "@/globalState/Features/tempDataSlice";
import PersonSelector from "@/components/shared/personSelector/PersonSelector";
import Swiper2 from "@/components/shared/swiper2/Swiper2";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.snow.css";

const AddTask = () => {
  const [isIssue, setIsIssue] = useState(false);
  const signUpForm = useForm();
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tempData.tasks);
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
    dispatch(
      setTasks([...tasks, { title: formData.title, date: formData.date }])
    );
    dispatch(resetPopups());
    toast.success("تم الحفظ بنجاح");
    // const result = await fetchRegisterUser({
    //   ...formData,
    // });

    // dispatch(closeLoader());
  }
  return (
    <form
      method="POST"
      onSubmit={handleSubmit(handleSubmitSignUp)}
      action=""
      noValidate
      id="addIssueRecord"
    >
      <Swiper2 />
      <div className="main-section">
        {/* lawyer !*/}
        <div className="simple-input mt-4">
          <label htmlFor="">المشرف المسند إليه المهمة</label>
          <PersonSelector />
        </div>
      </div>
      <div className="small-inputs main-section !grid-cols-3">
        {/* title ! */}
        <div className="simple-input">
          <label htmlFor="">العنوان</label>
          <input
            type="text"
            name=""
            id="title"
            {...register("title", {
              required: "يجب كتابة العنوان",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.title?.message}</p>
        </div>
        {/* name arabic ! date*/}
        <div className="simple-input">
          <label htmlFor="">تاريخ الاسناد</label>
          <input
            type="date"
            name=""
            id="date"
            {...register("date", {
              required: "يجب ادخال التاريخ",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.date?.message}</p>
        </div>
        {/* name arabic ! date*/}
        <div className="simple-input">
          <label htmlFor="">تاريخ الانتهاء</label>
          <input
            type="date"
            name=""
            id="date"
            {...register("date", {
              required: "يجب ادخال التاريخ",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.date?.message}</p>
        </div>
      </div>
      {/* details !*/}
      <div className="simple-input main-section !min-w-full flex-1 flex flex-col">
        <label htmlFor="">التفاصيل</label>
        <textarea
          type="text"
          name=""
          id="details"
          {...register("details", {
            // required: "يجب كتابة الاسم الرباعي بالعربي",
          })}
          placeholder=""
          className="flex-1"
        ></textarea>
        {/* <p className="input-error">{errors.details?.message}</p> */}
      </div>
      <button className="text-white text-xl p-4 w-full bg-textGreen">
        حفظ
      </button>
    </form>
  );
};

export default AddTask;
