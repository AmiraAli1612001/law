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

const AddWarning = () => {
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
      <div className="small-inputs main-section flex flex-col !grid-cols-2 lg:flex-row w-full [&>div]:flex-1 gap-4 pe-0.5">
        {/*  type ! */}
        <div className="simple-input">
          <label htmlFor="">الانذار</label>
          <select
            type="text"
            name=""
            id="contractName"
            {...register("contractName", {
              required: "يجب كتابة عنوان الانذار",
            })}
            placeholder=""
          >
            <option value="قرار موظف">تأخير</option>
            <option value="">غائب</option>
          </select>
          <p className="input-error">{errors.contractName?.message}</p>
        </div>

        {/* vacation Date ! */}
        <div className="simple-input">
          <label htmlFor="">التاريخ</label>
          <input
            type="date"
            name=""
            defaultValue={new Date().toISOString().split("T")[0]}
            id="vacationDate"
            {...register("vacationDate", {
              // required: "يجب كتابة الاسم الرباعي بالعربي",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.vacationDate?.message}</p>
        </div>
        {/* <div className="simple-input">
          <label htmlFor="">وقت الانذار</label>
          <input
            type="time"
            name=""
            // defaultValue={new Date().toISOString().split("T")[0]}
            id="vacationDate"
          />
        </div> */}
        {/* vacation due Date ! */}
        {/* <div className="simple-input">
          <label htmlFor="">وقت الانصراف</label>
          <input
            type="time"
            name=""
            // defaultValue={new Date().toISOString().split("T")[0]}
            id="vacationDate"
          />
        </div> */}
      </div>
      {/* employee selector */}
      <div className="input main-section px-0.5">
        {/* <Parties /> */}
        <DynamicList
          title={" الموظف"}
          btnTitle={"جلسة"}
          recordType={"record"}
          multi={false}
        >
          <PersonSelector />
        </DynamicList>
      </div>
      {/* name arabic ! arabicName*/}
      <div className="simple-input !min-w-full flex-1 main-section">
        <h3 className="text-lg font-semibold">تفاصيل اضافية</h3>

        <textarea className="text-lg" name="" id=""></textarea>
        <p className="input-error">{errors.arabicName?.message}</p>
      </div>

      <button className="text-white text-xl mt-4 p-4 w-full bg-textGreen rounded">
        اضافة
      </button>
    </form>
  );
};

export default AddWarning;