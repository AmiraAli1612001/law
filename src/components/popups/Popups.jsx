"use client";
import React from "react";
import { useSelector } from "react-redux";

const Popups = () => {
  const issueRecord = useSelector((store) => store.popups.issueRecord);
  return (
    <div className="fixed w-full h-full left-0 top-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      {issueRecord && <AddIssueRecord/>}
    </div>
  );
};

export default Popups;
