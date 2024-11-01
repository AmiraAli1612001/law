import React, { useEffect, useRef, useState } from "react";
import DynamicList from "../../dynamicList/DynamicList";
import "./styles/styles.css";
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
const PaymentSelector = ({ className = "" }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [payType, setPayType] = useState(0);
  const [middlemanPayType, setMiddlemanPayType] = useState(0);
  function handleClick(payType) {
    setPayType(payType);
  }
  return (
    <div className={`${className} payment-selector`}>
      {/* nav */}
      <div className="select-type flex mb-4 gap-1.5">
        <h3 className="font-bold text-gray-800">طريقة الدفع: </h3>
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
      {/* sections */}
      <div className="payment-sections">
        {/* full */}
        <section
          className={`${
            payType == 0 && "active"
          } full-payment h-full`}
        >
          <div className="small-inputs !grid-cols-3">
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
            {/* date */}
            <div className="simple-input">
              <label htmlFor="">تاريخ الدفع</label>
              <input
                type="date"
                defaultValue={new Date()}
                name=""
                // {...register("contractValue", {
                //   required: "يجب ادخال مبلغ العقد",
                // })}
                placeholder=""
              />
              {/* <p className="input-error">{errors.contractValue?.message}</p> */}
            </div>
          </div>
        </section>
        {/* payments */}
        <section
          className={`${payType == 1 && "active"} payments h-full `}
        >
          <div>
            <DynamicList title={"الدفعات"}>
              <Payment />
            </DynamicList>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentSelector;
