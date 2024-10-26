"use client";
import AddRecord from "@/components/shared/addRecord/AddRecord";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { toast } from "react-toastify";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {
  toggleAddRecordPopup,
  toggleTask,
} from "@/globalState/Features/popupsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import TasksTable from "@/components/pages/tasks/tasksTable/TasksTable";
import issuesData from "@/fakeData/issuesData.json";
import Link from "next/link";
import SessionsTable from "@/components/pages/sessions/sessionsTable/SessionsTable";

const Sessions = () => {
  const tasks = [{ title: "جلسة قضية رقم 1 ", start: new Date() }];
  const [active, setActive] = useState(0);
  const outerSwiperRef = useRef(null);
  const innnerSwiperRef = useRef(null);
  console.log(new Date().toISOString());
  const dispatch = useDispatch();
  console.log(active);
  const sections = ["الجدول", "التفاصيل"];
  const swipeOuter = (id) => {
    if (outerSwiperRef.current) {
      outerSwiperRef.current.slideTo(id);
    }
  };
  function renderEventContent(eventInfo) {
    const handleDateClick = (arg) => {
      // toast.info("ttt");
      dispatch(toggleAddRecordPopup("task"));
    };
    return (
      <Link
        className="flex flex-col gap-1 cursor-pointer bg-bgGreen"
        // onClick={handleDateClick}
        href="/issues/1/sessions/1"
      >
        <b>{eventInfo.event.title}</b>
        <i>9:00 am</i>
        <i>{eventInfo.event.startStr.split("T")[0]}</i>
      </Link>
    );
  }
  const swipeInner = (id) => {
    if (innnerSwiperRef.current) {
      innnerSwiperRef.current.slideTo(id);
    }
  };
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <LinkHeader title={"جميع الجلسات"} />
        <AddRecord innerForm={true} title={"اضافة جلسة"} />
      </div>
      <div className="flex w-full gap-4">
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
        {/* w-[calc(100%-160px)] */}
        <div className="issue-sections-details   w-[calc(100%-176px)] ">
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
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                events={tasks}
                eventContent={renderEventContent}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SessionsTable />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={tasks}
          eventContent={renderEventContent}
        />
      </div> */}
    </ScreenWrapper>
  );
};

export default Sessions;
