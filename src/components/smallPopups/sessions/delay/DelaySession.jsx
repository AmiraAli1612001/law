"use client";
import { resetPopups } from "@/globalState/Features/smallPopupsSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const DelaySession = () => {
  const dispatch = useDispatch();
  const [delayDate, setDelayDate] = useState(new Date());
  function calculateDelay() {
    const date1 = new Date();
    const date2 = new Date(delayDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  function handleSubmit(e){
    e.preventDefault()
    dispatch(resetPopups())
    toast.success("تم التأجيل بنجاح")
  }
  return (
    <form className="flex flex-col gap-4">
      <div className="simple-input">
        <label htmlFor="">سبب التأجيل</label>
        <input required type="text" name="" id="" />
      </div>
      <div className="simple-input">
        <label htmlFor="">تاريخ التأجيل</label>
        <input
          required
          value={delayDate.toISOString().split("T")[0]}
          onChange={(e) => setDelayDate(e.target.value)}
          type="date"
          name=""
          id=""
        />
      </div>
      <div className="simple-input">
        <label htmlFor="">وقت التأجيل</label>
        <div className="input">
          {/* calculate delay time in days */}
          {calculateDelay() > 0
            ? `${calculateDelay()} يوم`
            : calculateDelay() < 0
            ? `${Math.abs(calculateDelay())} يوم`
            : "غير محدد"}
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}  className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all font-bold text-white px-4 py-2 rounded text-sm text-center">
        حفظ
      </button>
    </form>
  );
};

export default DelaySession;
