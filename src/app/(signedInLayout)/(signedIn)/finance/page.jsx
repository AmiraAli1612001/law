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
import { exportTableToExcel } from "@/helperFunctions/excelExport";
import RepeatingSalaries from "@/components/pages/finance/salaries/repeating/RepeatingSalaries";
import VaultEle from "@/components/pages/finance/vault/VaultEle";

const Finance = ({ params: { token } }) => {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [salariesActiveIndex, setSalariesActiveIndex] = useState(0);
  const [salariesWrapperActiveIndex, setSalariesWrapperActiveIndex] =
    useState(0);

  const innnerSwiper1Ref = useRef(null);
  const innnerSwiper2Ref = useRef(null);
  const innnerSwiper3Ref = useRef(null);
  const salariesSwiperRef = useRef(null);
  const salariesWrapperSwiperRef = useRef(null);

  const outerSwiperRef = useRef(null);
  console.log(active);
  const sections = [
    "المصروفات",
    "الالتزامات",
    "الايرادات",
    "الرواتب",
    "التقارير المالية",
    "العقود",
    "الخزنة",
  ];
  const salariesSections = ["المدفوعة", "القادمة", "الشهرية المتكررة"];
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
            {["التفاصيل", "التقرير"].map((item, index) => (
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
            {["التفاصيل", "التقرير"].map((item, index) => (
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
            {["التفاصيل", "التقرير"].map((item, index) => (
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
      case 3:
        return (
          <nav className="flex gap-4 items-center ">
            {["التفاصيل", "التقرير"].map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setSalariesWrapperActiveIndex(index);
                  swipeInner(index, salariesWrapperSwiperRef);
                }}
                // disabled={index === 2}
                className={`${
                  salariesWrapperActiveIndex == index ? " active " : ""
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
              {/* main nav */}
              <div className="flex justify-between">
                {/* main nav */}
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
                {/*left nav */}
                {renderChartBtn()}
              </div>
              {/* swiper wrapper */}
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
                        <div className="flex gap-4">
                          <div className="w-1/3 h-fit">
                            <div className="bg-gray-100 p-4 rounded-lg ">
                              <h3 className="font-bold text-lg mb-4">
                                مدة التقرير
                              </h3>
                              <div>
                                <span className="ml-2 font-bold">من: </span>
                                <input
                                  className="p-2 rounded-lg"
                                  type="date"
                                  name=""
                                  id=""
                                />
                              </div>
                              <div className="mt-4">
                                <span className="ml-2 font-bold">الى: </span>
                                <input
                                  className="p-2 rounded-lg"
                                  type="date"
                                  name=""
                                  id=""
                                />
                              </div>
                              <div className="flex items-center gap-6 my-2">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  name=""
                                  id=""
                                />
                                <label htmlFor="">مصروفات جميع القضايا</label>
                              </div>
                              <div className="flex items-center gap-6 my-2">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  name=""
                                  id=""
                                />
                                <label htmlFor="">مصروفات قضايا نوع 1</label>
                              </div>
                              <div className="flex items-center gap-6 my-2">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  name=""
                                  id=""
                                />
                                <label htmlFor="">مصروفات قضايا نوع 2</label>
                              </div>
                              <div className="flex items-center gap-6 my-2">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  name=""
                                  id=""
                                />
                                <label htmlFor="">مصروفات قضايا نوع 3</label>
                              </div>
                              <button
                                onClick={exportTableToExcel}
                                className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 w-full py-2 rounded font-semibold text-xl text-center mt-4"
                              >
                                اصدار
                              </button>
                            </div>
                            <div className="bg-gray-100 p-4 mt-4 rounded-lg ">
                              <div className="flex justify-between">
                                <span>اجمالي مصروفات المدة: </span>
                                <span>$300</span>
                              </div>
                              <div className="flex justify-between mt-4">
                                <span>اجمالي ايرادات المدة: </span>
                                <span>$300</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-100 p-4 rounded-lg flex-1 h-fit">
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
                                  data: monthsSalaryData.map(
                                    (e) => e.salary / 2.1
                                  ),
                                },
                              ]}
                              data={monthsSalaryData}
                            />
                          </div>
                        </div>
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
                  {/* الرواتب*/}
                  <SwiperSlide>
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) =>
                        (salariesWrapperSwiperRef.current = swiper)
                      }
                      className="w-full"
                      allowTouchMove={false}
                    >
                      <SwiperSlide>
                        <div className="w-full flex gap-4">
                          <nav className="bg-white drop-shadow w-fit flex-1 h-fit">
                            <ul className="w-full flex flex-col">
                              {salariesSections.map((section, index) => (
                                <li
                                  key={index}
                                  className={`${
                                    salariesActiveIndex === index && "active"
                                  } w-full whitespace-nowrap p-4 font-medium cursor-pointer`}
                                  onClick={() => {
                                    dispatch(closeAddFormRecord());
                                    setSalariesActiveIndex(index);
                                    swipeInner(index, salariesSwiperRef);
                                  }}
                                >
                                  {section}
                                </li>
                              ))}
                            </ul>
                          </nav>
                          <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) =>
                              (salariesSwiperRef.current = swiper)
                            }
                            className="w-[calc(100%-200px)]"
                            allowTouchMove={false}
                          >
                            <SwiperSlide>
                              <PaymentsDueTable />
                            </SwiperSlide>
                            <SwiperSlide>
                              <PaymentsDueTable />
                            </SwiperSlide>
                            <SwiperSlide>
                              <RepeatingSalaries />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </SwiperSlide>
                      {/* chart */}
                      <SwiperSlide>
                        <div className="flex gap-4">
                          <div className="w-1/3 h-fit">
                            <div className="bg-gray-100 p-4 rounded-lg ">
                              <h3 className="font-bold text-lg mb-4">
                                مدة التقرير
                              </h3>
                              <div>
                                <span className="ml-2 font-bold">من: </span>
                                <input
                                  className="p-2 rounded-lg"
                                  type="date"
                                  name=""
                                  id=""
                                />
                              </div>
                              <div className="mt-4">
                                <span className="ml-2 font-bold">الى: </span>
                                <input
                                  className="p-2 rounded-lg"
                                  type="date"
                                  name=""
                                  id=""
                                />
                              </div>
                              <div className="flex items-center gap-6 my-2">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  name=""
                                  id=""
                                />
                                <label htmlFor="">مصروفات جميع القضايا</label>
                              </div>
                              <div className="flex items-center gap-6 my-2">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  name=""
                                  id=""
                                />
                                <label htmlFor="">مصروفات قضايا نوع 1</label>
                              </div>
                              <div className="flex items-center gap-6 my-2">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  name=""
                                  id=""
                                />
                                <label htmlFor="">مصروفات قضايا نوع 2</label>
                              </div>
                              <div className="flex items-center gap-6 my-2">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  name=""
                                  id=""
                                />
                                <label htmlFor="">مصروفات قضايا نوع 3</label>
                              </div>
                              <button
                                onClick={exportTableToExcel}
                                className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 w-full py-2 rounded font-semibold text-xl text-center mt-4"
                              >
                                اصدار
                              </button>
                            </div>
                            <div className="bg-gray-100 p-4 mt-4 rounded-lg ">
                              <div className="flex justify-between">
                                <span>اجمالي مصروفات المدة: </span>
                                <span>$300</span>
                              </div>
                              <div className="flex justify-between mt-4">
                                <span>اجمالي ايرادات المدة: </span>
                                <span>$300</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-100 p-4 rounded-lg flex-1 h-fit">
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
                                  data: monthsSalaryData.map(
                                    (e) => e.salary / 2.1
                                  ),
                                },
                              ]}
                              data={monthsSalaryData}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </SwiperSlide>
                  {/* التقارير المالية */}
                  <SwiperSlide>
                    <ReportsTable />
                  </SwiperSlide>
                  {/* العقود */}
                  <SwiperSlide>
                    <ContractsTable />
                  </SwiperSlide>
                  {/* الخزنة */}
                  <SwiperSlide>
                    <div className="flex flex-col gap-4 ">
                      <div className="wt-1/3  h-fit flex gap-4 font-bold">
                        <div className="bg-gray-100 flex-1 p-4 rounded-lg text-green-600">
                          <div className="flex justify-between ">
                            <span>الميزانية الحالية: </span>
                            <span>$1500</span>
                          </div>
                          <div className="flex justify-between mt-4">
                            <span>الاحتياط النقدي: </span>
                            <span>$500</span>
                          </div>
                        </div>
                        <div className="bg-gray-100 flex-1 p-4 mtt-4 rounded-lg ">
                          <div className="flex justify-between text-red-600">
                            <span>اجمالي المصروفات المستحقة: </span>
                            <span>$300</span>
                          </div>
                          <div className="flex justify-between mt-4 text-green-600">
                            <span>اجمالي الايرادات المستحقة: </span>
                            <span>$300</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg flex-1 h-fit">
                        <h3 className="font-bold text-lg mb-4">
                          اخر التحديثات
                        </h3>
                        <VaultEle />
                      </div>
                    </div>
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
