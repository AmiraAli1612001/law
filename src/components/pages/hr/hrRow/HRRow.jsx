import React, { useState } from "react";

const HRRow = ({
  data: { id, name, title, department, status, vacations, work, loans },
}) => {
  const [state, setState] = useState(false);
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
          <p className="">{status}</p>
        </div>
        <div className="w-[10%]">
          <button
            className="bg-[#048D5A] text-white px-4 py-2 rounded text-sm"
            onClick={() => setState(!state)}
          >
            التفاصيل
          </button>
        </div>
      </div>
      <div
        className={`${
          state ? "p-4" : "overflow-hidden max-h-0"
        } flex gap-4 HR-row-details transition-all`}
      >
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
              <p className="text-base ">سنويا</p>
            </div>
          </div>
          <div
            className={`bg-[#F1F0F8] after:!bg-[#9586f5] flex gap-2 p-4 items-center HR-row rounded-lg relative`}
          >
            <div className={``}>
              <p className="text-base ">
                من {vacations} الي {vacations}
              </p>
            </div>
            <div className={``}>
              <p className="text-base ">سنويا</p>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default HRRow;
