"use client";
import Link from "next/link";
import React, { useState } from "react";
import Service from "./service/Service";

const Services = () => {
  const [open, setOpen] = useState(0);

  function handleOpen(id) {
    setOpen(id);
  }
  const openStyles = "!bg-[#048D5A] !text-white ";
  const linkStyles = `font-medium p-2 bg-white rounded block hover:bg-[#048D5A] hover:text-white transition-all `;
  return (
    <div className="bg-bgGray p-4 flex flex-col gap-6 h-full rounded-2xl border drop-shadow-sm">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">أبرز الخدمات</h3>
        <nav className="flex gap-4">
          <button
            onClick={() => handleOpen(0)}
            className={`${linkStyles} ${open == 0 && openStyles}`}
          >
            الاكثر استخداما
          </button>
          <button
            onClick={() => handleOpen(1)}
            className={`${linkStyles} ${open == 1 && openStyles}`}
          >
            المفضلة
          </button>
          <button
            onClick={() => handleOpen(2)}
            className={`${linkStyles} ${open == 2 && openStyles}`}
          >
            جديد
          </button>
        </nav>
      </div>
      <ul className="grid grid-cols-2 gap-4 flex-1 overflow-y-auto auto-rows-max">
        <Service
          link={"/issues"}
          title={"اصدار قضية"}
          description={
            "خدمة تتيح للمتسفيد اٍصدار وكالة خدمة تتيح للمتسفيد اٍصدار وكالة"
          }
          Icon={() => (
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
          )}
        />
        <Service
          link={"/statistics"}
          title={"عرض احصائيات الشهر الحالي"}
          description={"خدمة تتيح للمتسفيد متابعة عرض احصائيات الشهر الحالي"}
          Icon={() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="none"
                stroke="#34A853"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16 20v-8m0 0l3 3m-3-3l-3 3m-9-1l8-8l3 3l5-5"
              />
            </svg>
          )}
        />
        <Service
          link={"/tasks"}
          title={"اضافة مهمة"}
          description={
            "خدمة تتيح للمتسفيد اضافة مهمة بشكل مستقل ومتابعة مهمة بتاريخ محدد"
          }
          Icon={() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="text-textGreen"
              viewBox="0 0 512 512"
            >
              <rect width="512" height="512" fill="none" />
              <path
                fill="currentColor"
                d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72l-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69l72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96m432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"
              />
            </svg>
          )}
        />
      </ul>
    </div>
  );
};

export default Services;
