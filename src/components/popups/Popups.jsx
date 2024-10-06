"use client";
import "./styles/popups.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AddIssueRecord from "./addIssueRecord/AddIssueRecord";
import AddContractRecord from "./addContractRecord/AddContractRecord";

import { resetPopups } from "@/globalState/Features/popupsSlice";
import Attendance from "./attendance/Attendance";
import EditEmployee from "./editEmployee/EditEmployee";
import AddEmployee from "./addEmployee/AddEmployee";
import Task from "./task/Task";
import PrintContract from "./printContract/PrintContract";

const Popups = () => {
  const dispatch = useDispatch();

  const isHidden = useSelector((store) => store.popups?.isHidden);
  if (!isHidden && typeof document != "undefined") {
    document.querySelector("body").style.overflow = "hidden";
  } else if (isHidden && typeof document != "undefined") {
    document.querySelector("body").style.overflow = "auto";
  }

  const issueRecord = useSelector((store) => store.popups?.issueRecord);
  const task = useSelector((store) => store.popups?.task);
  const addEmployee = useSelector((store) => store.popups?.addEmployee);
  const contractRecord = useSelector((store) => store.popups?.contractRecord);
  const attendance = useSelector((store) => store.popups?.attendance);
  const editEmployee = useSelector((store) => store.popups?.editEmployee);
  const printContract = useSelector((store) => store.popups?.printContract);

  console.log("popups");
  return (
    <div
      className={`${
        isHidden ? " scale-0 " : " scale-100 "
      } p-4 fixed w-full h-full left-0 top-0 z-[9999] bg-[rgba(0,0,0,0.5)] transition-all flex items-center justify-center popups`}
      onClick={() => dispatch(resetPopups())}
    >
      <div
        className={`${
          attendance ? "w-full max-w-[500px] " : "  w-full h-full "
        } bg-[#f5f5f5] p-4 rounded relative flex flex-col`}
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
        {task && <Task />}
        {addEmployee && <AddEmployee />}
        {contractRecord && <AddContractRecord />}
        {attendance && <Attendance />}
        {editEmployee && <EditEmployee />}
        {printContract && <PrintContract />}
      </div>
    </div>
  );
};

export default Popups;
