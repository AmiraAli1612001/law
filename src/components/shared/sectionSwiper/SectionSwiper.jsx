"use client";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { useDispatch } from "react-redux";
import { resetFormState } from "@/globalState/Features/formStateSlice";

const SectionSwiper = ({ sections }) => {
  const [active, setActive] = useState(0);
  const swiperRef = useRef(null);
  const dispatch = useDispatch();

  const swipe = (id) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(id);
    }
  };
  return (
    <div className="custom-swiper-wrapper w-full flex gap-4">
      <nav className="bg-white shadow flex-1 h-fit swiper-nav">
        <ul className="w-full">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`${
                active === index && "active"
              } w-full whitespace-nowrap p-4 font-medium cursor-pointer`}
              onClick={() => {
                dispatch(resetFormState());
                setActive(index);
                swipe(index);
              }}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-[calc(100%-200px)]">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoHeight={true}
          className="w-full"
          allowTouchMove={false}
        >
          {sections.map((section, index) => (
            <SwiperSlide key={index}>
              {
                section.ele
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionSwiper;
