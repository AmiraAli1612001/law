"use client";
import ChartWrapper from "@/components/shared/charts/ChartWrapper";
import React from "react";
import { Chart } from "react-charts";
import chartsData from "@/fakeData/chartsData.json";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
const Statistics = () => {
  return (
    <ScreenWrapper className="flex flex-col gap-4">
      <section className="grid grid-cols-4 gap-4">
        <div className="bg-whtie flex flex-col rounded  yn-shadow p-4 text-gray-800">
          <p>ايرادات الشهر السابق</p>
          <h3 className="text-3xl font-bold">$1500</h3>
        </div>
        <div className="bg-whtie flex flex-col rounded  yn-shadow p-4 text-gray-800">
          <p>مصروفات الشهر الحالي</p>
          <h3 className="text-3xl font-bold">$1500</h3>
        </div>
        <div className="bg-whtie flex flex-col rounded  yn-shadow p-4 text-gray-800">
          <p>القضايا الحالية</p>
          <h3 className="text-3xl font-bold">10</h3>
        </div>
        <div className="bg-whtie flex flex-col rounded  yn-shadow p-4 text-gray-800">
          <p>ميعاد الجلسة الحالية</p>
          <h3 className="text-3xl font-bold">2024-12-31</h3>
        </div>
      </section>
      <ChartWrapper Chart={Chart} data={chartsData} />
    </ScreenWrapper>
  );
};

export default Statistics;
