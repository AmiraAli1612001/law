"use client"
import React, { useState } from "react";
import "./style/issueDetails.css";

const IssueDetails = () => {
  const [active, setActive] = useState(0);
  const sections = [
    "موضوع الدعوي",
    "مذكرة الدفاع الاولي",
    "اطراف الدعوي",
    "الجلسات",
    "الاحكام",
    "الطلبات",
    "الاجراءات",
    "القرارات",
    "التكاليف القضائية",
  ];
  return (
    <div className="issue-details flex">
      <nav className="bg-white drop-shadow w-max h-fit">
        <ul>
          {sections.map((section, index) => (
            <li key={index} onClick={() => setActive(index)}>
              {section}
            </li>
          ))}
        </ul>
      </nav>
      <div className="issue-sections-details flex-1">
        <ul>
          {/* موضوع الدعوي */}
          <li className={!(active === 0) && " !hidden "}>

            <label htmlFor="">موضوع الدعوي</label>
            <textarea name="" disabled id="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              eveniet, tempora hic rerum nobis error obcaecati vel enim
              molestiae, fugit eligendi numquam ad quod magnam atque nam, veniam
              iste. Quisquam.
            </textarea>
            <label htmlFor="">طلبات المدعي</label>
            <textarea name="" disabled id="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              eveniet, tempora hic rerum nobis error obcaecati vel enim
              molestiae, fugit eligendi numquam ad quod magnam atque nam, veniam
              iste. Quisquam.
            </textarea>
            <label htmlFor="">اسانيد الدعوي</label>
            <textarea name="" disabled id="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              eveniet, tempora hic rerum nobis error obcaecati vel enim
              molestiae, fugit eligendi numquam ad quod magnam atque nam, veniam
              iste. Quisquam.
            </textarea>
          </li>
          {/* مذكرة الدفاع الاولي */}
          <li className={!(active === 1) && " !hidden "}>2</li>
          {/* اطراف الدعوي */}
          <li className={!(active === 2) && " !hidden "}>3</li>
          {/* الجلسات */}
          <li className={!(active === 3) && " !hidden "}>4</li>
          {/* الاحكام */}
          <li className={!(active === 4) && " !hidden "}>5</li>
          {/* الطلبات */}
          <li className={!(active === 5) && " !hidden "}>6</li>
          {/* الاجراءات */}
          <li className={!(active === 6) && " !hidden "}>7</li>
          {/* القرارات */}
          <li className={!(active === 7) && " !hidden "}>8</li>
          {/* التكاليف القضائية */}
          <li className={!(active === 8) && " !hidden "}>9</li>
        </ul>
      </div>
    </div>
  );
};

export default IssueDetails;
