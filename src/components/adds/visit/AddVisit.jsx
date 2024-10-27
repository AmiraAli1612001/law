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

const AddVisit = () => {
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
      name: "اسم العميل",
      value: "phone",
    },
    {
      name: "رقم العميل",
      value: "id",
    },
    {
      name: "هاتف العميل",
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
      <div className="small-inputs !grid-cols-3">
        {/* contract type ! */}
        <div className="simple-input">
          <label htmlFor="">سبب الزيارة</label>
          <select
            type="text"
            name=""
            id="contractName"
            {...register("contractName", {
              required: "يجب اختيار سبب الزيارة",
            })}
            placeholder=""
          >
            <option className="hidden" value="">
              اختر سبب الزيارة
            </option>
            <option value="قرار موظف">استشارة</option>
            <option value="قرار عميل">مشاورة</option>
          </select>
          <p className="input-error">{errors.contractName?.message}</p>
        </div>
        {/* contract status ! */}
        {/* <div className="simple-input">
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
            <option value="قرار موظف">معاينة</option>
            <option value="قرار عميل">اصدار</option>
          </select>
          <p className="input-error">{errors.contractStatus?.message}</p>
        </div> */}
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
          <label htmlFor="">تاريخ الزيارة</label>
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
        {/* <Parties /> */}
        <DynamicList
          title={"العميل"}
          multi={false}
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
      <div className="simple-input !min-w-full flex-1 ">
        <h3 className="text-lg font-semibold">التمهيد</h3>
        
        <textarea className="text-lg" name="" id=""></textarea>
        <p className="input-error">{errors.arabicName?.message}</p>
      </div>

      {/* clauses */}
      {/* <div className="input !min-w-full">
        <DynamicList
          title={"البنود"}

        >
          <textarea name="" id=""></textarea>
        </DynamicList>
      </div> */}
      <button className="text-white text-xl mt-4 p-4 w-full bg-textGreen rounded">
        اضافة
      </button>
    </form>
  );
};

export default AddVisit;
