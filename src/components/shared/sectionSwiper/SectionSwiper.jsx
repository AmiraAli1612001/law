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
  const innnerSwiperRef = useRef(null);
  const dispatch = useDispatch();

  //   const sections = [
  //     "جزائية",
  //     "عامة",
  //     "عمالية",
  //     "إنهاءات",
  //     "لجان",
  //     "تراضي",
  //     "ودي",
  //     "ديوان المظالم",
  //   ];

  const swipe = (id) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(id);
    }
  };
  return (
    <div className="custom-swiper-wrapper flex">
      <nav className="bg-white drop-shadow flex-1 h-fit swiper-nav">
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
              {section}
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-[calc(100%-176px)]">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full"
          allowTouchMove={false}
        >
          {sections.map((section, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 simple-div">
                <label htmlFor="">بند 1</label>
                <section>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae veritatis ipsum suscipit recusandae consequatur veniam
                  quo fugit dicta rerum commodi quaerat, libero maxime saepe
                  voluptates inventore laboriosam nihil fuga rem!
                </section>
                <label htmlFor="">بند 2</label>
                <section>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae veritatis ipsum suscipit recusandae consequatur veniam
                  quo fugit dicta rerum commodi quaerat, libero maxime saepe
                  voluptates inventore laboriosam nihil fuga rem!
                </section>
                <label htmlFor="">بند 3</label>
                <section>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae veritatis ipsum suscipit recusandae consequatur veniam
                  quo fugit dicta rerum commodi quaerat, libero maxime saepe
                  voluptates inventore laboriosam nihil fuga rem!
                </section>
                <label htmlFor="">بند 4</label>
                <section>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae veritatis ipsum suscipit recusandae consequatur veniam
                  quo fugit dicta rerum commodi quaerat, libero maxime saepe
                  voluptates inventore laboriosam nihil fuga rem!
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionSwiper;
