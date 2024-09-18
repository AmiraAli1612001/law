"use client";
import { SwitchButton } from "@/components/shared/switchButton/SwitchButton";
import React, { useState } from "react";

const Appointments = () => {
  const[checked,setChecked] = useState(false)
  return (
    <div className="bg-bgGray p-4 rounded-2xl h-full w-full">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-medium">التقويم العدلي</h4>
        <div className="flex items-center gap-2">
          <p className="text-xs font-medium">استخدم التقويم الميلادي</p>
          <SwitchButton
            isOn={checked}
            handleToggle={() => setChecked(!checked)}
            colorOne="#EF476F"
            colorTwo="#06D6A0"
          />
        </div>
      </div>
      <div className="bg-white p-4 mt-4 rounded">
        <h4 className="mb-4 font-medium text-lg">المواعيد المتستقبلية</h4>
        <div className="flex gap-4 items-center">
          <div className="bg-[#048D5A] text-white px-4 py-2 rounded-2xl h-fit text-center">
            <h4 className="text-3xl font-semibold ">05</h4>
            <p>ربيع الاول</p>
            <p>1446</p>
          </div>
          <ul className="flex-1">
            <li className="border border-gray-200 p-3 rounded flex flex-col gap-3 font-medium">
              <div className="flex justify-between items-center">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
