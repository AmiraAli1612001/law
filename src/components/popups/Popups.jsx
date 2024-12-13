"use client";
import "./styles/popups.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AddIssuePopup from "./addIssue/AddIssuePopup";
// import AddContractRecord from "./addContractRecord/AddContractRecord";

import { resetPopups } from "@/globalState/Features/popupsSlice";
import AttachmentsPopup from "./attachments/AttachmentsPopup";
import EditEmployee from "./editEmployee/EditEmployee";
import Task from "./task/Task";
import PrintContract from "./printContract/PrintContract";
import AddClient from "../adds/clients/AddClient/AddClient";
// import AddEmployeePopup from "./addEmployee/AddEmployee";
import AddContract from "../adds/contracts/addContract/AddContract";
import AddEmployee from "../adds/hr/addEmployee/AddEmployee";
import RequestVacation from "../adds/hr/requestVacation/RequestVacation";
import CurrentAttendancePopup from "./currentAttendance/CurrentAttendancePopup";
import CheckOut from "./checkOut/CheckOut";
import CheckIn from "./checkIn/CheckIn";
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
  const checkIn = useSelector((store) => store.popups?.checkIn);
  const checkOut = useSelector((store) => store.popups?.checkOut);
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
          : "  translate-x-0 opacity-100"
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
        className={`rounded w-full h-full relative flex flex-col items-center justify-center z-20`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* close icon start */}
        
        {/* close icon end */}
        {addIssue && <AddIssuePopup />}
        {requestVacation && <RequestVacation />}
        {addClient && <AddClient />}
        {addTask && <Task />}
        {attachmentsPopup && <AttachmentsPopup />}
        {addEmployee && <AddEmployee />}
        {addContract && <AddContract />}
        {checkIn && <CheckIn />}
        {checkOut && <CheckOut />}
        {editEmployee && <EditEmployee />}
        {printContract && <PrintContract />}
        {currentAttendance && <CurrentAttendancePopup />}
      </div>
    </div>
  );
};

export default Popups;
