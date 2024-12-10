"use client";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import DynamicList from "@/components/shared/dynamicList/DynamicList";
import {
  setCurrentErrors,
  setCurrentForm,
} from "@/globalState/Features/formStateSlice";

import { fetchWithCheck } from "@/helperFunctions/dataFetching";

const AddWarning = () => {
  const signUpForm = useForm();
  const dispatch = useDispatch();
  const currentForm = useSelector((store) => store.formState.currentForm);
  // const { currentId } = useSelector((store) => store.tempData);
  const { employeeId } = useSelector((store) => store.tempData.employeeDetails);
  const { JWT } = useSelector((store) => store.auth);
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
    handleAddWarning(formData)
      .then((e) => toast.success("تم الحفظ بنجاح"))
      .catch((e) => toast.error("حدث خطأ ما"));

    console.log(currentForm);

    // dispatch(closeLoader());
  }
  useEffect(() => {
    dispatch(setCurrentForm(register));
    dispatch(setCurrentErrors(errors));
  }, [register, errors]);

  async function handleAddWarning(params) {
    console.log("employeeId", employeeId);
    console.log(params);
    try {
      const res = await fetchWithCheck(`/api/EmployeeWarning`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JWT}`,
        },
        body: JSON.stringify({
          employeeId: employeeId,
          warningType: params.warningType,
          warningDate: params.warningDate,
          additionalDetails: params.extraDetails,
        }),
      });
      return res;
    } catch (err) {
      throw err;
    }
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
      <div className="small-inputs main-section flex flex-col !grid-cols-2 lg:flex-row w-full [&>div]:flex-1 gap-4 pe-0.5">
        {/*  type ! */}
        <div className="simple-input">
          <label htmlFor="">الانذار</label>
          <select
            type="text"
            name=""
            id="warningType"
            {...register("warningType", {
              required: "يجب اختيار نوع الانذار",
            })}
            placeholder=""
          >
            <option value="تأخير">تأخير</option>
            <option value="غائب">غائب</option>
          </select>
          <p className="input-error">{errors.warningType?.message}</p>
        </div>

        {/*  Date ! */}
        <div className="simple-input">
          <label htmlFor="">التاريخ</label>
          <input
            type="date"
            name=""
            defaultValue={new Date().toISOString().split("T")[0]}
            id="warningDate"
            {...register("warningDate", {
              required: "يجب ادخال تاريخ الانذار",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.warningDate?.message}</p>
        </div>
      </div>
      {/* employee selector */}
      {/* <div className="input main-section px-0.5">
        <DynamicList
          title={" الموظف"}
          btnTitle={"جلسة"}
          recordType={"record"}
          multi={false}
        >
          <PersonSelector defaultValue={currentId} />
        </DynamicList>
      </div> */}
      {/* name arabic ! arabicName*/}
      <div className="simple-input !min-w-full flex-1 main-section">
        <h3 className="text-lg font-semibold">تفاصيل اضافية</h3>

        <textarea
          className="text-lg"
          name=""
          // id="extraDetails"
          {...register("extraDetails", {
            required: "يجب ادخال التفاصيل الاضافية",
          })}
        ></textarea>
        <p className="input-error">{errors.extraDetails?.message}</p>
      </div>

      <button
        type="submit"
        className="text-white text-xl mt-4 p-4 w-full bg-textGreen rounded"
      >
        اضافة
      </button>
    </form>
  );
};

export default AddWarning;
