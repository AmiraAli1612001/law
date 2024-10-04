import Link from "next/link";
import React from "react";

const InfoItem = ({ to = "#", children, title }) => {
  return (
    <li className="w-[25%] pt-6 px-1">
      <Link
        href={to}
        className="flex relative hover:bg-textGreen  transition-all hover:shadow-hoverBg hover:text-hoverBg gap-1 items-center justify-center bg-white h-full px-2 py-10 rounded-2xl flex-col border drop-shadow-sm group"
      >
        <span className="drop-shadow aspect-square absolute top-0 -translate-y-1/2 p-2 bg-white rounded-full flex text-textGreen items-center group-hover:text-white group-hover:bg-textGreen transition-all group-hover:border">
          {children}
        </span>

        <div className="group-hover:translate-y-2 transition-transform text-center [&>*]:!duration-0 [&>*]:transition-color">
          <p className="text-sm font-semibold">
            {title}
          </p>
          <h4 className="text-3xl font-bold mt-auto">10</h4>
        </div>
      </Link>
    </li>
  );
};

export default InfoItem;
