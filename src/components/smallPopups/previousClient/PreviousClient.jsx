"use client";
import { resetSmallPopups } from "@/globalState/Features/smallPopupsSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const PreviousClient = () => {
  const dispatch = useDispatch();
  function closePopup() {
    dispatch(resetSmallPopups());
  }
  return (
    <div>
      <h2 className="text-2xl font-bold  text-mainRed text-center">
        العميل خصم سابق
      </h2>
      <div className="text-center my-8">
        <p className="inline text-lg">قضية رقم: </p>
        <Link
          className="underline text-lg font-bold bg-blue-500 text-white px-4 py-0 rounded-lg"
          href={"/issues/1"}
        >
          1
        </Link>
      </div>
      <div className="w-fit mx-auto my-4">
        <button
          onClick={()=>{
            closePopup();
            toast.error("تم انهاء خدمات العميل بنجاح");
          }}
          className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all mx-1 text-white px-4 py-2 rounded text-sm text-center"
        >
          الغاء
        </button>
        <button
          onClick={()=>{
            closePopup();
            toast.success("تم اضافة العميل بنجاح");
          }}
          className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all mx-1 text-white px-4 py-2 rounded text-sm text-center"
        >
          اضافة
        </button>
      </div>
    </div>
  );
};

export default PreviousClient;
