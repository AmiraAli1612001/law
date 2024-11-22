import Link from "next/link";
import React from "react";

const InfoItem = ({ to = "#", children, title }) => {
  return (
    <li className="pt-2  px-1">
      <Link
        href={to}
        className="flex relative hover:bg-textGreen  transition-all hover:shadow-hoverBg hover:text-hoverBg gap-1 items-center justify-center bg-white h-full p-2 md:pt-7  rounded-2xl md:flex-col border drop-shadow-sm group"
      >
        <span className="drop-shadow aspect-square md:absolute top-0 md:-translate-y-1/2 p-2 bg-white rounded-full flex text-textGreen items-center group-hover:text-white group-hover:bg-textGreen transition-all group-hover:border">
          {children}
        </span>

        <div className="group-hover:translate-y-2 transition-transform text-center [&>*]:!duration-0 [&>*]:transition-color">
          <p className="text-sm font-semibold">{title}</p>
          <h4 className="text-3xl font-bold mt-auto">10</h4>
        </div>
      </Link>
    </li>
  );
};

export default InfoItem;
