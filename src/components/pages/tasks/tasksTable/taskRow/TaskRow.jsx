import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js";
import { Line } from "react-chartjs-2";
import {
  toggleAddRecordPopup,
  toggleEditEmployee,
} from "@/globalState/Features/popupsSlice";
import { useDispatch } from "react-redux";
import EmployeeStatistics from "@/components/statistics/EmployeeStatistics";
import Link from "next/link";
const TaskRow = ({ data: { id, name, title, date, details, status } }) => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="">
      <table className="simple-table row-titles">
        <tbody>
          <tr
            className={`${
              status == 1 ? "present" : "absent"
            } [&>td]:w-[calc(100%/5)]`}
          >
            <td className="w-[calc(100%/10)]">
              <span>رقم المهمة</span>
              <p>{id}</p>
            </td>
            <td>
              <span>اسم المهمة</span>
              <p>{title}</p>
            </td>
            <td>
              <span>تاريخ المهمة</span>
              <p>{date}</p>
            </td>
            <td>
              <span>اسم الموظف</span>
              <Link href={`/employees/${1}`}>{name}</Link>
            </td>

            <td className="w-[calc(100%/10)]">
              <span>الحالة</span>
              <p>{status == 1 ? "تم الانجاز" : "لم يتم الانجاز"}</p>
            </td>
            <td>
              <div className="flex gap-2 ">
                <button
                  onClick={() => setState(!state)}
                  className="text-white bg-[#048D5A] py-1.5 px-4 rounded text-sm font-semibold whitespace-nowrap"
                >
                  عرض التفاصيل
                </button>
                <button
                  onClick={() => dispatch(toggleAddRecordPopup("task"))}
                  className="text-white bg-[#048D5A] py-1.5 px-4 rounded text-sm font-semibold"
                >
                  تعديل
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        className={`${
          state ? "p-4" : "overflow-hidden max-h-0"
        } flex gap-4 HR-row-details transition-all`}
      >
        <section className="flex flex-col gap-4 w-full">
          <div className="simple-div">
            <label htmlFor="">
              <span>تفاصيل المهمة</span>
            </label>
            <section>{details}</section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TaskRow;
