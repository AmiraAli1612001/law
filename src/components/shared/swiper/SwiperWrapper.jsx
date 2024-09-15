"use client";
import React from "react";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const SwiperWrapper = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      // loop={true}
      // breakpoints={{
      //   640: {
      //     slidesPerView: 2,
      //     loop: data.length >= 4,
      //   },
      //   1024: {
      //     slidesPerView: 3,
      //     loop: data.length >= 6,
      //   },
      // }}
      autoplay={{ delay: 1000 }}
    >
      <SwiperSlide key={"partnerCard-"}>swiper ele</SwiperSlide>
    </Swiper>
  );
};

export default SwiperWrapper;
