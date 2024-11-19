import React, { useState } from "react";
import PersonSelector from "../../personSelector/PersonSelector";
import DynamicList from "../../dynamicList/DynamicList";

const DynamicStatements = () => {
  const statements = [
    [
      "جزائية - بند - 1",
      "جزائية - بند - 2",
      "جزائية - بند - 3",
      "جزائية - بند - 4",
      "جزائية - بند - 5",
    ],
    [
      "عامة - بند - 1",
      "عامة - بند - 2",
      "عامة - بند - 3",
      "عامة - بند - 4",
      "عامة - بند - 5",
    ],
    [
      "عمالية - بند - 1",
      "عمالية - بند - 2",
      "عمالية - بند - 3",
      "عمالية - بند - 4",
      "عمالية - بند - 5",
    ],
    [
      "انهاءات - بند - 1",
      "انهاءات - بند - 2",
      "انهاءات - بند - 3",
      "انهاءات - بند - 4",
      "انهاءات - بند - 5",
    ],
    [
      "لجان - بند - 1",
      "لجان - بند - 2",
      "لجان - بند - 3",
      "لجان - بند - 4",
      "لجان - بند - 5",
    ],
    [
      "تراضي - بند - 1",
      "تراضي - بند - 2",
      "تراضي - بند - 3",
      "تراضي - بند - 4",
      "تراضي - بند - 5",
    ],
    [
      "ودي - بند - 1",
      "ودي - بند - 2",
      "ودي - بند - 3",
      "ودي - بند - 4",
      "ودي - بند - 5",
    ],
    [
      "ديوان المظالم - بند - 1",
      "ديوان المظالم - بند - 2",
      "ديوان المظالم - بند - 3",
      "ديوان المظالم - بند - 4",
      "ديوان المظالم - بند - 5",
    ],
  ];
  const [currentStatements, setCurrentStatements] = useState(statements[0]);
  const issueTypes = [
    "جزائية",
    "عامة",
    "عمالية",
    "إنهاءات",
    "لجان",
    "تراضي",
    "ودي",
    "ديوان المظالم",
  ];
  const issuesSubTypes = [
    "احتيال مالي",
    "أجرة مثل",
    "تحرش وقذف",
    "تصوير",
    "تهديد بالقتل",
    "جنائية",
    "رد عين",
    "فسخ عقد نكاح",
    "فعل ضار",
    "نفقة ماضية",
  ];
  const issueStatus = [
    "قيد الدراسة",
    "قيد النظر",
    "قيد التحقيق",
    "جديدة",
    "محكوم بها حكم قطعي",
    "محكوم بها حكم غير قطعي",
  ];
  return (
    <div>
      {/* issue details */}
      <div className="small-inputs main-section">
        {/* status !*/}
        <div className="simple-input">
          <label htmlFor="">حالة القضية</label>
          <select
            type="text"
            name=""
            id="arabicName"
            // {...register("arabicName", {
            //   required: "يجب كتابة الاسم الرباعي بالعربي",
            // })}
            placeholder=""
          >
            {issueStatus.map((status, index) => {
              return (
                <option key={index} value={status}>
                  {status}
                </option>
              );
            })}
          </select>
          {/* <p className="input-error">{errors.arabicName?.message}</p> */}
        </div>
        {/* date !*/}
        <div className="simple-input">
          <label htmlFor="">تاريخ القضية</label>
          <input
            type="date"
            name=""
            id="arabicName"
            // {...register("arabicName", {
            //   required: "يجب كتابة الاسم الرباعي بالعربي",
            // })}
            placeholder=""
          />
          {/* <p className="input-error">{errors.arabicName?.message}</p> */}
        </div>
        {/* type !*/}
        <div className="simple-input">
          <label htmlFor="">نوع/تصنيف القضية</label>
          <select
            type="text"
            name=""
            id="arabicName"
            // {...register("arabicName", {
            //   required: "يجب كتابة الاسم الرباعي بالعربي",
            // })}
            placeholder=""
            onChange={(e) => setCurrentStatements(statements[e.target.value])}
          >
            {issueTypes.map((issueType, index) => {
              return (
                <option
                  key={index}
                  value={index}
                >
                  {issueType}
                </option>
              );
            })}
          </select>
          {/* <p className="input-error">{errors.arabicName?.message}</p> */}
        </div>
        {/* sub type !*/}
        <div className="simple-input">
          <label htmlFor="">التصنيف الفرعي</label>
          <select
            type="text"
            name=""
            id="arabicName"
            // {...register("arabicName", {
            //   required: "يجب كتابة الاسم الرباعي بالعربي",
            // })}
            placeholder=""
          >
            {issuesSubTypes.map((subType, index) => {
              return (
                <option key={index} value={subType}>
                  {subType}
                </option>
              );
            })}
          </select>
          {/* <p className="input-error">{errors.arabicName?.message}</p> */}
        </div>
      </div>
      {/* add contracts */}
      <div className="main-section mt-4">
        <DynamicList
          title={"البنود"}
        //   recordType={"addContract"}
          btnTitle={"اضافة بند"}
        >
          <PersonSelector data={currentStatements}/>
        </DynamicList>
      </div>
    </div>
  );
};

export default DynamicStatements;
