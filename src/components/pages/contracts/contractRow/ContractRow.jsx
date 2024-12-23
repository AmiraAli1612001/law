"use client"
import Link from "next/link";
import React from "react";
import "./contractRow.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setContract } from "@/globalState/Features/tempDataSlice";
import { toggleAddRecordPopup, toggleEditEmployee } from "@/globalState/Features/popupsSlice";
const ContractRow = ({ data, swipe }) => {
  console.log("data", data)
  // const { id, date, title, firstParty, secondParty, status } = data;
  const {
    id,
    contractNumber,
    contractDate,
    totalAmount,
    isFullPayment,
    dueDate,
    contractPreamble,
    contractTypeId,
    contractStatusId,
    contractCategoryId, parties } = data;
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <div className="">
      <div
        className={`bg-bgGreen flex gap-2 p-4 items-center contract-row custom-row rounded-lg relative`}
      >
        <div className={`w-[10%]`}>
          <p>رقم العقد</p>
          <p className="text-2xl row-data-content">{contractNumber}</p>
        </div>
        <div>
          <p>تاريخ العقد</p>
          <p className="row-data-content">{contractDate.toISOString().split('T')[0]}</p>
        </div>
        <div>
          <p>نوع العقد</p>
          <p className="row-data-content">{contractTypeId}</p>
        </div>
        <div>
          <p>الحالة</p>
          <p className="row-data-content">{contractStatusId}</p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <Link
            className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all text-white px-4 py-2 rounded text-sm"
            onClick={(e) => {
              e.preventDefault()
              dispatch(setContract(data))
              router.push(`/contracts/${id}`)
            }}
            href={`/contracts/${id}`}
          // onClick={() => swipe(1)}
          >
            التفاصيل
          </Link>
          {/* <button
            className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all text-white px-4 py-2 rounded text-sm"
            onClick={() => dispatch(toggleAddRecordPopup("record"))}
          >
            تعديل
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ContractRow;
