"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
// import Parties from "./subComponents/Parties";
import Clauses from "./subComponents/Clauses";
// import { resetPopups } from "@/globalState/Features/popupsSlice";
import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
import DynamicList from "@/components/shared/dynamicList/DynamicList";
import PersonSelector from "@/components/shared/personSelector/PersonSelector";
import PaymentSelector from "@/components/shared/payment/paymentSelector/PaymentSelector";

const AddContract = () => {
  const signUpForm = useForm();
  const [middlemanPayType, setMiddlemanPayType] = useState(0);
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
  const contractType = [
    "اتعاب محاماة أفراد",
    "اتعاب محاماة شركات",
    "عقد خدمات",
    "عقد استشارة",
  ];
  const contractPayTypes = [
    "كامل",
    "دفعات: تقسم وفقًا لتواريخ استحقاق",
    "مجاني تتحمله الشركة",
  ];
  return (
    <form
      method="POST"
      onSubmit={handleSubmit(handleSubmitSignUp)}
      action=""
      noValidate
      id="addIssueRecord"
      // className="py-4"
    >
      {/* basic info */}
      <div className="small-inputs flex flex-col lg:flex-row w-full [&>div]:flex-1 gap-4 pe-0.5 main-section">
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
            {contractType.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
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
              required: "يجب اختيار حالة العقد",
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
        {/* contract classification ! */}
        <div className="simple-input">
          <label htmlFor="">تصنيف العقد</label>
          <select
            type="text"
            name=""
            id="contractClassification"
            {...register("contractClassification", {
              required: "يجب اختيار تصنيف العقد",
            })}
            placeholder=""
          >
            <option className="hidden" value="">
              اختر تصنيف العقد
            </option>
            <option value="قرار موظف">معتمد</option>
            <option value="قرار عميل">غير معتمد</option>
          </select>
          <p className="input-error">
            {errors.contractClassification?.message}
          </p>
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
      {/* payment */}
      <div className="small-inputs flex flex-col lg:flex-row w-full [&>div]:flex-1 gap-4 pe-0.5 main-section">
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
            {contractPayTypes.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <p className="input-error">{errors.contractPayType?.message}</p>
        </div>

        {/* contract value !*/}
        <div className="simple-input">
          <label htmlFor="">مبلغ العقد</label>
          <input
            type="text"
            name=""
            id="contractValue"
            {...register("contractValue", {
              required: "يجب ادخال مبلغ العقد",
            })}
            placeholder="ادخل مبلغ العقد"
          />
          <p className="input-error">{errors.contractValue?.message}</p>
        </div>
        {/* middleman percentage !*/}
        <div className="simple-input">
          <label htmlFor="">
            {middlemanPayType == 0 ? "نسبة الوسيط" : "قيمة الوسيط"}
          </label>
          <div className=" relative flex">
            <input
              type="text"
              name=""
              defaultValue={0}
              id="middlemanPercentage"
              {...register("middlemanPercentag", {
                required: "يجب ادخال مبلغ العقد",
              })}
              className="!rounded-e-none"
              placeholder=""
            />
            <select
              type="text"
              name=""
              id="middlemanPayType"
              className=" !w-20 !rounded-s-none"
              {...register("middlemanPayType", {
                required: "يجب كتابة عنوان العقد",
              })}
              placeholder=""
              onChange={(e) => {
                setMiddlemanPayType(e.target.value);
              }}
            >
              <option value="0">نسبة</option>
              <option value="1">قيمة</option>
            </select>
          </div>
          <p className="input-error">{errors.middlemanPercentage?.message}</p>
        </div>
      </div>
      <div className="main-section">
        <PaymentSelector/>
      </div>
      {/* parties */}
      <div className="input !min-w-full main-section">
        <DynamicList
          title={"اطراف العقد"}
          recordType={"addClient"}
          btnTitle="عميل جديد"
        >
          <PersonSelector />
        </DynamicList>
        {/* <Parties /> */}
      </div>
      {/* tamheed*/}
      <div className="simple-input !min-w-full flex-1 main-section">
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

export default AddContract;
