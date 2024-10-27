"use client";
import React, { useRef, useState } from "react";
// import "./style/issueDetails.css";
// import Sessions from "./sessions/Sessions";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import Personnel from "./personnel/Personnel";
import { useDispatch, useSelector } from "react-redux";
import issuesData from "@/fakeData/issuesData.json";
// import Parties from "./parties/Parties";
// import Appointments from "./appointments/Appointments";
// import VisitsTable from "./visits/VisitsTable";
// import CallsTable from "./calls/CallsTable";
import { togglePrintContractPopup } from "@/globalState/Features/popupsSlice";
import Attendance from "./employeeDetails/attendance/Attendance";
import HRTable from "./HRTable";
import VacationsTable from "./vacations/VacationsTable";
import { resetFormState } from "@/globalState/Features/formStateSlice";

const HRWrapper = ({ id }) => {
  const [active, setActive] = useState(0);
  const outerSwiperRef = useRef(null);
  const innnerSwiperRef = useRef(null);
  const dispatch = useDispatch();
  const issueDetails = issuesData.find((issue) => issue.id == id);
  console.log(active);

  const sections = ["الموظفين", "الحضور والانصراف", "الاجازات"];

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
          <div className="issue-details flex w-full gap-4">
            <nav className="bg-white drop-shadow w-[160px] h-fit swiper-nav">
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
            <div className="item-sections-details w-[calc(100%-176px)]">
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
                  <HRTable />
                </SwiperSlide>
                {/* الحضور والانصراف */}
                <SwiperSlide>
                  <Attendance />
                </SwiperSlide>
                {/* الحضور والانصراف */}
                <SwiperSlide>
                  <VacationsTable/>
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
export default HRWrapper;
