"use client";
import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { resetPopups } from "@/globalState/Features/popupsSlice";
import {
  setCurrentErrors,
  setCurrentForm,
} from "@/globalState/Features/formStateSlice";
import DynamicList from "@/components/shared/dynamicList/DynamicList";
import PersonSelector from "@/components/shared/personSelector/PersonSelector";
import HRData from "@/fakeData/HRData.json";
import AuthContext from "@/context/Auth";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const AddVacation = () => {
  const [delayDate, setDelayDate] = useState(new Date());
  const signUpForm = useForm();
  const dispatch = useDispatch();
  const currentForm = useSelector((store) => store.formState.currentForm);

  const { register, handleSubmit, formState, setError } = signUpForm;
  const { errors } = formState;

  const [leaveType, setLeaveType] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split("T")[0]);
  const [reason, setReason] = useState("");

  const apiKey = process.env.NEXT_PUBLIC_DEV;
  const { getAllLeaveAdmin } = useContext(AuthContext);

  const calculateDelay = () => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const diffTime = Math.abs(date2 - date1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const addLeave = async () => {
    const employeeId = localStorage.getItem("employeeId");
    const token = localStorage.getItem("token");

    if (!leaveType || !startDate || !endDate || !reason) {
      toast.error("يرجى ملء جميع الحقول");
      return;
    }

    if (!token || !employeeId) {
      toast.error("غير مصرح لك بالوصول");
      return;
    }

    try {
      const response = await fetch(`${apiKey}/EmployeeLeave/request/${employeeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          leaveType,
          isPaid,
          startDate,
          endDate,
          reason,
        }),
      });

      const responseText = await response.text();
      console.log(responseText);

      if (response.ok) {
        toast.success("تم طلب الإجازة بنجاح");
        getAllLeaveAdmin();
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("حدث خطأ أثناء إرسال الطلب");
    }
  };

  useEffect(() => {
    dispatch(setCurrentForm(register));
    dispatch(setCurrentErrors(errors));
  }, [register, errors, dispatch]);

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(addLeave)}
      noValidate
      id="addIssueRecord"
      className="py-4 px-0.5"
    >
      <div className="small-inputs main-section !grid-cols-3 flex flex-col lg:flex-row w-full [&>div]:flex-1 gap-4 pe-0.5">
        <div className="simple-input">
          <label htmlFor="">نوع الاجازة</label>
          <select
            {...register("contractName", {
              required: "يجب كتابة عنوان الاجازة",
            })}
            onChange={(e) => setLeaveType(e.target.value)}
          >
            <option className="hidden" value="">
              اختر نوع الاجازة
            </option>
            <option value="قرار موظف">قرار موظف</option>
            <option value="قرار عميل">قرار عميل</option>
          </select>
          <p className="input-error">{errors.contractName?.message}</p>
        </div>

        <div className="simple-input">
          <label htmlFor="">مدفوعة الأجر</label>
          <select
            {...register("contractPayType", {
              required: "يرجى تحديد ما إذا كانت مدفوعة الأجر",
            })}
            onChange={(e) => setIsPaid(e.target.value === "true")}
          >
            <option value="true">نعم</option>
            <option value="false">لا</option>
          </select>
          <p className="input-error">{errors.contractPayType?.message}</p>
        </div>

        <div className="simple-input">
          <label htmlFor="">بداية الاجازة</label>
          <input
            type="date"
            defaultValue={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="simple-input">
          <label htmlFor="">نهاية الاجازة</label>
          <input
            type="date"
            defaultValue={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="simple-input">
          <label htmlFor="">عدد الايام</label>
          <div className="input flex-1 bg-white">
            {calculateDelay()} يوم
          </div>
        </div>
      </div>

      <div className="input !min-w-full main-section">
        <DynamicList
          title={"اسم الموظف"}
          personsSelectorFilter={[
            { name: "اسم الموظف", value: "name" },
            { name: "رقم الموظف", value: "id" },
            { name: "رقم الهاتف", value: "phone" },
          ]}
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
            recordType={"addEmployee"}
          />
        </DynamicList>
      </div>

      <div className="simple-input !min-w-full flex-1 main-section">
        <h3>السبب</h3>
        <textarea onChange={(e) => setReason(e.target.value)}></textarea>
      </div>

      <button className="text-white text-xl mt-4 p-4 w-full bg-textGreen rounded">
        اضافة
      </button>
    </form>
  );
};

export default AddVacation;
