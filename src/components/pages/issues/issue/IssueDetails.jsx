"use client";
import React, { useRef, useState } from "react";
import "./style/issueDetails.css";
import Sessions from "./sessions/Sessions";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const IssueDetails = ({ id }) => {
  const [active, setActive] = useState(0);
  const outerSwiperRef = useRef(null);
  const innnerSwiperRef = useRef(null);
  console.log(active);
  const sections = [
    "موضوع الدعوي",
    "مذكرة الدفاع الاولي",
    "اطراف الدعوي",
    "الجلسات",
    "الاحكام",
    "الطلبات",
    "الاجراءات",
    "القرارات",
    "التكاليف القضائية",
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
                  <div className={!(active === 0) && " !hidden "}>
                    <label htmlFor="">موضوع الدعوي</label>
                    <section name="" disabled id="">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorum eveniet, tempora hic rerum nobis error obcaecati
                      vel enim molestiae, fugit eligendi numquam ad quod magnam
                      atque nam, veniam iste. Quisquam.
                    </section>
                    <label htmlFor="">طلبات المدعي</label>
                    <section name="" disabled id="">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorum eveniet, tempora hic rerum nobis error obcaecati
                      vel enim molestiae, fugit eligendi numquam ad quod magnam
                      atque nam, veniam iste. Quisquam.
                    </section>
                    <label htmlFor="">اسانيد الدعوي</label>
                    <section name="" disabled id="">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorum eveniet, tempora hic rerum nobis error obcaecati
                      vel enim molestiae, fugit eligendi numquam ad quod magnam
                      atque nam, veniam iste. Quisquam.
                    </section>
                  </div>
                </SwiperSlide>
                {/* مذكرة الدفاع الاولي */}
                <SwiperSlide>Slide 2</SwiperSlide>
                {/* اطراف الدعوي */}
                <SwiperSlide>Slide 2</SwiperSlide>
                {/* الجلسات */}
                <SwiperSlide><Sessions id={id} /></SwiperSlide>
                {/* الاحكام */}
                <SwiperSlide>Slide 2</SwiperSlide>
                {/* الطلبات */}
                <SwiperSlide>Slide 2</SwiperSlide>
                {/* الاجراءات */}
                <SwiperSlide>Slide 2</SwiperSlide>
                {/* القرارات */}
                <SwiperSlide>Slide 2</SwiperSlide>
                {/* التكاليف القضائية */}
                <SwiperSlide>Slide 2</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default IssueDetails;

