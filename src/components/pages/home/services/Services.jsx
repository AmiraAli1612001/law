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
    <div className="bg-bgGray p-4 flex flex-col gap-2 h-full rounded-2xl border drop-shadow-sm">
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
      <ul className="grid grid-cols-2 gap-4 flex-1 overflow-y-auto">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M16 20v-8m0 0l3 3m-3-3l-3 3m-9-1l8-8l3 3l5-5"
              />
            </svg>
          )}
        />
      </ul>
    </div>
  );
};

export default Services;
