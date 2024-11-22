
import { dateNow, monthName } from "@/helperFunctions/date";
import moment from "moment-hijri";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
const Countdown = dynamic(
  () => import("@/components/shared/countDown/CountDown"),
  {
    ssr: false,
  }
);
const Appointment = () => {
  const [isHijri, setIsHijri] = useState(false);
  const isHijriDate = useSelector((state) => state?.formats?.isHijriDate);
  
  // const islamicDate = moment().format("iYYYY-iMM-iDD"); // Hijri Date
  return (
    <li className="border border-gray-200 p-3 rounded items-center flex flex-col md:flex-row flex-1 md:gap-3 font-medium">
      <div className="md:bg-[#048D5A] text-textGreen md:text-white px-4 md:py-2 rounded-2xl h-fit text-center flex items-center gap-2 md:block underline md:no-underline">
        <h4 className="order-3 md:text-3xl font-semibold ">{dateNow("2024-12-30").split("-")[2]}</h4>
        <p className="order-2">{monthName(null, +(dateNow("2024-12-30").split("-")[1]))}</p>
        <p className="order-1">{dateNow("2024-12-30").split("-")[0]}</p>
      </div>
      <div className="flex flex-1 flex-col p-3 gap-3">
        <div className="flex justify-between items-center gap-2">
          <h5>جلسة مرافعة</h5>
          <span className="text-gray-400 text-sm">12:00 صباحا</span>
        </div>
        <div className="text-sm">
          <p>رقم القضية: 141414</p>
          <p>المحكمة الجزائية بالدمام</p>
          <Countdown targetDate={"2024-12-30"} />
        </div>
        <Link href={`/issues/1/sessions/1`} className="bg-[#048D5A] text-white w-full py-2 rounded text-center">
          تسجيل حضور الجلسة
        </Link>
      </div>
    </li>
  );
};

export default Appointment;
