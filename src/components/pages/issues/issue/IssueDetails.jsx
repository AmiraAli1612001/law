"use client";
import React, { useRef, useState } from "react";
import "./style/issueDetails.css";
import Sessions from "./sessions/Sessions";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import Personnel from "./personnel/Personnel";
import { useDispatch, useSelector } from "react-redux";
import issuesData from "@/fakeData/issuesData.json";
import Parties from "./parties/Parties";
import Appointments from "./appointments/Appointments";
import VisitsTable from "./visits/VisitsTable";
import CallsTable from "./calls/CallsTable";
import {
  toggleAttachmentsPopup,
  togglePrintContractPopup,
} from "@/globalState/Features/popupsSlice";
import { toast } from "react-toastify";
import Link from "next/link";
import SessionsTable from "../../sessions/sessionsTable/SessionsTable";
import { resetFormState } from "@/globalState/Features/formStateSlice";

const IssueDetails = ({ id }) => {
  const [active, setActive] = useState(0);
  const outerSwiperRef = useRef(null);
  const innnerSwiperRef = useRef(null);
  const dispatch = useDispatch();
  const issueDetails = issuesData.find((issue) => issue.id == id);
  console.log(active);
  const sections = [
    "التفاصيل",
    "القائمين علي القضية",
    // "اطراف الدعوي",
    "الجلسات",
    "المواعيد",
    "الوكالات",
    "المهام الميدانية",
    "الزيارات",
    "إدارة المكالمات",
    "المرفقات",
    // "المالية",
    "طباعة العقد",
    // "التقارير المالية",
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
            <nav className="bg-white drop-shadow w-[160px] h-fit">
              <ul className="w-full">
                {sections.map((section, index) => (
                  <li
                    key={index}
                    className={`${
                      active === index && "active"
                    } w-full whitespace-nowrap p-4 font-medium cursor-pointer`}
                    onClick={() => {
                      dispatch(resetFormState())
                      setActive(index);
                      swipeInner(index);
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
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => (innnerSwiperRef.current = swiper)}
                className="w-full overflow-hidden"
                allowTouchMove={false}
              >
                {/* موضوع الدعوي */}
                <SwiperSlide>
                  <div className="simple-div">
                    <div className="grid grid-cols-2  gap-6">
                      <div className="simple-input">
                        <label htmlFor="">المدعي</label>
                        <Link className="text-red-500 input"  href={"/clients/1"}>
                          ahmed alsayed
                        </Link>
                      </div>
                      <div className="simple-input">
                        <label htmlFor="">المدعي عليه</label>
                        <Link className="text-green-500 input" href={"/clients/2"}>
                          ibrahim mohammed
                        </Link>
                      </div>
                    </div>
                    <label htmlFor="">موضوع الدعوي</label>
                    <textarea
                      name=""
                      id=""
                      defaultValue={
                        "lorem ipsum dolor sit amet  consectetur adipisicing elit.orem ipsum dolor sit amet  consectetur adipisicing elit. orem ipsum dolor sit amet  consectetur adipisicing elit. "
                      }
                    ></textarea>
                    {/* <label htmlFor="">طلبات المدعي</label>
                    <textarea
                      name=""
                      id=""
                      defaultValue={
                        "lorem ipsum dolor sit amet  consectetur adipisicing elit.orem ipsum dolor sit amet  consectetur adipisicing elit. orem ipsum dolor sit amet  consectetur adipisicing elit. "
                      }
                    ></textarea>
                    <label htmlFor="">اسانيد الدعوي</label>
                    <textarea
                      name=""
                      id=""
                      defaultValue={
                        "lorem ipsum dolor sit amet  consectetur adipisicing elit.orem ipsum dolor sit amet  consectetur adipisicing elit. orem ipsum dolor sit amet  consectetur adipisicing elit. "
                      }
                    ></textarea> */}
                  </div>
                </SwiperSlide>
                {/* القائمين علي القضية */}
                <SwiperSlide>
                  <Personnel
                    lawyer={issueDetails.lawyer}
                    admin={issueDetails.admin}
                  />
                </SwiperSlide>
                {/* اطراف الدعوي */}
                {/* <SwiperSlide>
                  <Parties
                    prosecutor={issueDetails?.prosecutor}
                    defendant={issueDetails?.defendant}
                  />
                </SwiperSlide> */}
                {/* الجلسات */}
                <SwiperSlide>
                  {/* <Sessions id={id} /> */}
                  <SessionsTable addTop={true}/>
                </SwiperSlide>
                {/* المواعيد */}
                <SwiperSlide>
                  <Appointments />
                </SwiperSlide>
                {/* الوكالات */}
                <SwiperSlide>
                  <table className="simple-table">
                    <thead>
                      <tr>
                        <th>رقم الوكالة</th>
                        <th>تاريخ الوكالة</th>
                        <th>تاريخ الانتهاء</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="[&>td>input]:!w-fit">
                        <td>
                          <input type="text" defaultValue={1} />
                        </td>
                        <td>
                          <input type="date" defaultValue={"2-3-2024"} />
                        </td>
                        <td>
                          <input type="date" defaultValue={"2-3-2024"} />
                        </td>
                        <td>
                          <button
                            onClick={() => toast.success("تمت الاضافة بنجاح")}
                            className="bg-textGreen block w-full bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
                          >
                            اضافة
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </SwiperSlide>
                {/* المعلومات الميدانية */}
                <SwiperSlide>
                  <table className="simple-table">
                    {/* الموقع.  2. العميل.  3. ارتباطها بقضية أو لا.   4. التكلفة.  5. التاريخ. 6. الوقت. */}
                    {/* 7. الموظف.  8. التنفيذ  9. الملخص */}
                    <thead className="simple-table">
                      <tr>
                        {/* 1 */}
                        <th>الموقع</th>
                        {/* <th>العميل</th> */}
                        {/* <th>الارتباط بالقضية</th> */}
                        {/* 2 */}
                        <th>التكلفة</th>
                        {/* 3 */}
                        <th>التاريخ</th>
                        {/* 4 */}
                        <th>الوقت</th>
                        {/* 5 */}
                        <th>الموظف</th>
                        {/* <th>التنفيذ</th> */}
                        {/* 6 */}
                        <th>الملخص</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>مكة</td>
                        {/* <td>علي عبدالله</td> */}

                        {/* <td>غير مرتبطة بالقضية</td> */}
                        <td>1000</td>

                        <td>2024-10-10</td>
                        <td>10:00</td>

                        <td>علي عبدالله</td>
                        {/* <td>مشغول</td> */}
                        <td>علي عبدالله</td>
                        <td>
                          <button
                            onClick={() => toast.error("تم الحذف بنجاح")}
                            className="bg-mainRed block w-full bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
                          >
                            حذف
                          </button>
                        </td>
                      </tr>
                      <tr>
                        {/* الموقع */}
                        <td>
                          <input type="text" />
                        </td>
                        {/* العميل */}
                        {/* <td>
                          <input type="text" />
                        </td> */}
                        {/* الارتباط بالقضية */}
                        {/* <td>
                          <input type="text" />
                        </td> */}
                        {/* التكلفة */}
                        <td>
                          <input type="text" />
                        </td>
                        {/* التاريخ */}
                        <td>
                          <input type="text" />
                        </td>
                        {/* الوقت */}
                        <td>
                          <input type="text" />
                        </td>
                        {/* الموظف */}
                        <td>
                          <input type="text" />
                        </td>
                        {/* التنفيذ */}
                        {/* <td>
                          <input type="text" />
                        </td> */}
                        {/* الملخص */}
                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <button
                            onClick={() => toast.success("تمت الاضافة بنجاح")}
                            className="bg-textGreen block w-full bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
                          >
                            اضافة
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </SwiperSlide>
                {/*  الزيارات */}
                <SwiperSlide>
                  <VisitsTable />
                </SwiperSlide>
                {/* إدارة المكالمات */}
                <SwiperSlide>
                  <CallsTable />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="attachments !grid lg:grid-cols-2 gap-4">
                    <div className="simple-div">
                      <label htmlFor="">مرفقات العقد</label>
                      <section>
                        <button
                          onClick={() => dispatch(toggleAttachmentsPopup())}
                        >
                          مرفق 1
                        </button>
                      </section>
                    </div>
                    <div className="simple-div">
                      <label htmlFor="">مرفقات القضية</label>
                      <section>
                        <button
                          onClick={() => dispatch(toggleAttachmentsPopup())}
                        >
                          مرفق 1
                        </button>
                      </section>
                    </div>
                    <div className="simple-div">
                      <label htmlFor="">مرفقات الجلسات</label>
                      <section>
                        <button
                          onClick={() => dispatch(toggleAttachmentsPopup())}
                        >
                          مرفق 1
                        </button>
                      </section>
                    </div>
                    <div className="simple-div">
                      <label htmlFor="">مرفقات المهمات</label>
                      <section>
                        <button
                          onClick={() => dispatch(toggleAttachmentsPopup())}
                        >
                          مرفق 1
                        </button>
                      </section>
                    </div>
                    <div className="simple-div">
                      <label htmlFor="">مرفقات الميداني</label>
                      <section>
                        <button
                          onClick={() => dispatch(toggleAttachmentsPopup())}
                        >
                          مرفق 1
                        </button>
                      </section>
                    </div>
                  </div>
                </SwiperSlide>
                {/* print */}
                <SwiperSlide>
                  <button
                    className="bg-[#048D5A] text-white px-4 py-2 rounded text-sm text-center"
                    onClick={() => dispatch(togglePrintContractPopup())}
                  >
                    عرض العقد
                  </button>
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
// {
//   "id": 49,
//   "title": "عقد استشارة",
//   "date": "2024/01/09",
//   "type": "ديوان المظالم",
//   "subType": "تصوير",
//   "client": true,
//   "prosecutor": "Amie Seager",
//   "defendant": "Irene Prescote",
//   "status": "قيد الدراسة",
//   "admin": "Saleem Laxon",
//   "lawyer": "Maurizia Shearston",
//   "salary": 7869
// }
export default IssueDetails;
