import React from "react";

const ChartWrapper = ({ Chart, data }) => {
  const charData = [
    {
      label: "title here",
      data: data.map((e) => {
        return {
          date: new Date(e.date),
          stars: e.income,
        };
      }),
    },
  ];
  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.date,
      formatters: {
        // Ensure value is a Date and then format to show the short month name
        tooltip: (value) =>
          new Date(value).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          }),
        scale: (value) =>
          new Date(value).toLocaleDateString("en-US", { month: "short" }), // For X-axis labels
        // scale: (value) => new Date(value).toLocaleDateString('en-US', { month: 'short' }),
      },
      showGrid: false,
      tickCount: 12,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.stars, // Ensure this reflects the correct income data
        scaleType: "linear", // Ensure linear scale
        tickCount: 10, // You can adjust the number of ticks if needed
        // showGrid: true,
      },
    ],
    []
  );
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
              <Chart
                options={{
                  data: charData,
                  primaryAxis,
                  secondaryAxes,
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
