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
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "@/context/Auth";

const AddWarning = () => {
  const signUpForm = useForm();
  const dispatch = useDispatch();
  const currentForm = useSelector((store) => store.formState.currentForm);
  // const { currentId } = useSelector((store) => store.tempData);
  const { employeeId } = useSelector((store) => store.tempData.employeeDetails);
  // const { user: { token } } = useSelector((store) => store.auth);
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

  useEffect(() => {
    dispatch(setCurrentForm(register));
    dispatch(setCurrentErrors(errors));
  }, [register, errors]);

  async function handleAddWarning(params) {
    console.log("employeeId", employeeId);
    console.log(params);
    try {
      // const res = await fetchWithCheck(`/api/EmployeeWarning`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //   },
      //   body: JSON.stringify({
      //     employeeId: employeeId,
      //     warningType: params.warningType,
      //     warningDate: params.warningDate,
      //     additionalDetails: params.extraDetails,
      //   }),
      // });
      return res;
    } catch (err) {
      throw err;
    }

  }

  let { getAllWarning } = useContext(AuthContext)
  let [id, setID] = useState(window.localStorage.getItem("employeeId")
  )
  let [warningType, setWarningType] = useState("")
  let [warningDate, setWarningDate] = useState("")
  let [additionalDetails, setAdditionalDetails] = useState("")
  const apiKey = process.env.NEXT_PUBLIC_DEV;

  useEffect(() => {

    setID(
      window.localStorage.getItem("employeeId")

    )
  }, [])

  const addWarning = async () => {
    // Ensure that all fields are filled
    if (!warningType || !warningDate || !additionalDetails) {
      toast.error("Please fill in all required fields.");
      return;
    }
  
    try {
      const response = await fetch(`${apiKey}/EmployeeWarning`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
        body: JSON.stringify({
          employeeWarningId: 0,  // Assuming this is set to 0
          employeeId: id,  // Ensure id is valid
          warningType: warningType,
          warningDate: warningDate,
          additionalDetails: additionalDetails,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        toast.error(`Error: ${errorData.message || "Something went wrong"}`);
      } else {
        toast.success("تم اضافة التحذير بنجاح");
        getAllWarning();  // Refresh the warning list
      }
  
    } catch (error) {
      console.log("Request failed:", error);
      toast.error("حدث خطأ ما");
    }
  };
  
  async function handleSubmitSignUp(formData, e) {
    // setGeneralError("");
    // dispatch(openLoader("جاري التسجيل"));


    console.log(currentForm);

    // dispatch(closeLoader());
  }
  return (
    <form
      method="POST"
      onSubmit={(e) => {
        e.preventDefault()
        addWarning()
      }
      }
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
            onChange={(e) => {
              setWarningType(e.target.value)
            }}
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
            onChangeCapture={(e) => {
              setWarningDate(e.target.value)
            }}
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
          onChange={(e) => {
            setAdditionalDetails(e.target.value)
          }}
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
