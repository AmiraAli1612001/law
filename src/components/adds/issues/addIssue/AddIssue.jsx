"use client";
import React from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import DynamicList from "@/components/shared/dynamicList/DynamicList";
import PersonSelector from "@/components/shared/personSelector/PersonSelector";

const AddIssue = () => {
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
  const issueTypes = [
    "جزائية",
    "عامة",
    "عمالية",
    "إنهاءات",
    "لجان",
    "تراضي",
    "ودي",
    "ديوان المظالم",
  ];
  const issuesSubTypes = [
    "احتيال مالي",
    "أجرة مثل",
    "تحرش وقذف",
    "تصوير",
    "تهديد بالقتل",
    "جنائية",
    "رد عين",
    "فسخ عقد نكاح",
    "فعل ضار",
    "نفقة ماضية",
  ];
  const issueStatus = [
    "قيد الدراسة",
    "قيد النظر",
    "قيد التحقيق",
    "جديدة",
    "محكوم بها حكم قطعي",
    "محكوم بها حكم غير قطعي",
  ];
  return (
    <form
      method="POST"
      onSubmit={handleSubmit(handleSubmitSignUp)}
      action=""
      noValidate
      id="addIssueRecord"
    >
      <div className="main-section">
        {/* admin !*/}
        <div className="simple-input">
          <label htmlFor="">المشرف القائم على القضية</label>
          <PersonSelector />
        </div>
        {/* admin !*/}
        <div className="simple-input mt-4">
          <label htmlFor="">المحامي المسند إليه القضية</label>
          <PersonSelector />
        </div>
      </div>
      <div className="small-inputs main-section">
        {/* status !*/}
        <div className="simple-input">
          <label htmlFor="">حالة القضية</label>
          <select
            type="text"
            name=""
            id="arabicName"
            // {...register("arabicName", {
            //   required: "يجب كتابة الاسم الرباعي بالعربي",
            // })}
            placeholder=""
          >
            {issueStatus.map((status, index) => {
              return (
                <option key={index} value={status}>
                  {status}
                </option>
              );
            })}
          </select>
          {/* <p className="input-error">{errors.arabicName?.message}</p> */}
        </div>
        {/* date !*/}
        <div className="simple-input">
          <label htmlFor="">تاريخ القضية</label>
          <input
            type="date"
            name=""
            id="arabicName"
            {...register("arabicName", {
              required: "يجب كتابة الاسم الرباعي بالعربي",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.arabicName?.message}</p>
        </div>
        {/* type !*/}
        <div className="simple-input">
          <label htmlFor="">نوع/تصنيف القضية</label>
          <select
            type="text"
            name=""
            id="arabicName"
            // {...register("arabicName", {
            //   required: "يجب كتابة الاسم الرباعي بالعربي",
            // })}
            placeholder=""
          >
            {issueTypes.map((type, index) => {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
          {/* <p className="input-error">{errors.arabicName?.message}</p> */}
        </div>
        {/* sub type !*/}
        <div className="simple-input">
          <label htmlFor="">التصنيف الفرعي</label>
          <select
            type="text"
            name=""
            id="arabicName"
            // {...register("arabicName", {
            //   required: "يجب كتابة الاسم الرباعي بالعربي",
            // })}
            placeholder=""
          >
            {issuesSubTypes.map((subType, index) => {
              return (
                <option key={index} value={subType}>
                  {subType}
                </option>
              );
            })}
          </select>
          {/* <p className="input-error">{errors.arabicName?.message}</p> */}
        </div>
      </div>
      <div className="main-section">
        <DynamicList
          title={"المدعي"}
          recordType={"addClient"}
          btnTitle={"اضافة عميل"}
        >
          <PersonSelector />
        </DynamicList>
      </div>
      <div className="main-section">
        <DynamicList
          title={"المدعي علية"}
          recordType={"addClient"}
          btnTitle={"اضافة عميل"}
        >
          <PersonSelector />
        </DynamicList>
      </div>
      {/* attachments */}
      <div className="main-section">
        <DynamicList title={"مرفقات القضية"}>
          <div className="flex flex-1 gap-2">
            <input className="flex-1" type="text" placeholder="اسم المرفق" />
            <div className="bg-white flex-1">
              <input type="file" name="" id="" />
            </div>
          </div>
        </DynamicList>
      </div>
      {/* details !*/}
      <div className="main-section simple-input !min-w-full flex-1">
        <label htmlFor="">التفاصيل</label>
        <textarea
          type="text"
          name=""
          className="text-xl"
          id="addIssueDetails"
          {...register("addIssueDetails", {
            required: "يجب كتابة الاسم الرباعي بالعربي",
          })}
          placeholder=""
        ></textarea>

        <p className="input-error">{errors.addIssueDetails?.message}</p>
      </div>
      <button className="text-white text-xl p-4 w-full bg-textGreen">
        اضافة
      </button>
    </form>
  );
};

export default AddIssue;
