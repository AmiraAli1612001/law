"use client";
import { closeAddFormRecord, openAddFormRecord } from "@/globalState/Features/formStateSlice";
import { toggleAddRecordPopup } from "@/globalState/Features/popupsSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddRecord = ({ title, recordType }) => {
  const disptach = useDispatch();
  const addRecord = useSelector((store) => store.formState?.addRecord);
  function handleClick() {
    // disptach(toggleAddRecordPopup(recordType));
    if(addRecord){
      disptach(closeAddFormRecord())
    }else{
      disptach(openAddFormRecord())
    }
  }
  return (
    <button
      className={`flex items-center gap-4 p-4   hover:bg-opacity-70 hover:drop-shadow transition-all rounded ${
        addRecord ? "bg-mainRed" : "bg-textGreen"}`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path fill="#FFFFFF" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
      </svg>
      <span className="text-white font-semibold">{title}</span>
    </button>
  );
};

export default AddRecord;
