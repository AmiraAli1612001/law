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

const AddReward = () => {
  const signUpForm = useForm();
  const dispatch = useDispatch();
  const currentForm = useSelector((store) => store.formState.currentForm);
  // const { currentId } = useSelector((store) => store.tempData);
  const { employeeId } = useSelector((store) => store.tempData.employeeDetails);
  const {
    user: { token },
  } = useSelector((store) => store.auth);
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
    handleAddReward(formData)
      .then((e) => toast.success("تم الحفظ بنجاح"))
      .catch((e) => toast.error("حدث خطأ ما"));

    console.log(currentForm);

    // dispatch(closeLoader());
  }
  useEffect(() => {
    dispatch(setCurrentForm(register));
    dispatch(setCurrentErrors(errors));
  }, [register, errors]);

  async function handleAddReward(params) {
    console.log("employeeId", employeeId);
    console.log(params);
    try {
      const res = await fetchWithCheck(`/api/EmployeeReward`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          employeeId: employeeId,
          date: params.rewardDate,
          amount: params.rewardAmount,
          deductions: params.rewardDeductions,
          paid: params.rewardAmount,
          outstanding: 0,
          status: "string",
          details: params.rewardDetails,
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
      <div className="small-inputs main-section flex flex-col  !grid-cols-3 lg:flex-row w-full [&>div]:flex-1 gap-4 pe-0.5">
        {/*  amount ! */}
        <div className="simple-input">
          <label htmlFor="">المبلغ</label>
          <input
            type="text"
            name=""
            id="rewardAmount"
            {...register("rewardAmount", {
              required: "يجب اختيار المبلغ",
            })}
            placeholder=""
          />

          <p className="input-error">{errors.rewardAmount?.message}</p>
        </div>
        {/*  reason ! */}
        <div className="simple-input">
          <label htmlFor="">السبب</label>
          <input
            type="text"
            name=""
            id="rewardDeductions"
            {...register("rewardDeductions", {
              required: "يجب اختيار المبلغ",
            })}
            defaultValue={0}
            placeholder=""
          />

          <p className="input-error">{errors.rewardDeductions?.message}</p>
        </div>
        {/*  details ! */}

        {/*  Date ! */}
        <div className="simple-input">
          <label htmlFor="">التاريخ</label>
          <input
            type="date"
            name=""
            defaultValue={new Date().toISOString().split("T")[0]}
            id="rewardDate"
            {...register("rewardDate", {
              required: "يجب ادخال تاريخ الدفعة",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.rewardDate?.message}</p>
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
        <h3 className="text-lg font-semibold">التفاصيل</h3>

        <textarea
          className="text-lg"
          name=""
          // id="rewardDetails"
          {...register("rewardDetails", {
            required: "يجب ادخال التفاصيل",
          })}
        ></textarea>
        <p className="input-error">{errors.rewardDetails?.message}</p>
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

export default AddReward;
