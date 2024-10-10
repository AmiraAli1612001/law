"use client";
import React from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { resetPopups } from "@/globalState/Features/popupsSlice";
import { toast } from "react-toastify";
import { setTasks } from "@/globalState/Features/tempDataSlice";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.snow.css";

const Task = () => {
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
      <div className="small-inputs">
        {/* title ! */}
        <div className="input">
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
        <div className="input">
          <label htmlFor="">التاريخ</label>
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
      <div className="input !min-w-full flex-1 flex flex-col">
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

export default Task;
