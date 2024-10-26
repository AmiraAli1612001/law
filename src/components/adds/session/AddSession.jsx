"use client";
import React from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Parties from "./subComponents/Parties";
import Clauses from "./subComponents/Clauses";
import { resetPopups } from "@/globalState/Features/popupsSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddSession = () => {
  const signUpForm = useForm();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState,
    setError,
    // reset,
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
      className="py-4"
    >
      <div className="small-inputs flex flex-col lg:flex-row w-full [&>div]:flex-1 gap-4 pe-0.5">
        {/* contract type ! */}
        <div className="simple-input">
          <label htmlFor="">نوع العقد</label>
          <select
            type="text"
            name=""
            id="contractName"
            {...register("contractName", {
              required: "يجب كتابة عنوان العقد",
            })}
            placeholder=""
          >
            <option className="hidden" value="">
              اختر نوع العقد
            </option>
            <option value="قرار موظف">قرار موظف</option>
            <option value="قرار عميل">قرار عميل</option>
          </select>
          <p className="input-error">{errors.contractName?.message}</p>
        </div>
        {/* contract status ! */}
        <div className="simple-input">
          <label htmlFor="">حالة العقد</label>
          <select
            type="text"
            name=""
            id="contractStatus"
            {...register("contractStatus", {
              required: "يجب كتابة عنوان العقد",
            })}
            placeholder=""
          >
            <option className="hidden" value="">
              اختر حالة العقد
            </option>
            <option value="قرار موظف">معاينة</option>
            <option value="قرار عميل">اصدار</option>
          </select>
          <p className="input-error">{errors.contractStatus?.message}</p>
        </div>
        {/* contract pay type !*/}
        <div className="simple-input">
          <label htmlFor="">نوع الدفع</label>
          <select
            type="text"
            name=""
            id="contractPayType"
            {...register("contractPayType", {
              required: "يجب كتابة عنوان العقد",
            })}
            placeholder=""
          >
            <option className="hidden" value="">
              اختر نوع الدفع
            </option>
            <option value="قرار موظف">1</option>
            <option value="قرار عميل">2</option>
          </select>
          <p className="input-error">{errors.contractPayType?.message}</p>
        </div>
        {/* contract Date ! */}
        <div className="simple-input">
          <label htmlFor="">تاريخ العقد</label>
          <input
            type="date"
            name=""
            defaultValue={new Date().toISOString().split("T")[0]}
            id="contractDate"
            {...register("contractDate", {
              // required: "يجب كتابة الاسم الرباعي بالعربي",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.contractDate?.message}</p>
        </div>
      </div>
      <hr className="shadow" />
      {/* parties */}
      <div className="input !min-w-full">
        <Parties />
      </div>
      {/* name arabic ! arabicName*/}
      <div className="simple-input !min-w-full flex-1 ">
        <h3 className="text-lg font-semibold">التمهيد</h3>
        {/* <div dir="ltr" className="flex-1 min-h-fit h-fit bg-white">
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
        </div> */}
        <textarea className="text-lg" name="" id=""></textarea>
        <p className="input-error">{errors.arabicName?.message}</p>
      </div>

      {/* clauses */}
      <div className="input !min-w-full">
        <Clauses />
      </div>
      <button className="text-white text-xl mt-4 p-4 w-full bg-textGreen rounded">
        اضافة
      </button>
    </form>
  );
};

export default AddSession;
