"use client";
import React, { useRef } from "react";
import ContractsTable from "./ContractsTable";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ContractDetails from "./contractDetails/ContractDetails";
const ContractsWrapper = () => {
  const swiperRef = useRef(null);

  const swipe = (id) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(id);
    }
  };
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => swiperRef.current = swiper}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <ContractsTable swipe={swipe} />
        </SwiperSlide>
        <SwiperSlide>
          <ContractDetails swipe={swipe} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ContractsWrapper;
