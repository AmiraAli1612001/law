import PersonSelector from "@/components/shared/personSelector/PersonSelector";
import Link from "next/link";
import React, { useState } from "react";

const Personnel = ({ lawyer, admin }) => {
  const [lawyerState, setLawyerState] = useState(true);
  const [helperState, setHelperState] = useState(true);
  return (
    <div className="simple-div">
      {/* lawyer !*/}
      <div className="issue-personnel-person p-4 gap-4 bg-bgGreen flex justify-between items-center">
        {lawyerState ? (
          <div className="simple-input   !flex-row items-center">
            <label htmlFor="">المشرف القائم على القضية:</label>
            <Link
              href={"/hr/1"}
              className="text-lg text-textGreen font-bold underline"
            >
              محمد ابراهيم
            </Link>
          </div>
        ) : (
          <PersonSelector />
        )}
        <button
          onClick={() => setLawyerState(!lawyerState)}
          className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 h-fit py-2 rounded text-sm text-center"
        >
          تعديل
        </button>
      </div>
      {/* helper !*/}
      <div className="issue-personnel-person p-4 gap-4 bg-bgGreen flex justify-between items-center">
        {helperState ? (
          <div className="simple-input   !flex-row items-center">
            <label htmlFor="">المحامي المسند إليه القضية:</label>
            <Link
              href={"/hr/1"}
              className="text-lg text-textGreen font-bold underline"
            >
              محمد ابراهيم
            </Link>
          </div>
        ) : (
          <PersonSelector />
        )}
        <button
          onClick={() => setHelperState(!helperState)}
          className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 h-fit py-2 rounded text-sm text-center"
        >
          تعديل
        </button>
      </div>
    </div>
  );
};

export default Personnel;
