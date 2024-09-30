"use client";
import "./styles/statistics.css";
import ChartWrapper from "@/components/shared/charts/ChartWrapper";
import React, { useRef, useState } from "react";
import monthsSalaryData from "@/fakeData/monthsSalaryData.json";
import issuesData from "@/fakeData/issuesData.json";
import HRData from "@/fakeData/HRData.json";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
import DataItem from "@/components/pages/statistics/DataItem";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Statistics = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef();
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
  const swipeTo = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };
  return (
    <ScreenWrapper className="flex  gap-4 py-4 statistics">
      <section className="grid grid-cols-1 h-fit gap-4 [&>div]:bg-bgGreen w-[250px]">
        {dataItems.map((item, index) => (
          <DataItem key={index} title={item.title} value={item.value} />
        ))}
      </section>
      <div className="flex-1 w-[calc(100%-250px)]">
        <nav className="flex gap-4 items-center px-4">
          {["الايرادات الشهرية", "عدد القضايا", "احصائيات الموظفين"].map(
            (item, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  swipeTo(index);
                }}
                // disabled={index === 2}
                className={`${
                  activeIndex == index ? " active " : ""
                } cursor-pointer py-2 px-4 bg-[#f1f0f8] rounded`}
              >
                {item}
              </button>
            )
          )}
        </nav>
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          onSwiper={(swiper) => {
            setActiveIndex(0);
            swiperRef.current = swiper;
          }}
          className="!w-auto"
        >
          <SwiperSlide>
            <ChartWrapper
              // title="الايرادات الشهرية"
              Chart={Bar}
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
              datasets={[
                {
                  label: "الايرادات الشهرية",
                  data: monthsSalaryData.map((e) => e.salary),
                },
                {
                  label: "المصروفات الشهرية",
                  data: monthsSalaryData.map((e) => e.salary / 2.1),
                },
              ]}
              data={monthsSalaryData}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ChartWrapper
              // title="الايرادات الشهرية"
              Chart={Bar}
              labels={[...new Set(issuesData.map((e) => e.subType))]}
              datasets={[
                {
                  label: "انواع القضايا",
                  data: [10, 50, 45, 23, 21, 15, 30, 46, 32, 38],
                },
              ]}
              // data={monthsSalaryData}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ChartWrapper
              Chart={Bar}
              labels={HRData.map((e) => e.name)}
              data={HRData}
              // title="احصائيات الموظفين"
              datasets={[
                {
                  label: "ربحية الموظف",
                  data: HRData.map((e) => e.success),
                },
                {
                  label: "عدد القضايا",
                  data: HRData.map((e) => e.issues),
                },
                {
                  label: "عدد العقود",
                  data: HRData.map((e) => e.contracts),
                },
              ]}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </ScreenWrapper>
  );
};

export default Statistics;
