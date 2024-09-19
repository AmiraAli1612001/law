"use client";
import "./popups.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AddIssueRecord from "@/components/popups/addIssueRecord/AddIssueRecord";
import AddContractRecord from "@/components/popups/addContractRecord/AddContractRecord";

import { resetPopups } from "@/globalState/Features/popupsSlice";
import Attendance from "./attendance/Attendance";

const Popups = () => {
  const dispatch = useDispatch();

  const isHidden = useSelector((store) => store.popups?.isHidden);
  const issueRecord = useSelector((store) => store.popups?.issueRecord);
  const contractRecord = useSelector((store) => store.popups?.contractRecord);
  const attendance = useSelector((store) => store.popups?.attendance);

  console.log("hrere");
  return (
    <div
      className={`${
        isHidden && " hidden "
      } p-4 fixed w-full h-full left-0 top-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center popups`}
      onClick={() => dispatch(resetPopups())}
    >
      <div
        className={`${
          attendance ? "w-full max-w-[500px] " : "  w-full h-full "
        } bg-white p-4 rounded relative flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => dispatch(resetPopups())}
        >
          <path
            fill="#FF0000"
            d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
          />
        </svg>
        {issueRecord && <AddIssueRecord />}
        {contractRecord && <AddContractRecord />}
        {attendance && <Attendance />}
      </div>
    </div>
  );
};

export default Popups;
