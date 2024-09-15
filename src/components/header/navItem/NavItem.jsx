"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavItem = ({ to = "#", title, children, isIcon = true }) => {
  const [state, setState] = useState(false);
  const subListItemStyles =
    "text-[#063d31] text-sm p-3 cursor-pointer hover:bg-hoverBg hover:text-[#08ad4b] transition-all block whitespace-nowrap";
  return (
    <li className="relative flex items-center">
      <Link
        href={to}
        className={`flex gap-1 lg:gap-2 items-center p-1.5 lg:p-4 border-b-4 border-b-transparent hover:border-b-[#08ad4b] hover:bg-hoverBg transition-all`}
        onClick={() => setState(!state)}
      >
        {children}
        <span className="text-sm lg:text-base text-iconGreen">{title}</span>
        {isIcon && (
          <svg
            className={`${
              state && "rotate-180"
            } w-6 h-6 text-iconGreen dark:text-white angle-down transition-all`}
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
              d="m19 9-7 7-7-7"
            />
          </svg>
        )}
      </Link>
      {isIcon && (
        <ul
          className={`${
            state ? "!max-h-96" : ""
          } min-w-full w-fit max-h-0 overflow-hidden transition-all bg-white absolute right-0 top-full z-50 drop-shadow`}
        >
          <li className={subListItemStyles}>
            <Link href={"/"}>اخر العقود</Link>
          </li>
          <li className={subListItemStyles}>
            <Link href={"/"}>اجددالعقود</Link>
          </li>
          <li className={subListItemStyles}>
            <Link href={"/"}>العقود القادمة</Link>
          </li>
          <li className={subListItemStyles}>
            <Link href={"/"}>العقود السابقة</Link>
          </li>
          <li className={subListItemStyles}>
            <Link href={"/"}>العقود الحالية</Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default NavItem;
