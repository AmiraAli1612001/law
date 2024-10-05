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
import DebtsTable from "@/components/pages/finance/debts/DebtsTable";
import PaymentsDueTable from "@/components/pages/finance/paymentsDue/PaymentsDueTable";
import ReportsTable from "@/components/pages/finance/reports/ReportsTable";

const Finance = ({ params: { token } }) => {
  const [active, setActive] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  const innnerSwiper1Ref = useRef(null);
  const innnerSwiper2Ref = useRef(null);

  const outerSwiperRef = useRef(null);
  console.log(active);
  const sections = [
    "المصروفات",
    "الالتزامات",
    "المديونات",
    "الدفعات المستحقة",
    "التقارير المالية",
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

  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4 finance">
      <LinkHeader to={`/finance/$`} title={`المالية`} />
      <div className="flex flex-col gap-4">
        <div className="issue-details flex">
          <div className="w-full">
            <div className="issue-details flex w-full">
              <nav className="bg-white drop-shadow w-[160px] h-fit">
                <ul className="w-full">
                  {sections.map((section, index) => (
                    <li
                      key={index}
                      className={`${
                        active === index && "active"
                      } w-full whitespace-nowrap p-4 font-medium cursor-pointer`}
                      onClick={() => {
                        setActive(index);
                        swipeOuter(index);
                      }}
                    >
                      {section}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="issue-sections-details w-[calc(100%-160px)]">
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
                    <nav className="flex gap-4 items-center px-4">
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
                    <nav className="flex gap-4 items-center px-4">
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
                          Chart={Line}
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
                              label: "الالتزامات الشهرية",
                              data: monthsSalaryData.map((e) => e.salary),
                            },
                          ]}
                          data={monthsSalaryData}
                        />
                      </SwiperSlide>
                    </Swiper>
                  </SwiperSlide>
                  {/* المديونات */}
                  <SwiperSlide>
                    <DebtsTable />
                  </SwiperSlide>
                  {/* الدفعات المستحقة */}
                  <SwiperSlide>
                    <PaymentsDueTable />
                  </SwiperSlide>
                  {/* التقارير المالية */}
                  <SwiperSlide>
                    <ReportsTable />
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
