"use client";
import React, { useRef, useState } from "react";
import "./styles/contractDetails.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Parties from "./parties/Parties";
import Clauses from "./clauses/Clauses";
import Finance from "./finance/Finance";
import { togglePrintContractPopup } from "@/globalState/Features/popupsSlice";
import { useDispatch } from "react-redux";

const ContractDetails = ({ id, contractData }) => {
  const [active, setActive] = useState(0);
  const outerSwiperRef = useRef(null);
  const innnerSwiperRef = useRef(null);
  const dispatch = useDispatch();
  const sections = [
    "موضوع العقد",
    "الاطراف",
    "البنود",
    "معلومات اضافية",
    "المالية",
    // "المرفقات",
    "طباعة العقد",
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
    <div className="contract-details flex">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (outerSwiperRef.current = swiper)}
        className="w-full"
        allowTouchMove={false}
      >
        <SwiperSlide className="w-auto">
          <div className="contract-details flex w-full">
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
            <div className="contract-sections-details w-[calc(100%-160px)]">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => (innnerSwiperRef.current = swiper)}
                className="w-full overflow-hidden [&>*>*.swiper-slide]:p-4"
                allowTouchMove={false}
              >
                {/* موضوع العقد*/}
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
                {/* الاطراف*/}
                <SwiperSlide>
                  <Parties />
                </SwiperSlide>
                {/* البنود*/}
                <SwiperSlide>
                  <Clauses />
                </SwiperSlide>
                {/* معلومات اضافية */}
                <SwiperSlide>
                  <div>
                    <label htmlFor="">معلومات اضافية</label>
                    <section name="" disabled id="">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorum eveniet, tempora hic rerum nobis error obcaecati
                      vel enim molestiae, fugit eligendi numquam ad quod magnam
                      atque nam, veniam iste. Quisquam.
                    </section>
                  </div>
                </SwiperSlide>
                {/*المالية */}
                <SwiperSlide>
                  <Finance contract={contractData} />
                </SwiperSlide>
                {/* المرفقات*/}
                {/* <SwiperSlide>Slide 2</SwiperSlide> */}
                {/* طباعة العقد */}
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

export default ContractDetails;
