"use client";
import React, { useRef, useState } from "react";
import "./style/issueDetails.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { useDispatch } from "react-redux";
import Details from "./details/Details";
import Attendance from "./attendance/Attendance";
import EmployeeStatistics from "@/components/statistics/EmployeeStatistics";
import IssuesTable from "../../issues/IssuesTable";
import ContractsWrapper from "../../contracts/ContractsWrapper";
import VacationsTable from "./vacations/VacationsTable";
import AddEmployee from "@/components/popups/addEmployee/AddEmployee";
import PromotionsTable from "./promotions/PromotionsTable";

const EmployeeDetails = ({ id }) => {
  const [active, setActive] = useState(0);
  const outerSwiperRef = useRef(null);
  const innnerSwiperRef = useRef(null);
  const dispatch = useDispatch();
  console.log(active);
  const sections = [
    "التفاصيل",
    "العقد",
    "الترقيات",
    "الرواتب",
    "الخصومات",
    "السلف",
    "المكافآت",
    "الحضور و الانصراف",
    "الاجازات",
    "تقييم الاداء",
    "القضايا",
    "العقود",
  ];

  const swipeOuter = (id) => {
    if (outerSwiperRef.current) {
      outerSwiperRef.current.slideTo(id);
    }
  };

  const swipeInner = (id) => {
    if (innnerSwiperRef.current) {
      innnerSwiperRef.current.slideTo(id);
    }
  };
  return (
    <div className="issue-details flex">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (outerSwiperRef.current = swiper)}
        className="w-full"
        allowTouchMove={false}
      >
        <SwiperSlide className="w-auto">
          <div className="issue-details flex w-full">
            <nav className="bg-white drop-shadow w-[160px] h-fit swiper-nav">
              <ul className="w-full">
                {sections.map((section, index) => (
                  <li
                    key={index}
                    className={`${
                      active === index && "active"
                    } w-full whitespace-nowrap p-4 font-medium cursor-pointer`}
                    onClick={() => {
                      setActive(index);
                      swipeInner(index);
                    }}
                  >
                    {section}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="item-sections-details w-[calc(100%-160px)]">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => (innnerSwiperRef.current = swiper)}
                className="w-full overflow-hidden"
                allowTouchMove={false}
              >
                {/* التفاصيل */}
                <SwiperSlide>
                  <Details />
                </SwiperSlide>
                {/* العقد */}
                <SwiperSlide>
                  <div className="px-4">
                  <AddEmployee />
                  </div>
                </SwiperSlide>
                {/* الترقيات */}
                <SwiperSlide>
                  <PromotionsTable />
                </SwiperSlide>
                
                {/* الرواتب */}
                <SwiperSlide>
                  <table className="simple-table">
                    <thead>
                      <tr>
                        <th>الرقم </th>
                        <th>التاريخ </th>
                        <th>المبلغ</th>
                        <th>الخصومات</th>
                        <th>المدفوع</th>
                        <th>المستحق</th>
                        <th>الحالة</th>
                        <th>التفاصيل</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>{new Date("2022-01-01").toLocaleDateString()}</td>
                        <td>2000 ريال</td>
                        <td>0 ريال</td>
                        <td>2000 ريال</td>
                        <td>0 ريال</td>
                        <td>تم الدفع</td>
                        <td>لا يوجد</td>
                        <td>
                          <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                            تعديل
                          </button>
                        </td>
                      </tr>
                      <tr className="absent">
                        <td>2</td>
                        <td>{new Date().toLocaleDateString()}</td>

                        <td>2000 ريال</td>
                        <td>500 ريال</td>

                        <td>0 ريال</td>
                        <td>1500 ريال</td>

                        <td>لم يتم الدفع</td>
                        <td>500 ريال خصومات تأخر</td>
                        <td>
                          <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                            تعديل
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                            اضافة
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </SwiperSlide>
                {/* الخصومات */}
                <SwiperSlide>
                  <table className="simple-table">
                    <thead>
                      <tr>
                        <th>الرقم </th>
                        <th>التاريخ </th>
                        <th>المبلغ</th>
                        <th>الخصومات</th>
                        <th>التفاصيل</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>{new Date("2022-01-01").toLocaleDateString()}</td>

                        <td>2000 ريال</td>
                        <td>0 ريال</td>

                        <td>لا يوجد</td>
                        <td>
                          <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                            تعديل
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>


                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                            اضافة
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </SwiperSlide>
                {/* السلف */}
                <SwiperSlide>
                  <table className="simple-table">
                    <thead>
                      <tr>
                        <th>الرقم</th>
                        <th>التاريخ</th>
                        <th>المبلغ</th>
                        <th>الخصومات</th>
                        <th>المدفوع</th>
                        <th>المستحق</th>
                        <th>الحالة</th>
                        <th>التفاصيل</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>{new Date("2022-01-01").toLocaleDateString()}</td>

                        <td>2000 ريال</td>
                        <td>0 ريال</td>

                        <td>2000 ريال</td>
                        <td>0 ريال</td>

                        <td>تم الدفع</td>
                        <td>لا يوجد</td>
                        <td>
                          <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                            تعديل
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                            اضافة
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </SwiperSlide>
                {/* المكافآت */}
                <SwiperSlide>
                  <table className="simple-table">
                    <thead>
                      <tr>
                        <th>رقم الدفعة</th>
                        <th>تاريخ الدفعة</th>
                        <th>المبلغ</th>
                        <th>الخصومات</th>
                        <th>المدفوع</th>
                        <th>المستحق</th>
                        <th>الحالة</th>
                        <th>التفاصيل</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>{new Date("2022-01-01").toLocaleDateString()}</td>

                        <td>2000 ريال</td>
                        <td>0 ريال</td>

                        <td>2000 ريال</td>
                        <td>0 ريال</td>

                        <td>تم الدفع</td>
                        <td>لا يوجد</td>
                        <td>
                          <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                            تعديل
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>

                        <td>
                          <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                            اضافة
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </SwiperSlide>
                {/* الحضور و الانصراف */}
                <SwiperSlide>
                  <Attendance />
                </SwiperSlide>
                {/* الاجازات */}
                <SwiperSlide>
                  <VacationsTable />
                </SwiperSlide>
                {/* تقييم الاداء */}
                <SwiperSlide>
                  <EmployeeStatistics />
                </SwiperSlide>
                {/* القضايا */}
                <SwiperSlide>
                  <IssuesTable />
                </SwiperSlide>
                {/* العقود */}
                <SwiperSlide>
                  <ContractsWrapper />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default EmployeeDetails;
