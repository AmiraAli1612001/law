"use client";
import React from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Parties from "./subComponents/Parties";
import Clauses from "./subComponents/Clauses";
import { useSelector } from "react-redux";

const EditEmployee = () => {
  const signUpForm = useForm();
  const currentEmployee = useSelector(store=>store.popups.currentEmployee)
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
  return (
    <form
      method="POST"
      onSubmit={handleSubmit(handleSubmitSignUp)}
      action=""
      noValidate
      id="addIssueRecord"
    >
      <div className="small-inputs">
        {/* contractt name ! contractName*/}
        <div className="input">
          <label htmlFor="">العنوان</label>
          <input
            type="text"
            name=""
            id="contractName"
            {...register("contractName", {
              required: "يجب كتابة عنوان العقد",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.contractName?.message}</p>
        </div>
        {/* name arabic ! arabicName*/}
        <div className="input">
          <label htmlFor="">رقم العقد</label>
          <input
            type="text"
            name=""
            id="contractNumber"
            {...register("contractNumber", {
              required: "يجب كتابة رقم العقد",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.contractNumber?.message}</p>
        </div>
        {/* name arabic ! arabicName*/}
        <div className="input">
          <label htmlFor="">تاريخ العقد</label>
          <input
            type="date"
            name=""
            id="contractDate"
            {...register("contractDate", {
              required: "يجب كتابة الاسم الرباعي بالعربي",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.contractDate?.message}</p>
        </div>
      </div>
      {/* parties */}
      <div className="input !min-w-full">
        <Parties />
      </div>
      {/* name arabic ! arabicName*/}
      <div className="input !min-w-full flex-1">
        <h3 className="text-lg font-semibold">التمهيد</h3>
        <div dir="ltr" className="flex-1 min-h-fit h-fit">
          <div id={`contract-details-toolbar`}>
            <span className="ql-formats">
              <select className="ql-font"></select>
              <select className="ql-size"></select>
            </span>
            <span className="ql-formats">
              <button className="ql-bold"></button>
              <button className="ql-italic"></button>
              <button className="ql-underline"></button>
              <button className="ql-strike"></button>
            </span>
            <span className="ql-formats">
              <select className="ql-color"></select>
              <select className="ql-background"></select>
            </span>
            <span className="ql-formats">
              <button className="ql-script" value="sub"></button>
              <button className="ql-script" value="super"></button>
            </span>
            <span className="ql-formats">
              <button className="ql-header" value="1"></button>
              <button className="ql-header" value="2"></button>
              <button className="ql-blockquote"></button>
              <button className="ql-code-block"></button>
            </span>
            <span className="ql-formats">
              <button className="ql-list" value="ordered"></button>
              <button className="ql-list" value="bullet"></button>
              <button className="ql-indent" value="-1"></button>
              <button className="ql-indent" value="+1"></button>
            </span>
            <span className="ql-formats">
              <button className="ql-direction" value="rtl"></button>
              <select className="ql-align"></select>
            </span>
            <span className="ql-formats">
              <button className="ql-link"></button>
              <button className="ql-image"></button>
              <button className="ql-video"></button>
            </span>
            <span className="ql-formats">
              <button className="ql-clean"></button>
            </span>
          </div>
          <ReactQuill
            modules={{ toolbar: "#contract-details-toolbar" }}
            theme="snow"
          />
        </div>
        <p className="input-error">{errors.arabicName?.message}</p>
      </div>

      {/* clauses */}
      <div className="input !min-w-full">
        <Clauses />
      </div>
      <button className="text-white text-xl p-4 w-full bg-textGreen rounded">
        تعديل
      </button>
    </form>
  );
};


export default EditEmployee