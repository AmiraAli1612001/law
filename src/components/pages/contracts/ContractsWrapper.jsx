"use client";
import React from "react";
import ContractsTable from "./ContractsTable";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ContractDetails from "./contractDetails/ContractDetails";
const ContractsWrapper = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ContractsTable />
        </SwiperSlide>
        <SwiperSlide>
          <ContractDetails />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ContractsWrapper;
