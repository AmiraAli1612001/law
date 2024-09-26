import React from "react";

const ChartWrapper = ({ Chart, data, chartType, labels,datasets }) => {
  return (
    <div className="flex justify-center bg-white yn-shadow p-4">
      <div className="w-full flex flex-col gap-4">
        <h3 className="text-2xl font-medium">الايرادات الشهرية</h3>
        {/* Chart */}
        <div className="w-full aspect-[2]">
          <Chart
            data={{
              labels,
              datasets
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartWrapper;
