"use client";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setContract } from "@/globalState/Features/tempDataSlice";
import "./style.css";
const ContractRow = ({ data, swipe }) => {
  const { id, contractId, paymentType, date, value, middleman } = data;

  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <tr className={`bg-bgGreen  p-4  rounded-lg relative payments-custom-row`}>
      <td colSpan={7}>
        <div className="flex flex-col gap-2">
          <div className="small-inputs !grid-cols-3">
            <div className="simple-input">
              <label htmlFor="">الموظف المسئول</label>
              <input type="text" />
            </div>
            <div className="simple-input">
              <label htmlFor="">اسم الجهة</label>
              <input type="text" />
            </div>
            <div className="simple-input">
              <label htmlFor="">التاريخ</label>
              <input type="date" />
            </div>
          </div>
          <div className="small-inputs !grid-cols-3">
            <div className="simple-input">
              <label htmlFor="">المبلغ</label>
              <input type="text" />
            </div>
            <div className="simple-input">
              <label htmlFor="">طريقة الدفع</label>
              <select name="" id="">
                <option value="cash">نقدي</option>
                <option value="bank">بنكي</option>
              </select>
            </div>
            <div className="simple-input">
              <label htmlFor="">المرفق</label>
              <input type="file" />
            </div>
          </div>
          <div className="simple-input">
            <label htmlFor="">تفاصيل اضافية</label>
            <textarea name="" id=""></textarea>
          </div>
          <div>
            {/* <Link
              className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center font-bold inline-block"
              onClick={(e) => {
                e.preventDefault();
                dispatch(setContract(data));
                router.push(`/contracts/${id}`);
              }}
              href={`/contracts/${id}`}
            >
              التفاصيل
            </Link> */}
            <button className="bg-yellow-500 bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center font-bold">
              تحصيل
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ContractRow;
