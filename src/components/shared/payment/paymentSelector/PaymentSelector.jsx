import React, { useEffect, useRef, useState } from "react";
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "./styles/styles.css";
const PaymentSelector = () => {
  const swiperRef = useRef();
  const [payType, setPayType] = useState(0);
  const [middlemanPayType, setMiddlemanPayType] = useState(0);

  function handleClick(payType) {
    setPayType(payType);
    if (swiperRef.current) {
      swiperRef.current.slideTo(payType);
    }
  }
  return (
    <div className="payment-selector">
      <div className="select-type flex gap-1.5">
        <button
          type="button"
          className={`${payType == 0 && "active"}`}
          onClick={() => handleClick(0)}
        >
          كامل
        </button>
        <button
          type="button"
          className={`${payType == 1 && "active"}`}
          onClick={() => handleClick(1)}
        >
          دفعات
        </button>
      </div>
      <Swiper
        spaceBetween={0}
        modules={[EffectFade]}
        effect="fade"
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(e) => (swiperRef.current = e)}
      >
        <SwiperSlide>
          <div className="small-inputs">
            {/* contract value !*/}
            <div className="simple-input">
              <label htmlFor="">مبلغ العقد</label>
              <input
                type="text"
                name=""
                id="contractValue"
                // {...register("contractValue", {
                //   required: "يجب ادخال مبلغ العقد",
                // })}
                placeholder="ادخل مبلغ العقد"
              />
              {/* <p className="input-error">{errors.contractValue?.message}</p> */}
            </div>
            {/* middleman percentage !*/}
            <div className="simple-input">
              <label htmlFor="">
                {middlemanPayType == 0 ? "نسبة الوسيط" : "قيمة الوسيط"}
              </label>
              <div className=" relative flex">
                <input
                  type="text"
                  name=""
                  defaultValue={0}
                  id="middlemanPercentage"
                //   {...register("middlemanPercentag", {
                //     required: "يجب ادخال مبلغ العقد",
                //   })}
                  className="!rounded-e-none"
                  placeholder=""
                />
                <select
                  type="text"
                  name=""
                  id="middlemanPayType"
                  className=" !w-20 !rounded-s-none"
                //   {...register("middlemanPayType", {
                //     required: "يجب كتابة عنوان العقد",
                //   })}
                  placeholder=""
                  onChange={(e) => {
                    setMiddlemanPayType(e.target.value);
                  }}
                >
                  <option value="0">نسبة</option>
                  <option value="1">قيمة</option>
                </select>
              </div>
              {/* <p className="input-error">
                {errors.middlemanPercentage?.message}
              </p> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PaymentSelector;
