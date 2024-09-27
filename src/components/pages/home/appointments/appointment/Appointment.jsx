import { dateNow, monthName } from "@/helperFunctions/date";
import moment from "moment-hijri";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Appointment = () => {
  const [isHijri, setIsHijri] = useState(false);
  const isHijriDate = useSelector((state) => state?.formats?.isHijriDate);
  
  // const islamicDate = moment().format("iYYYY-iMM-iDD"); // Hijri Date
  return (
    <li className="border border-gray-200 p-3 rounded items-center flex flex-1 gap-3 font-medium">
      <div className="bg-[#048D5A] text-white px-4 py-2 rounded-2xl h-fit text-center">
        <h4 className="text-3xl font-semibold ">{dateNow().split("-")[2]}</h4>
        <p>{monthName(null, +(dateNow().split("-")[1]))}</p>
        <p>{dateNow().split("-")[0]}</p>
      </div>
      <div className="flex flex-1 flex-col p-3 gap-3">
        <div className="flex justify-between items-center gap-2">
          <h5>جلسة مرافعة</h5>
          <span className="text-gray-400 text-sm">12:00 صباحا</span>
        </div>
        <div className="text-sm">
          <p>رقم القضية: 141414</p>
          <p>المحكمة الجزائية بالدمام</p>
        </div>
        <button className="bg-[#048D5A] text-white w-full py-2 rounded">
          تسجيل حضور الجلسة
        </button>
      </div>
    </li>
  );
};

export default Appointment;
