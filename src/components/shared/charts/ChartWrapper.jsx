import React from "react";
import { Bar } from "react-chartjs-2";

const ChartWrapper = ({ Chart, data,chartType ,labels}) => {
  console.log(data)
  return (
    <div className="flex justify-center bg-white yn-shadow p-4">
      <div className="w-full flex flex-col gap-4">
        <h3 className="text-2xl font-medium">الايرادات الشهرية</h3>
        <div className="flex flex-col">
          {/* Y-Axis Label */}
          <div className="flex flex-row">
            <div className="flex items-center justify-center pr-4 w-[80px]">
              <span className="rotate-90 text-sm font-medium whitespace-nowrap">
                متوسط الدخل بالريال
              </span>
            </div>
            {/* Chart */}
            <div className="h-96 w-full">
              <Bar
                data={{
                  labels:[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    // "November",
                    // "December",
                  ],
                  datasets:[{
                    label:"الايرادات",
                    data: data.map(e=>e.income)
                  }]
                }}
              />
            </div>
          </div>
          {/* X-Axis Label */}
          <div className="flex justify-center mt-2">
            <span className="text-sm font-medium">الشهور</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartWrapper;
