"use client";
import { SwitchButton } from "@/components/shared/switchButton/SwitchButton";
import React, { useState } from "react";
import Appointment from "./appointment/Appointment";
import { useDispatch, useSelector } from "react-redux";
import { toggleHijriDate } from "@/globalState/Features/formatsSlice";

const Appointments = () => {
  const isHijriDate = useSelector((state) => state?.formats?.isHijriDate);
  const [checked, setChecked] = useState(isHijriDate);
  const dispatch = useDispatch();
  return (
    <div className="bg-bgGray p-4 rounded-2xl h-full w-full border drop-shadow-sm" >
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-medium">التقويم العدلي</h4>
        <div className="flex items-center gap-2">
          <p className="text-xs font-medium">استخدم التقويم الميلادي</p>
          <SwitchButton
            isOn={checked}
            handleToggle={() => {
              dispatch(toggleHijriDate());
              setChecked(!checked);
            }}
            colorOne="#EF476F"
            colorTwo="#06D6A0"
          />
        </div>
      </div>
      <div className="bg-white p-4 mt-4 rounded">
        <h4 className="mb-4 font-medium text-lg">المواعيد المتستقبلية</h4>
        <ul className="flex-1 flex gap-4 items-center">
          <Appointment />
        </ul>
      </div>
    </div>
  );
};

export default Appointments;
