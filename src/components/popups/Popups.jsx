"use client";
import "./styles/popups.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AddIssuePopup from "./addIssue/AddIssuePopup";
// import AddContractRecord from "./addContractRecord/AddContractRecord";

import { resetPopups } from "@/globalState/Features/popupsSlice";
import Attendance from "./attendance/Attendance";
import AttachmentsPopup from "./attachments/AttachmentsPopup";
import EditEmployee from "./editEmployee/EditEmployee";
import Task from "./task/Task";
import PrintContract from "./printContract/PrintContract";
import AddClient from "../adds/clients/AddClient/AddClient";
// import AddEmployeePopup from "./addEmployee/AddEmployee";
import AddContract from "../adds/contracts/addContract/AddContract";
import AddEmployee from "../adds/hr/addEmployee/AddEmployee";
import RequestVacation from "../adds/hr/requestVacation/RequestVacation";
import CurrentAttendance from "./currentAttendance/CurrentAttendance";
const Popups = () => {
  const dispatch = useDispatch();

  const isHidden = useSelector((store) => store.popups?.isHidden);
  if (!isHidden && typeof document != "undefined") {
    document.querySelector("body").style.overflow = "hidden";
  } else if (isHidden && typeof document != "undefined") {
    document.querySelector("body").style.overflow = "auto";
  }

  const addIssue = useSelector((store) => store.popups?.addIssue);
  const requestVacation = useSelector((store) => store.popups?.requestVacation);
  const addClient = useSelector((store) => store.popups?.addClient);
  const addTask = useSelector((store) => store.popups?.addTask);
  const addEmployee = useSelector((store) => store.popups?.addEmployee);
  const addContract = useSelector((store) => store.popups?.addContract);
  const attachmentsPopup = useSelector((store) => store.popups?.attachments);
  const attendance = useSelector((store) => store.popups?.attendance);
  const editEmployee = useSelector((store) => store.popups?.editEmployee);
  const printContract = useSelector((store) => store.popups?.printContract);
  const currentAttendance = useSelector((store) => store.popups?.currentAttendance);

  console.log("popups");
  return (
    <div
      style={{
        transition:
          "opacity 0.4s ease-in-out, padding 0.4s ease-in-out",
      }}
      className={`${
        isHidden
          ? " -translate-x-full !pt-32 opacity-0"
          : "  translate-x-0 py-10 opacity-100"
      } fixed w-full h-full left-0 top-0 z-[9999] transition-transform flex items-center flex-col justify-center   popups `}
      //  original
      // className={`${
      //   isHidden ? " scale-0 " : " scale-100 "
      // } p-4 fixed w-full h-full left-0 top-0 z-[9999] bg-[rgba(0,0,0,0.5)] transition-all flex items-center justify-center popups`}
      onClick={() => dispatch(resetPopups())}
    >
      <div
        className={`${
          isHidden ? "" : " w-[150%] h-[150%] "
        } absolute  -left-1/4 -top-1/4  bg-black bg-opacity-30 z-10`}
      ></div>
      <div
        className={`${
          attendance ? "w-full !max-w-[500px] " : "  w-full h-full "
        }  p-4 rounded relative flex flex-col max-w-screen-lg z-20`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* close icon start */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="absolute top-6 right-6 cursor-pointer border border-red-500  rounded z-50"
          onClick={() => dispatch(resetPopups())}
        >
          <path
            fill="#FF0000"
            d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
          />
        </svg>
        {/* close icon end */}
        {addIssue && <AddIssuePopup />}
        {requestVacation && <RequestVacation />}
        {addClient && <AddClient />}
        {addTask && <Task />}
        {attachmentsPopup && <AttachmentsPopup />}
        {addEmployee && <AddEmployee />}
        {addContract && <AddContract />}
        {attendance && <Attendance />}
        {editEmployee && <EditEmployee />}
        {printContract && <PrintContract />}
        {currentAttendance && <CurrentAttendance />}
      </div>
    </div>
  );
};

export default Popups;
