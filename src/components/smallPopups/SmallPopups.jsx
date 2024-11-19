"use client";
import "./styles/styles.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetSmallPopups } from "@/globalState/Features/smallPopupsSlice";
import Attendance from "./attendance/Attendance";
import DelaySession from "./sessions/delay/DelaySession";
import Statements from "./statements/Statements";
import PreviousClient from "./previousClient/PreviousClient";

const SmallPopups = () => {
  const dispatch = useDispatch();

  const isHidden = useSelector((store) => store.smallPopups?.isHidden);
  if (!isHidden && typeof document != "undefined") {
    document.querySelector("body").style.overflow = "hidden";
  } else if (isHidden && typeof document != "undefined") {
    document.querySelector("body").style.overflow = "auto";
  }

  const attendance = useSelector((store) => store.smallPopups?.attendance);
  const delaySession = useSelector((store) => store.smallPopups?.delaySession);
  const statements = useSelector((store) => store.smallPopups?.statements);
  const previousClient = useSelector((store) => store.smallPopups?.previousClient);

  console.log("smallPopups");
  return (
    <div
      // className={`${
      //   isHidden ? " -translate-x-full " : "  translate-x-0 "
      // } fixed w-full h-full left-0 top-0 z-[9999] transition-all flex items-center flex-col justify-center bg-white smallPopups `}
      //  original
      className={`${
        isHidden ? " pointer-events-none opacity-0 " : " opacity-100 "
      } p-4  fixed w-full h-full left-0 top-0 z-[9999] bg-[rgba(0,0,0,0.5)] transition-all flex items-center justify-center smallPopups `}
      onClick={() => dispatch(resetSmallPopups())}
    >
      <div
        className={`
          w-full max-w-[500px] 
          p-4 pt-10 rounded relative flex flex-col bg-white`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* close icon start */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="absolute top-2 right-2 cursor-pointer border border-red-500  rounded"
          onClick={() => dispatch(resetSmallPopups())}
        >
          <path
            fill="#FF0000"
            d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
          />
        </svg>
        {/* close icon end */}
        {attendance && <Attendance />}
        {delaySession && <DelaySession />}
        {statements && <Statements />}
        {previousClient && <PreviousClient />}
      </div>
    </div>
  );
};

export default SmallPopups;
