import { closeAddFormRecord } from "@/globalState/Features/formStateSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Expense = () => {
  const dispatch = useDispatch();
  return (
    <form className="bg-bgGreen p-4">
      <div className="small-inputs !grid-cols-3">
        <div className="simple-input">
          <label htmlFor="">اسم البند</label>
          <select name="" id="">
            <option value="" className="hidden">اختر البند</option>
            <option value="">بند 1</option>
            <option value="">بند 2</option>
          </select>
        </div>
        <div className="simple-input">
          <label htmlFor="">قيمة البند بالريال</label>
          <input type="text" name="" id="" />
        </div>
        <div className="simple-input">
          <label htmlFor="">تاريخ البند</label>
          <input type="date" name="" id="" />
        </div>
      </div>
      <div className="simple-input">
        <label htmlFor="">تفاصيل اضافية</label>
        <textarea name="" id=""></textarea>
      </div>
      <button
        onClick={() => {
          toast.success("تم الحفظ بنجاح");
          dispatch(closeAddFormRecord());
        }}
        className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
      >
        حفظ
      </button>
    </form>
  );
};

export default Expense;
