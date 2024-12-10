"use client";
import "./loader.css";
import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const isLoading = useSelector((store) => store.tempData.loader);
  return (
    <div className="loader-wrapper ">
      <div className={`loader ${isLoading && "active"}`}></div>
    </div>
  );
};

export default Loader;
