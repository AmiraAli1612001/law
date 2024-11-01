"use client";
import React, { useEffect, useState } from "react";
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

const RequestVacation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [delayDate, setDelayDate] = useState(new Date());
  const signUpForm = useForm();
  const dispatch = useDispatch();
  const currentForm = useSelector((store) => store.formState.currentForm);
  function calculateDelay() {
    const date1 = new Date(startDate);
    const date2 = new Date(delayDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays);
    return diffDays;
  }
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
      className="px-0.5 "
    >
      <div className="small-inputs main-section flex flex-col lg:flex-row w-full [&>div]:flex-1 gap-4 pe-0.5">
        {/* contract type ! */}
        <div className="simple-input">
          <label htmlFor="">نوع الاجازة</label>
          <select
            type="text"
            name=""
            id="contractName"
            {...register("contractName", {
              required: "يجب كتابة عنوان الاجازة",
            })}
            placeholder=""
          >
            <option className="hidden" value="">
              اختر نوع الاجازة
            </option>
            <option value="قرار موظف">قرار موظف</option>
            <option value="قرار عميل">قرار عميل</option>
          </select>
          <p className="input-error">{errors.contractName?.message}</p>
        </div>
        {/* contract status ! */}
        <div className="simple-input">
          <label htmlFor="">سبب الاجازة</label>
          <select
            type="text"
            name=""
            id="contractStatus"
            {...register("contractStatus", {
              required: "يجب كتابة عنوان الاجازة",
            })}
            placeholder=""
          >
            <option className="hidden" value="">
              اختر سبب الاجازة
            </option>
            <option value="قرار موظف">مرضية</option>
            <option value="قرار عميل">اخر</option>
          </select>
          <p className="input-error">{errors.contractStatus?.message}</p>
        </div>
        {/* contract pay type !*/}
        <div className="simple-input">
          <label htmlFor="">مدفوعة الأجر</label>
          <select
            type="text"
            name=""
            id="contractPayType"
            {...register("contractPayType", {
              required: "يجب كتابة عنوان الاجازة",
            })}
            placeholder=""
          >
            <option value="1">نعم</option>
            <option value="2">لا</option>
          </select>
          <p className="input-error">{errors.contractPayType?.message}</p>
        </div>

        {/* vacation Date ! */}
        <div className="simple-input">
          <label htmlFor="">بداية الاجازة</label>
          <input
            type="date"
            name=""
            onChange={(e) => setStartDate(e.target.value)}
            // value={startDate?.toISOString().split("T")[0]}
            defaultValue={new Date().toISOString().split("T")[0]}
            id="vacationDate"
            // {...register("vacationDate", {
            //   // required: "يجب كتابة الاسم الرباعي بالعربي",
            // })}
            placeholder=""
          />
          <p className="input-error">{errors.vacationDate?.message}</p>
        </div>
        {/* vacation due Date ! */}
        <div className="simple-input">
          <label htmlFor="">نهاية الاجازة</label>
          <input
            type="date"
            name=""
            defaultValue={new Date().toISOString().split("T")[0]}
            // value={delayDate?.toISOString().split("T")[0]}
            onChange={(e) => setDelayDate(e.target.value)}
            // id="employeeVacationDueDate"
            // {...register("employeeVacationDueDate", {
            //   // required: "يجب كتابة الاسم الرباعي بالعربي",
            // })}
            placeholder=""
          />
          <p className="input-error">
            {errors.employeeVacationDueDate?.message}
          </p>
        </div>
        {/* calculate vacation time in days */}
        <div className="simple-input">
          <label htmlFor="">عدد الايام</label>
          <div className="input flex-1 bg-white">
            {calculateDelay() > 0
              ? `${calculateDelay()} يوم`
              : calculateDelay() < 0
              ? `${Math.abs(calculateDelay())} يوم`
              : "غير محدد"}
          </div>
          <p></p>
        </div>
      </div>
      {/* parties */}
      {/* <div className="input !min-w-full main-section">
        <DynamicList
          title={"اسم الموظف"}
          personsSelectorFilter={sessionsFilterArr}
          btnTitle={"جلسة"}
          recordType={"record"}
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
      </div> */}
      {/* name arabic ! arabicName*/}
      <div className="simple-input !min-w-full main-section">
        <h3 className="text-lg font-semibold">السبب</h3>

        <textarea className="text-lg" name="" id=""></textarea>
        <p className="input-error">{errors.arabicName?.message}</p>
      </div>

      <button className="text-white text-xl p-4 w-full bg-textGreen rounded">
        اضافة
      </button>
    </form>
  );
};

export default RequestVacation;
