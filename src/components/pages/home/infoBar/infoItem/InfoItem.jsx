import Link from "next/link";
import React from "react";

const InfoItem = ({ to = "#", children, title }) => {
  return (
    <li className="flex-1 pt-6 ">
      <Link
        href={to}
        className="flex relative hover:bg-textGreen  transition-all hover:shadow-hoverBg hover:text-hoverBg gap-1 items-center justify-center bg-white h-full px-2 py-10 rounded-2xl flex-col border drop-shadow-sm group"
      >
        <span className="drop-shadow aspect-square absolute top-0 -translate-y-1/2 p-2 bg-white rounded-full flex text-textGreen items-center group-hover:text-white group-hover:bg-textGreen transition-all group-hover:border">
          {children}
        </span>

        <div className="group-hover:mt-3 transition-all text-center">
          <p  >
            {title}
          </p>
          <h4 className="text-2xl font-bold mt-auto">10</h4>
        </div>
      </Link>
    </li>
  );
};

export default InfoItem;
