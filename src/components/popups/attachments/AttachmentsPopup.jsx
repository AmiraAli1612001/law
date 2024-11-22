"use client";
import React from "react";
import { useSelector } from "react-redux";

const AttachmentsPopup = () => {
  const fileLink = useSelector((store) => store.popups?.fileLink);
  return <embed src={fileLink ?? ""} className="w-full min-h-screen" />;
};

export default AttachmentsPopup;
