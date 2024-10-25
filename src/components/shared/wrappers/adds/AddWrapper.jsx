"use client";
import AddContractRecord from "@/components/popups/addContractRecord/AddContractRecord";
import React from "react";
import { useSelector } from "react-redux";
import "./styles/styles.css";
const AddWrapper = ({ children }) => {
  //   const [open, setOpen] = useState(false);
  const isOpen = useSelector((store) => store.formState?.addRecord);
  return (
    <div
      className={` overflow-hidden opacity-0 add-wrapper delay-3 ${
        isOpen ? "max-h-fit opacity-100" : "max-h-0"
        // max-h-[1000px] lg:max-h-[1200px]
      } `}
      // style={{}}
    >
      {children}
    </div>
  );
};

export default AddWrapper;
