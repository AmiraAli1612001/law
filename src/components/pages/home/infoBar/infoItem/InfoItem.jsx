import Link from "next/link";
import React from "react";

const InfoItem = ({ to = "#", children, title }) => {
  return (
    <li className="flex-1 pt-6 ">
      <Link
        href={to}
        className="flex relative gap-1 items-center justify-center bg-white h-full px-6 py-14 rounded-2xl flex-col border drop-shadow-sm"
      >
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
