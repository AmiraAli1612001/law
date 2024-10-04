import Link from "next/link";
import React from "react";

const Service = ({ link, title, description, Icon }) => {
  return (
    <li className="border drop-shadow-sm h-fit rounded p-2 bg-white">
      <Link href={link} className=" flex items-center gap-4">
        <Icon />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="#048D5A">
            <path d="M18 3a3 3 0 0 1 3 3v2.143c0 .334 0 .501-.077.623a.5.5 0 0 1-.157.157C20.644 9 20.477 9 20.143 9H15m3-6a3 3 0 0 0-3 3v3m3-6H7c-1.886 0-2.828 0-3.414.586S3 5.114 3 7v14l3-1l3 1l3-1l3 1V9" />
            <path strokeLinecap="round" d="M7 7h4m-3 4H7m0 4h3" />
          </g>
        </svg> */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">{title}</h4>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default Service;
