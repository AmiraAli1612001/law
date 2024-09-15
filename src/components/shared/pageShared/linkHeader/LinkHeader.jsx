import Link from "next/link";
import React from "react";

const LinkHeader = ({ title }) => {
  return (
    <div className="text-base flex items-center gap-4 font-bold">
      <Link href={"/"} className="text-[#063d31]">الصفحة الرئيسية</Link>
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m15 19-7-7 7-7"
        />
      </svg>
      
      <Link href="#" className="text-2xl text-[#044e58]">{title}</Link>
    </div>
  );
};

export default LinkHeader;
