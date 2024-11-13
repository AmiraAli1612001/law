"use client";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
import React, { useRef, useState } from "react";
import "./styles/finance.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import monthsSalaryData from "@/fakeData/monthsSalaryData.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ChartWrapper from "@/components/shared/charts/ChartWrapper";
import ExpensesTable from "@/components/pages/finance/expences/ExpensesTable";
import CommitmentsTable from "@/components/pages/finance/commitments/CommitmentsTable";
import IncomesTable from "@/components/pages/finance/incomes/IncomesTable";
import PaymentsDueTable from "@/components/pages/finance/paymentsDue/PaymentsDueTable";
import ReportsTable from "@/components/pages/finance/reports/ReportsTable";
import { closeAddFormRecord } from "@/globalState/Features/formStateSlice";
import { useDispatch } from "react-redux";
import ContractsTable from "@/components/pages/finance/contracts/ContractsTable";

const Finance = ({ params: { token } }) => {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);

  const innnerSwiper1Ref = useRef(null);
  const innnerSwiper2Ref = useRef(null);
  const innnerSwiper3Ref = useRef(null);

  const outerSwiperRef = useRef(null);
  console.log(active);
  const sections = [
    "المصروفات",
    "الالتزامات",
    "الايرادات",
    "الرواتب",
    "التقارير المالية",
    "العقود",
  ];

  const swipeOuter = (id) => {
    if (outerSwiperRef.current) {
      outerSwiperRef.current.slideTo(id);
    }
  };

  const swipeInner = (id, swiperRef) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(id);
    }
  };
  function renderChartBtn() {
    switch (active) {
      case 0:
        return (
          <nav className="flex gap-4 items-center ">
            {["التفاصيل", "رسم توضيحي"].map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex1(index);
                  swipeInner(index, innnerSwiper1Ref);
                }}
                // disabled={index === 2}
                className={`${
                  activeIndex1 == index ? " active " : ""
                } cursor-pointer py-2 px-4 bg-[#f1f0f8] rounded`}
              >
                {item}
              </button>
            ))}
          </nav>
        );
        break;
      case 1:
        return (
          <nav className="flex gap-4 items-center ">
            {["التفاصيل", "رسم توضيحي"].map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex2(index);
                  swipeInner(index, innnerSwiper2Ref);
                }}
                // disabled={index === 2}
                className={`${
                  activeIndex2 == index ? " active " : ""
                } cursor-pointer py-2 px-4 bg-[#f1f0f8] rounded`}
              >
                {item}
              </button>
            ))}
          </nav>
        );
        break;
      case 2:
        return (
          <nav className="flex gap-4 items-center ">
            {["التفاصيل", "رسم توضيحي"].map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex3(index);
                  swipeInner(index, innnerSwiper3Ref);
                }}
                // disabled={index === 2}
                className={`${
                  activeIndex3 == index ? " active " : ""
                } cursor-pointer py-2 px-4 bg-[#f1f0f8] rounded`}
              >
                {item}
              </button>
            ))}
          </nav>
        );
        break;
      default:
        break;
    }
  }
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4 finance">
      {/* <LinkHeader to={`/finance/$`} title={`المالية`} /> */}
      <div className="flex flex-col gap-4">
        <div className="issue-details flex">
          <div className="w-full">
            <div className="issue-details flex flex-col w-full gap-4">
              <div className="flex justify-between">
                <nav className="bg-white drop-shadow w-fit ccw-[160px] h-fit">
                  <ul className="w-full flex">
                    {sections.map((section, index) => (
                      <li
                        key={index}
                        className={`${
                          active === index && "active"
                        } w-full whitespace-nowrap p-4 font-medium cursor-pointer`}
                        onClick={() => {
                          dispatch(closeAddFormRecord());
                          setActive(index);
                          swipeOuter(index);
                        }}
                      >
                        {section}
                      </li>
                    ))}
                  </ul>
                </nav>
                {renderChartBtn()}
              </div>
              <div className="items-sections-details w-full ccw-[calc(100%-176px)] relative">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  // onSlideChange={() => setActiveIndex(0)}
                  onSwiper={(swiper) => (outerSwiperRef.current = swiper)}
                  className="w-full overflow-hidden"
                  allowTouchMove={false}
                >
                  {/* المصروفات */}
                  <SwiperSlide>
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => (innnerSwiper1Ref.current = swiper)}
                      className="w-full"
                      allowTouchMove={false}
                    >
                      <SwiperSlide>
                        <ExpensesTable />
                      </SwiperSlide>
                      {/* chart */}
                      <SwiperSlide>
                        <ChartWrapper
                          className={"max-w-[1024px]"}
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
                            "November",
                            "December",
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
                    </Swiper>
                  </SwiperSlide>
                  {/* الالتزامات */}
                  <SwiperSlide>
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => (innnerSwiper2Ref.current = swiper)}
                      className="w-full"
                      allowTouchMove={false}
                    >
                      <SwiperSlide>
                        <CommitmentsTable />
                      </SwiperSlide>
                      <SwiperSlide>
                        <ChartWrapper
                          className={"max-w-[1024px]"}
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
                            "November",
                            "December",
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
                    </Swiper>
                  </SwiperSlide>
                  {/* الايرادات */}
                  <SwiperSlide>
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => (innnerSwiper3Ref.current = swiper)}
                      className="w-full"
                      allowTouchMove={false}
                    >
                      <SwiperSlide>
                        <IncomesTable />
                      </SwiperSlide>
                      <SwiperSlide>
                        <ChartWrapper
                          className={"max-w-[1024px]"}
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
                            "November",
                            "December",
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
                    </Swiper>
                  </SwiperSlide>
                  {/* الايرادات */}
                  {/* <SwiperSlide>
                    <DebtsTable />
                  </SwiperSlide> */}
                  {/* الرواتب*/}
                  <SwiperSlide>
                    <PaymentsDueTable />
                  </SwiperSlide>
                  {/* التقارير المالية */}
                  <SwiperSlide>
                    <ReportsTable />
                  </SwiperSlide>
                  {/* العقود */}
                  <SwiperSlide>
                    <ContractsTable />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
};

export default Finance;
