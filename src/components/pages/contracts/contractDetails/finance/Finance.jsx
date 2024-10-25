"use client";
import "./finance.css";
import React from "react";
import { useSelector } from "react-redux";

const Finance = ({ contract }) => {
  // {
  //   "id": 49,
  //   "title": "عقد خدمات",
  //   "firstParty": "Giacopo Simoncello",
  //   "secondParty": "Cirillo Eadmeads",
  //   "date": "2024/02/04",
  //   "status": "إصدار",
  //   "classification": "معتمد",
  //   "price": 1127,
  //   "tax": false,
  //   "costs": 427,
  //   "pricePlan": "دفعات",
  //   "middleMan": 65
  // }
  const contractInitialPrice = contract?.tax
    ? contract?.price - contract?.price * 0.15
    : contract?.price;
  const finalCost =
    contractInitialPrice -
    (contract?.costs + (contract?.middleMan / 100) * contractInitialPrice);
  return (
    <div className="contract-finance">
      <div className="simple-div">
        <label>مبلغ العقد</label>
        <section>
          <span>
            <span className="text-green-700">{contractInitialPrice}</span>{" "}
            <span className="text-base">ريال سعودي</span>
          </span>
          <span className="text-xs text-rose-500 font-bold">
            {" "}
            ({contract?.tax ? "شامل ضريبة 15%" : "غير شامل الضريبة"})
          </span>
        </section>
      </div>

      <div className="simple-div">
        <label>نوع الدفع</label>
        <section>{contract?.pricePlan}</section>
      </div>

      <div className="simple-div">
        <label>الخصومات</label>
        <section>
          <ul>
            <li>
              <span>نسبة الوسيط:</span>
              <span className="text-rose-500">{contract?.middleMan}%</span>
            </li>
            <li>
              <span>التكاليف:</span>
              <span className="text-rose-500">
                {contract?.costs} ريال سعودي
              </span>
            </li>
          </ul>
        </section>
      </div>

      <div className="simple-div">
        <label>قيمة العقد بعد الخصومات</label>
        <section>
          <span className="text-green-700">{finalCost.toFixed(2)}</span>{" "}
          <span className="text-base">ريال سعودي</span>
        </section>
      </div>
    </div>
  );
};

export default Finance;
