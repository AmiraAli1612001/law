"use client";
import "./styles/popups.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AddIssue from "./addIssue/AddIssue";
// import AddContractRecord from "./addContractRecord/AddContractRecord";

import { resetPopups } from "@/globalState/Features/popupsSlice";
import Attendance from "./attendance/Attendance";
import AttachmentsPopup from "./attachments/AttachmentsPopup";
import EditEmployee from "./editEmployee/EditEmployee";
import Task from "./task/Task";
import PrintContract from "./printContract/PrintContract";
import AddClient from "../adds/clients/AddClient/AddClient";
import AddEmployeePopup from "./addEmployee/AddEmployee";
import AddContract from "../adds/contracts/addContract/AddContract";

const Popups = () => {
  const dispatch = useDispatch();

  const isHidden = useSelector((store) => store.popups?.isHidden);
  if (!isHidden && typeof document != "undefined") {
    document.querySelector("body").style.overflow = "hidden";
  } else if (isHidden && typeof document != "undefined") {
    document.querySelector("body").style.overflow = "auto";
  }

  const addIssue = useSelector((store) => store.popups?.addIssue);
  const addClient = useSelector((store) => store.popups?.addClient);
  const addTask = useSelector((store) => store.popups?.addTask);
  const addEmployee = useSelector((store) => store.popups?.addEmployee);
  const addContract = useSelector((store) => store.popups?.addContract);
  const attachmentsPopup = useSelector(
    (store) => store.popups?.attachments
  );
  const attendance = useSelector((store) => store.popups?.attendance);
  const editEmployee = useSelector((store) => store.popups?.editEmployee);
  const printContract = useSelector((store) => store.popups?.printContract);

  console.log("popups");
  return (
    <div
      className={`${
        isHidden ? " -translate-x-full " : "  translate-x-0 "
      } fixed w-full h-full left-0 top-0 z-[9999] transition-all flex items-center flex-col justify-center bg-white popups py-10`}
      //  original
      // className={`${
      //   isHidden ? " scale-0 " : " scale-100 "
      // } p-4 fixed w-full h-full left-0 top-0 z-[9999] bg-[rgba(0,0,0,0.5)] transition-all flex items-center justify-center popups`}
      // onClick={() => dispatch(resetPopups())}
    >
      {/* <div
        className={`${
          attendance ? "w-full max-w-[500px] " : "  w-full h-full "
        }  p-4 rounded relative flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      > */}
      {/* close icon start */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="absolute top-2 right-2 cursor-pointer border border-red-500  rounded"
        onClick={() => dispatch(resetPopups())}
      >
        <path
          fill="#FF0000"
          d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
        />
      </svg>
      {/* close icon end */}
      {addIssue && <AddIssue />}
      {addClient && <AddClient />}
      {addTask && <Task />}
      {attachmentsPopup && <AttachmentsPopup />}
      {addEmployee && <AddEmployeePopup />}
      {addContract && <AddContract />}
      {attendance && <Attendance />}
      {editEmployee && <EditEmployee />}
      {printContract && <PrintContract />}
      {/* </div> */}
    </div>
  );
};

export default Popups;
