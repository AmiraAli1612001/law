"use client";
import ChartWrapper from "@/components/shared/charts/ChartWrapper";
import React from "react";
import monthsSalaryData from "@/fakeData/monthsSalaryData.json";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
import DataItem from "@/components/pages/statistics/DataItem";
import { Chart as ChartJS } from "chart.js/auto";
// import { Bar } from "react-chartjs-2";

const Statistics = () => {
  const dataItems = [
    {
      title: "ايرادات الشهر السابق",
      value: "$1500",
    },
    {
      title: "مصروفات الشهر الحالي",
      value: "$1500",
    },
    {
      title: "اجمالي القضايا النشطة",
      value: "10",
    },
    {
      title: "ميعاد الجلسة الحالية",
      value: "10/10/2024",
    },
    {
      title: "اجمالي القضايا المغلقة",
      value: "85",
    },
  ];
  return (
    <ScreenWrapper className="flex flex-col gap-4 py-4">
      <section className="grid grid-cols-4 gap-4 [&>div]:bg-bgGreen">
        {dataItems.map((item, index) => (
          <DataItem key={index} title={item.title} value={item.value} />
        ))}
      </section>
      <ChartWrapper
        // Chart={Bar}
        labels={[
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
        ]}
        chartType="line"
        data={monthsSalaryData}
      />
      {/* <ChartWrapper Chart={Chart} chartType="bar" data={chartsData} /> */}
    </ScreenWrapper>
  );
};

export default Statistics;
