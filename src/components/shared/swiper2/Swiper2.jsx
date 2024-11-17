import React, { useEffect, useRef, useState } from "react";
import DynamicList from "../dynamicList/DynamicList";
import "./styles/styles.css";
import PersonSelector from "../personSelector/PersonSelector";
const Payment = () => {
  const [paymentType, setPaymentType] = useState(0);
  return (
    <div
      className={`${
        paymentType == 0 ? "!grid-cols-3" : "!grid-cols-4"
      } small-inputs `}
    >
      {/* payment payment attachment !*/}
      <div className="simple-input">
        <select
          type="text"
          name=""
          id="contractValue"
          // {...register("contractValue", {
          //   required: "يجب ادخال مبلغ العقد",
          // })}
          placeholder="ادخل مبلغ العقد"
          onChange={(e) => {
            setPaymentType(e.target.value);
          }}
        >
          <option value="0">بتاريخ محدد</option>
          <option value="1">بصدور حكم</option>
        </select>
        {/* <p className="input-error">{errors.contractValue?.message}</p> */}
      </div>
      {/* value */}
      {paymentType == 0 ? (
        <>
          <div className="simple-input">
            <input
              type="date"
              defaultValue={new Date().toISOString().slice(0, 10)}
              name=""
              // {...register("contractValue", {
              //   required: "يجب ادخال مبلغ العقد",
              // })}
            />
            {/* <p className="input-error">{errors.contractValue?.message}</p> */}
          </div>
          <div className="simple-input">
            <input
              type="text"
              name=""
              id="contractValue"
              // {...register("contractValue", {
              //   required: "يجب ادخال مبلغ العقد",
              // })}
              placeholder="مبلغ الدفعة المستحقة"
            />
            {/* <p className="input-error">{errors.contractValue?.message}</p> */}
          </div>
        </>
      ) : (
        <>
          <div className="simple-input">
            <input
              type="date"
              defaultValue={new Date().toISOString().slice(0, 10)}
              name=""
              // {...register("contractValue", {
              //   required: "يجب ادخال مبلغ العقد",
              // })}
              placeholder="تاريخ صدور الحكم"
            />
            {/* <p className="input-error">{errors.contractValue?.message}</p> */}
          </div>
          {/* 7okm */}
          <div className="simple-input">
            <select
              type="text"
              name=""
              // id="contractValue"
              // {...register("contractValue", {
              //   required: "يجب ادخال مبلغ العقد",
              // })}
            >
              <option value="">اختر الحكم</option>
              <option value="0">حكم 1</option>
              <option value="1">حكم 2</option>
            </select>
          </div>
          <div className="simple-input">
            <input
              type="text"
              name=""
              id="contractValue"
              // {...register("contractValue", {
              //   required: "يجب ادخال مبلغ العقد",
              // })}
              placeholder="مبلغ الدفعة المستحقة"
            />
            {/* <p className="input-error">{errors.contractValue?.message}</p> */}
          </div>
        </>
      )}
    </div>
  );
};
const Swiper2 = ({ className = "", tempType = 1 }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [payType, setPayType] = useState(0);
  const [middlemanPayType, setMiddlemanPayType] = useState(0);
  function handleClick(payType) {
    setPayType(payType);
  }
  return (
    <div className={`${className} payment-selector main-section`}>
      {/* nav */}
      <div className="select-type flex mb-4 gap-1.5">
        <h3 className="font-bold text-gray-800">الارتباط بقضية: </h3>
        <button
          type="button"
          className={`${payType == 0 && "active"}`}
          onClick={() => handleClick(0)}
        >
          مرتبط
        </button>
        <button
          type="button"
          className={`${payType == 1 && "active"}`}
          onClick={() => handleClick(1)}
        >
          غير مرتبط
        </button>
      </div>
      {/* sections */}
      <div className="payment-sections ">
        {/* full */}
        <section className={`${payType == 0 && "active"} full-payment h-full`}>
          <DynamicList title={"القضية"}>
            <PersonSelector filterArr={[{ name: "الرقم", value: "id" }]} />
          </DynamicList>
        </section>
        {/* payments */}
        <section
          className={`${
            payType == 1 && tempType == 1 && "active"
          } payments h-full `}
        >
          <div>
            <DynamicList title={"العقد"}>
              <PersonSelector filterArr={[{ name: "الرقم", value: "id" }]} />
            </DynamicList>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Swiper2;
