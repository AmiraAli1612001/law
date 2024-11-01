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
import { deleteRecord } from "@/helperFunctions/dom";
const TaskRow = ({ data: { id, name, title, date,deadLine,actualEndDate, details, status } }) => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="custom-task-wrapper">
      <table className="simple-table row-titles">
        <tbody>
          <tr
            className={`${
              status == 1 ? "present" : "absent"
            } [&>td]:w-[calc(100%/5)]`}
          >
            <td className="w-[calc(100%/16)]">
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
              <span>تاريخ الانتهاء</span>
              <p>{deadLine}</p>
            </td>
            <td>
              <span>تاريخ الانتهاء الفعلي</span>
              <p>{actualEndDate}</p>
            </td>
            <td>
              <span>اسم الموظف</span>
              <Link className="inline-block" href={`/employees/${1}`}>{name}</Link>
            </td>

            <td className="w-[calc(100%/16)]">
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
                  // onClick={() => dispatch(toggleAddRecordPopup("task"))}
                  onClick={(e)=>deleteRecord(e,".custom-task-wrapper")}
                  className="text-white bg-mainRed py-1.5 px-4 rounded text-sm font-semibold"
                >
                  حذف
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
