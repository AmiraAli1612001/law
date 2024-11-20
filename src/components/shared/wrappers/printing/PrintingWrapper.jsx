"use client";
import React, { useRef } from "react";

const PrintingWrapper = ({children}) => {
  const printableRef = useRef();
  // const printCountRef = useRef(0)
  console.log("print render");
  function handlePrint() {
    // if(printCountRef.current > 0) return
    // printCountRef.current++
    console.log("print function");
    printableRef.current.scrollTo(0, 0);
    window.print();
  }
  return (
    <div
      ref={printableRef}
      className="printable w-full overflow-auto flex flex-col max-w-screen-lg mx-auto bg-white py-4"
    >
      {children}
      <button
        onClick={handlePrint}
        className="w-fit hover:bg-opacity-70 transition-all py-2 px-6 rounded bg-textGreen mx-auto text-white"
      >
        طباعة
      </button>
    </div>
  );
};

export default PrintingWrapper;
