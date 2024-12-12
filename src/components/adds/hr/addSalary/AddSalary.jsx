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

const AddSalary = () => {
  const signUpForm = useForm();
  const dispatch = useDispatch();
  const currentForm = useSelector((store) => store.formState.currentForm);
  // const { currentId } = useSelector((store) => store.tempData);
  const { employeeId } = useSelector((store) => store.tempData.employeeDetails);
  const { user: { token } } = useSelector((store) => store.auth);
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
    handleAddSalary(formData)
      .then((e) => toast.success("تم الحفظ بنجاح"))
      .catch((e) => toast.error("حدث خطأ ما"));

    console.log(currentForm);

    // dispatch(closeLoader());
  }
  useEffect(() => {
    dispatch(setCurrentForm(register));
    dispatch(setCurrentErrors(errors));
  }, [register, errors]);

  async function handleAddSalary(params) {
    console.log("employeeId", employeeId);
    console.log(params);
    try {
      const res = await fetchWithCheck(`/api/EmployeeSalary`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          employeeId: employeeId,
          date: params.salaryDate,
          amount: params.salaryAmount,
          deductions: params.salaryDeductions,
          paid: params.salaryAmount,
          outstanding: 0,
          status: "string",
          details: params.salaryDetails,
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
      <div className="small-inputs main-section flex flex-col  lg:flex-row w-full [&>div]:flex-1 gap-4 pe-0.5">
        {/*  amount ! */}
        <div className="simple-input">
          <label htmlFor="">المبلغ الاساسي</label>
          <input
            type="text"
            name=""
            id="salaryAmount"
            {...register("salaryAmount", {
              required: "يجب اختيار المبلغ",
            })}
            placeholder=""
          />

          <p className="input-error">{errors.salaryAmount?.message}</p>
        </div>
        {/*  Deductions ! */}
        <div className="simple-input">
          <label htmlFor="">الخصومات</label>
          <input
            type="text"
            name=""
            id="salaryDeductions"
            {...register("salaryDeductions", {
              required: "يجب اختيار المبلغ",
            })}
            defaultValue={0}
            placeholder=""
          />

          <p className="input-error">{errors.salaryDeductions?.message}</p>
        </div>
        {/*  amount ! */}
        <div className="simple-input">
          <label htmlFor="">الحوافز</label>
          <input
            type="text"
            name=""
            id="salary"
            // {...register("salary", {
            //   required: "يجب اختيار المبلغ",
            // })}
            defaultValue={0}
            placeholder=""
          />

          <p className="input-error">{errors.salary?.message}</p>
        </div>

        {/*  Date ! */}
        <div className="simple-input">
          <label htmlFor="">التاريخ</label>
          <input
            type="date"
            name=""
            defaultValue={new Date().toISOString().split("T")[0]}
            id="salaryDate"
            {...register("salaryDate", {
              required: "يجب ادخال تاريخ الدفعة",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.salaryDate?.message}</p>
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
          // id="salaryDetails"
          {...register("salaryDetails", {
            required: "يجب ادخال التفاصيل الاضافية",
          })}
        ></textarea>
        <p className="input-error">{errors.salaryDetails?.message}</p>
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

export default AddSalary;
