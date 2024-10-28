"use client";
import React, { useRef, useState } from "react";
import "./styles/contractDetails.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import {
  toggleAttachmentsPopup,
  togglePrintContractPopup,
} from "@/globalState/Features/popupsSlice";
import { useDispatch } from "react-redux";
import Finance from "../../contracts/contractDetails/finance/Finance";
import ContractsTable from "../../contracts/ContractsTable";

const ClientDetails = ({ id, contractData }) => {
  const [active, setActive] = useState(0);
  const outerSwiperRef = useRef(null);
  const innnerSwiperRef = useRef(null);
  const dispatch = useDispatch();
  const sections = ["معلومات العميل", "العقود", "المالية", "المرفقات"];

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
                  <div className="flex flex-col gap-4">
                    <div className={`small-inputs !grid-cols-3`}>
                      {/* name arabic ! */}
                      <div className="simple-input">
                        <label htmlFor="">الاسم الرباعي باللغة العربية</label>
                        <input
                          type="text"
                          name=""
                          id="arabicName"
                          placeholder=""
                        />
                        
                      </div>
                      {/* name english ! */}
                      <div className="simple-input">
                        <label htmlFor="">
                          الاسم الرباعي باللغة الانجليزية
                        </label>
                        <input
                          type="text"
                          name=""
                          id="englishName"
                          
                          placeholder=""
                        />
                        
                      </div>
                      {/* email! */}
                      <div className="simple-input">
                        <label htmlFor="">البريد الالكتروني</label>
                        <input
                          type="email"
                          name=""
                          id="email"
                          
                          placeholder=""
                        />
                        
                      </div>
                      {/* phone ! */}
                      <div className="simple-input">
                        <label htmlFor="">رقم الهاتف</label>
                        <input
                          type="text"
                          name=""
                          id="phone"
                          
                          placeholder=""
                        />
                       
                      </div>
                      {/* idNumber ! */}
                      <div className="simple-input">
                        <label htmlFor="">رقم الهوية</label>
                        <input
                          type="text"
                          name=""
                          id="idNumber"
                          
                          placeholder=""
                        />
                        
                      </div>
                      {/* idNumber end date ! */}
                      <div className="simple-input">
                        <label htmlFor="">تاريخ انتهاء الهوية</label>
                        <input
                          type="date"
                          name=""
                          id="idNumberEndDate"
                          
                          placeholder=""
                        />
                        
                      </div>
                      {/* nationality !*/}
                      <div className="simple-input">
                        <label htmlFor="">الجنسية</label>
                        <input
                          type="text"
                          name=""
                          id="nationality"
                          
                          placeholder=""
                        />
                        
                      </div>
                      {/* gender !*/}
                      <div className="simple-input">
                        <label htmlFor="">الجنس</label>
                        <select
                          type="text"
                          name=""
                          id="gender"
                          
                          placeholder=""
                        >
                          <option value="male">ذكر</option>
                          <option value="female">انثى</option>
                        </select>
                       
                      </div>
                      {/* social status !*/}
                      <div className="simple-input">
                        <label htmlFor="">الحالة الاجتماعية</label>
                        <select
                          type="text"
                          name=""
                          id="socialStatus"
                          
                          placeholder=""
                        >
                          <option value="single">اعزب\عزباء</option>
                          <option value="married">متزوج\ة</option>
                          <option value="divorced">مطلق\ة</option>
                        </select>
                        
                      </div>
                      {/* workPlace !*/}
                      <div className="simple-input">
                        <label htmlFor="">موقع العمل</label>
                        <input
                          type="text"
                          name=""
                          id="workPlace"
                          
                          placeholder=""
                        />
                        
                      </div>
                      {/* residenceJob !*/}
                      <div className="simple-input">
                        <label htmlFor="">المهنة في الإقامة</label>
                        <input
                          type="text"
                          name=""
                          id="residenceJob"
                          
                          placeholder=""
                        />
                        
                      </div>
                    </div>
                    <div className="simple-div">
                      <label htmlFor="">معلموات اضافية</label>
                      <section name="" disabled id="">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dolorum eveniet, tempora hic rerum nobis error
                        obcaecati vel enim molestiae, fugit eligendi numquam ad
                        quod magnam atque nam, veniam iste. Quisquam.
                      </section>
                    </div>
                  </div>
                </SwiperSlide>
                {/* العقود */}
                <SwiperSlide>
                  <ContractsTable />
                </SwiperSlide>
                {/*المالية */}
                <SwiperSlide>
                  <Finance contract={contractData} />
                </SwiperSlide>
                {/* المرفقات*/}
                <SwiperSlide>
                  <div className="attachments !grid lg:grid-cols-2 gap-4">
                    <div className="simple-div">
                      <label htmlFor="">مرفقات العقد</label>
                      <section>
                        <button
                          onClick={() => dispatch(toggleAttachmentsPopup())}
                        >
                          مرفق 1
                        </button>
                      </section>
                    </div>
                    <div className="simple-div">
                      <label htmlFor="">مرفقات القضية</label>
                      <section>
                        <button
                          onClick={() => dispatch(toggleAttachmentsPopup())}
                        >
                          مرفق 1
                        </button>
                      </section>
                    </div>
                    <div className="simple-div">
                      <label htmlFor="">مرفقات الجلسات</label>
                      <section>
                        <button
                          onClick={() => dispatch(toggleAttachmentsPopup())}
                        >
                          مرفق 1
                        </button>
                      </section>
                    </div>
                    <div className="simple-div">
                      <label htmlFor="">مرفقات المهمات</label>
                      <section>
                        <button
                          onClick={() => dispatch(toggleAttachmentsPopup())}
                        >
                          مرفق 1
                        </button>
                      </section>
                    </div>
                    <div className="simple-div">
                      <label htmlFor="">مرفقات الميداني</label>
                      <section>
                        <button
                          onClick={() => dispatch(toggleAttachmentsPopup())}
                        >
                          مرفق 1
                        </button>
                      </section>
                    </div>
                  </div>
                  {/* <embed src="/files/عقد عميل.pdf" className="w-full min-h-screen" /> */}
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

export default ClientDetails;
