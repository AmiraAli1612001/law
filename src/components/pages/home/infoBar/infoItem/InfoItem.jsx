import Link from "next/link";
import React from "react";

const InfoItem = ({ to = "#", children, title }) => {
  return (
    <li className="">
      <Link href={to} className="flex relative gap-1 items-center justify-center bg-white w-fit h-full p-6 rounded-2xl flex-col drop-shadow">
        <span className="drop-shadow aspect-square absolute top-0 -translate-y-1/2 text-iconGreen p-2 bg-white rounded-full flex items-center">
          {children}
        </span>

        <p className="text-center">{title}</p>
        <h4 className="text-2xl font-bold">10</h4>
      </Link>
    </li>
  );
};

export default InfoItem;
