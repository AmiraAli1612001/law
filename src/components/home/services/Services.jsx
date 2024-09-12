import Link from "next/link";
import React from "react";
import Service from "./service/Service";

const Services = () => {
  const linkStyles = "font-medium p-2 bg-white rounded block hover:bg-[#048D5A] hover:text-white transition-all"; 
  return (
    <div className="bg-bgGray p-4 flex flex-col gap-2 h-full rounded-2xl">
      <div className="flex justify-between">
        <h3>أبرز الخدمات</h3>
        <nav className="flex gap-4">
          <Link className={`${linkStyles} !bg-[#048D5A] !text-white`} href={"/"}>
            الاكثر استخداما
          </Link>
          <Link className={linkStyles} href={"/"}>
            المفضلة
          </Link>
          <Link className={linkStyles} href={"/"}>
            جديد
          </Link>
        </nav>
      </div>
      <ul className="grid grid-cols-2 gap-4 flex-1 overflow-y-scroll">
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </ul>
    </div>
  );
};

export default Services;
