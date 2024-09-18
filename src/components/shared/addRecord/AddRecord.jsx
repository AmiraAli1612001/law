"use client";
import React from "react";

const AddRecord = ({ title,recordType }) => {
  return (
    <button
      className="flex items-center gap-4 p-4 bg-textGreen rounded"
      onClick={() => toggleAddRecord(recordType)}
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
