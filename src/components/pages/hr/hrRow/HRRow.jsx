import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js";
import { Line } from "react-chartjs-2";
import { toggleEditEmployee } from "@/globalState/Features/popupsSlice";
import { useDispatch } from "react-redux";
const HRRow = ({
  data: { id, name, title, department, status : status2, vacations, work, loans, salary },
}) => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  // console.log(data)
  // const cellStyles =;
  //bg-[#FAF9F4]
  return (
    <div className="">
      <div
        className={`bg-bgGreen flex gap-2 p-4 items-center HR-row rounded-lg relative`}
      >
        <div className={`w-[10%]`}>
          <p className="text-base ">{id}</p>
        </div>
        <div className="row-data-content">
          <p className="">{name}</p>
        </div>
        <div className="row-data-content">
          <p className="">{title}</p>
        </div>
        <div className="row-data-content">
          <p className="">{department}</p>
        </div>
        <div className="row-data-content">
          <p className="">{status2 == 1 ? "مفعل" : "غير مفعل"}</p>
        </div>
        <div className="flex gap-2 items-center">
          <button
            className="bg-[#048D5A] text-white px-4 py-2 rounded text-sm"
            onClick={() => setState(!state)}
          >
            التفاصيل
          </button>
          <button
            className="bg-mainRed bg-opacity-[0.3] text-white px-4 py-2 rounded text-sm"
            onClick={() => dispatch(toggleEditEmployee(id))}
          >
            تعديل
          </button>
        </div>
      </div>
      <div
        className={`${
          state ? "p-4" : "overflow-hidden max-h-0"
        } flex gap-4 HR-row-details transition-all`}
      >
        <section className="flex gap-4">
          <section>
            <h3>الأجازات</h3>
            {/* #F1F0F8 */}
            <div
              className={`bg-[#F1F0F8] after:!bg-[#9586f5] flex gap-2 p-4 items-center HR-row rounded-lg relative`}
            >
              <div className={``}>
                <p className="text-base ">
                  من {vacations} الي {vacations}
                </p>
              </div>
              <div className={``}>
                <p className="text-sm text-red-500 font-bold">اجازة مرضية</p>
              </div>
            </div>
          </section>
          <section>
            <h3>المباشرات</h3>
            {/* #F1F0F8 */}
            <div
              className={`bg-[#F1F0F8] after:!bg-[#9586f5] flex gap-2 p-4 items-center HR-row rounded-lg relative`}
            >
              <div className={``}>
                <p className="text-base ">علي رأس العمل</p>
              </div>
            </div>
          </section>
          <section>
            <h3>الراتب</h3>
            {/* #F1F0F8 */}
            <div
              className={`bg-[#F1F0F8] after:!bg-[#9586f5] flex gap-2 p-4 items-center HR-row rounded-lg relative`}
            >
              <div className={``}>
                <p className="text-base ">{salary} <span className="text-sm text-green-600 font-black">ريال</span></p>
              </div>
            </div>
          </section>
          <section>
            <h3>السلف</h3>
            {/* #F1F0F8 */}
            <div
              className={`bg-[#F1F0F8] after:!bg-[#9586f5] flex gap-2 p-4 items-center HR-row rounded-lg relative`}
            >
              <div className={``}>
                <p className="text-base ">1500 ريال</p>
              </div>
              <div className={``}>
                <p className="text-base ">{vacations}</p>
              </div>
              <div className={``}>
                <p className="text-sm text-red-500 font-bold ">لم تحصل</p>
              </div>
            </div>
          </section>
        </section>
        <section></section>
      </div>
    </div>
  );
};

export default HRRow;
