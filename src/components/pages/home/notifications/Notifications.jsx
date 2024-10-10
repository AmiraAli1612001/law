"use client";
import { dateNow } from "@/helperFunctions/date";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const NotificationItem = ({ children }) => {
  return (
    <li className="p-4 flex items-center gap-1 font-medium border-b">
      {/* <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5004 15.9561C9.83377 16.9561 9.00043 17.4561 8.00043 17.4561C6.50043 17.4561 6.16743 16.9561 5.50043 15.9561M13.0854 14.4561H2.91543C2.62327 14.4562 2.33631 14.3788 2.08388 14.2317C1.83146 14.0846 1.62261 13.8731 1.4787 13.6188C1.33479 13.3645 1.26097 13.0766 1.26479 12.7845C1.26861 12.4924 1.34993 12.2065 1.50043 11.9561C2.48308 10.3208 3.00165 8.44881 3.00043 6.54105V5.45605C3.00043 4.39519 3.42186 3.37777 4.17201 2.62763C4.92215 1.87748 5.93957 1.45605 7.00043 1.45605H9.00043C10.0613 1.45605 11.0787 1.87748 11.8289 2.62763C12.579 3.37777 13.0004 4.39519 13.0004 5.45605V6.54105C13.0004 8.44805 13.5184 10.3211 14.5004 11.9561C14.6509 12.2065 14.7323 12.4924 14.7361 12.7845C14.7399 13.0766 14.6661 13.3645 14.5222 13.6188C14.3783 13.8731 14.1694 14.0846 13.917 14.2317C13.6646 14.3788 13.3776 14.4562 13.0854 14.4561Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>لا توجد اشعارات</span> */}
      {children}
    </li>
  );
};

const Notifications = () => {
  const date = useSelector((state) => state.formats.isHijriDate);
  return (
    <div className="bg-bgGray p-4 w-full flex flex-col h-full rounded-2xl justify-between overflow-auto border drop-shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">ابرز الاشعارات</h3>
        <Link
          href={"/notifications"}
          className="border border-gray-400 text-xs font-bold px-3 py-1 rounded hover:text-white hover:border-transparent hover:bg-textGreen transition-all underline"
        >
          عرض الكل
        </Link>
      </div>
      <ul className="bg-white p-4 rounded-2xl mt-4 flex-1 max-h-[255px] overflow-auto">
        <NotificationItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="#34A853"
              d="m2.3 20.28l9.6-9.6l-1.4-1.42l-.72.71a.996.996 0 0 1-1.41 0l-.71-.71a.996.996 0 0 1 0-1.41l5.66-5.66a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.69l1.42 1.43a.996.996 0 0 1 1.41 0c.39.39.39 1.03 0 1.42l1.41 1.41l.71-.71c.39-.39 1.03-.39 1.42 0l.7.71c.39.39.39 1.03 0 1.42l-5.65 5.65c-.39.39-1.03.39-1.42 0l-.7-.7a.99.99 0 0 1 0-1.42l.7-.71l-1.41-1.41l-9.61 9.61a.996.996 0 0 1-1.41 0c-.39-.39-.39-1.03 0-1.42M20 19a2 2 0 0 1 2 2v1H12v-1a2 2 0 0 1 2-2z"
            />
          </svg>
          <div>
            <span className="text-textGreen">اضاف</span>{" "}
            <Link href={"/hr/1"} className="underline">
              عبدالرحمن راشد
            </Link>
            {" - "}
            <Link href={"/issues/1/sessions/1"}>
              <span className="text-gray-500">قضية رقم</span>{" "}
              <span className="font-bold   text-red-500 text-xs underline">(41411)</span>
            </Link>
            {"  "}
            <span className="font-bold text-gray-700 text-xs">{dateNow()}</span>
          </div>
        </NotificationItem>
        <NotificationItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="#34A853"
              d="m2.3 20.28l9.6-9.6l-1.4-1.42l-.72.71a.996.996 0 0 1-1.41 0l-.71-.71a.996.996 0 0 1 0-1.41l5.66-5.66a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.69l1.42 1.43a.996.996 0 0 1 1.41 0c.39.39.39 1.03 0 1.42l1.41 1.41l.71-.71c.39-.39 1.03-.39 1.42 0l.7.71c.39.39.39 1.03 0 1.42l-5.65 5.65c-.39.39-1.03.39-1.42 0l-.7-.7a.99.99 0 0 1 0-1.42l.7-.71l-1.41-1.41l-9.61 9.61a.996.996 0 0 1-1.41 0c-.39-.39-.39-1.03 0-1.42M20 19a2 2 0 0 1 2 2v1H12v-1a2 2 0 0 1 2-2z"
            />
          </svg>
          <div>
            <span className="text-textGreen">اضاف</span>{" "}
            <Link href={"/hr/1"} className="underline">
              محمد احمد
            </Link>
            {" - "}
            <Link href={"/issues/1/sessions/1"}>
              <span className="text-gray-500">جسلة رقم</span>{" "}
              <span className="font-bold   text-red-500 text-xs underline">(14)</span>
            </Link>
            {"  "}
            <span className="font-bold text-gray-700 text-xs">{dateNow()}</span>
          </div>
        </NotificationItem>
      </ul>
    </div>
  );
};

export default Notifications;
