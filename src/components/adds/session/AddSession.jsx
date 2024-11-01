"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { resetPopups } from "@/globalState/Features/popupsSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import DynamicList from "@/components/shared/dynamicList/DynamicList";
import {
  setCurrentErrors,
  setCurrentForm,
} from "@/globalState/Features/formStateSlice";
import PersonSelector from "@/components/shared/personSelector/PersonSelector";
import HRData from "@/fakeData/HRData.json";

const AddSession = () => {
  const signUpForm = useForm();
  const dispatch = useDispatch();
  const currentForm = useSelector((store) => store.formState.currentForm);
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

    console.log(currentForm);
    // const result = await fetchRegisterUser({
    //   ...formData,
    // });

    // dispatch(closeLoader());
  }
  const sessionsFilterArr = [
    {
      name: "اسم الموظف",
      value: "phone",
    },
    {
      name: "رقم الموظف",
      value: "id",
    },
    {
      name: "هاتف الموظف",
      value: "phone",
    },
  ];
  useEffect(() => {
    dispatch(setCurrentForm(register));
    dispatch(setCurrentErrors(errors));
  }, [register, errors]);
  return (
    <form
      method="POST"
      onSubmit={handleSubmit(handleSubmitSignUp)}
      action=""
      noValidate
      id="addIssueRecord"
      className="py-4"
    >
      <div className="main-section small-inputs !grid-cols-3 flex flex-col lg:flex-row w-full [&>div]:flex-1 gap-4 pe-0.5">
        {/* contract type ! */}
        <div className="simple-input">
          <label htmlFor="">نوع الجلسة</label>
          <select
            type="text"
            name=""
            id="contractName"
            {...register("contractName", {
              required: "يجب كتابة عنوان الجلسة",
            })}
            placeholder=""
          >
            <option className="hidden" value="">
              اختر نوع الجلسة
            </option>
            <option value="قرار موظف">قرار موظف</option>
            <option value="قرار عميل">قرار عميل</option>
          </select>
          <p className="input-error">{errors.contractName?.message}</p>
        </div>
        {/* contract status ! */}
        <div className="simple-input">
          <label htmlFor="">حالة الجلسة</label>
          <select
            type="text"
            name=""
            id="contractStatus"
            {...register("contractStatus", {
              required: "يجب كتابة عنوان الجلسة",
            })}
            placeholder=""
          >
            <option className="hidden" value="">
              اختر حالة الجلسة
            </option>
            <option value="قرار موظف">جديدة</option>
            <option value="قرار عميل">تنفذت</option>
            <option value="قرار عميل">قيد التنفيذ</option>
          </select>
          <p className="input-error">{errors.contractStatus?.message}</p>
        </div>
        {/* contract pay type !*/}
        {/* <div className="simple-input">
          <label htmlFor="">نوع الدفع</label>
          <select
            type="text"
            name=""
            id="contractPayType"
            {...register("contractPayType", {
              required: "يجب كتابة عنوان الجلسة",
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
        </div> */}
        {/* contract Date ! */}
        <div className="simple-input">
          <label htmlFor="">تاريخ الجلسة</label>
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
      {/* parties */}
      <div className="input main-section !min-w-full">
        {/* <Parties /> */}
        <DynamicList
          title={"المحامين"}
          personsSelectorFilter={sessionsFilterArr}
          btnTitle={"اضافة موظف"}
          recordType={"addEmployee"}
        >
          <PersonSelector
            data={HRData}
            filterArr={[
              { name: "اسم الموظف", value: "name" },
              { name: "رقم الموظف", value: "id" },
              { name: "رقم الهاتف", value: "phone" },
            ]}
            last={true}
            recordType={"addEmployee"}
            personName="موظف"
          />
        </DynamicList>
      </div>
      {/* name arabic ! arabicName*/}
      <div className="simple-input main-section !min-w-full flex-1 ">
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
      <div className="input main-section !min-w-full">
        {/* <Clauses /> */}
        <DynamicList title={"البنود"}>
          <textarea name="" id=""></textarea>
        </DynamicList>
      </div>
      {/* attachments */}
      <div className="main-section">
        <DynamicList title={"مرفقات الجلسة"}>
          <div className="flex flex-1 gap-2">
            <select className="flex-1" name="" id="">
              <option value="">نوع المرفق</option>
              <option value="">ضبط الجلسة</option>
              <option value="">اخري</option>
            </select>
            <input className="flex-1" type="text" placeholder="اسم المرفق" />
            <div className="bg-white flex-1">
              <input type="file" name="" id="" />
            </div>
          </div>
        </DynamicList>
      </div>
      <button className="text-white text-xl mt-4 p-4 w-full bg-textGreen rounded">
        اضافة
      </button>
    </form>
  );
};

export default AddSession;
