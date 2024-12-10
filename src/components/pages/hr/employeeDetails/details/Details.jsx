"use client";
import React, { useEffect, useState } from "react";
import "./style/details.css";
import { useSelector } from "react-redux";
const Details = () => {
  const {
    fullNameArabic,
    departmentName,
    email,
    jobTitle,
    employeeStatusName,
    workingHours,
    loanCount,
    hiringDate,
    residenceProfessionId = 0,
  } = useSelector((state) => state.tempData?.employeeDetails);
// const employeeDetails = useSelector((state) => state.tempData?.employeeDetails);
  // const [selectedJobId, setSelectedJobId] = useState("");
  console.log(workingHours);
  // Update the state when the fetchedJobId changes

  // const handleChange = (e) => {
  //   setSelectedJobId(e.target.value); // Update state on user selection
  // };

  // useEffect(() => {
  //   setSelectedJobId(residenceProfessionId); // Set the value from the backend
  // }, [residenceProfessionId]);
  return (
    <div className="flex justify-between employee-details gap-4">
      <div className="flex flex-wrap flex-1">
        {/* name */}
        <div className="simple-input">
          <label htmlFor="employeeName">اسم الموظف</label>
          <input type="text" id="employeeName" defaultValue={fullNameArabic} />
        </div>
        {/* job */}
        <div className="simple-input">
          <label htmlFor="jobTitle">الوظيفة</label>

          <select defaultValue={residenceProfessionId} 
          // onChange={handleChange}
          >
            <option value="0" className="hidden">
              اختر الوظيفة
            </option>
            <option value="1">موظف</option>
            <option value="2">محامي</option>
            <option value="3">مدير</option>
          </select>
        </div>
        {/* department */}
        <div className="simple-input">
          <label htmlFor="department">القسم</label>
          <input type="text" id="department" defaultValue={departmentName} />
        </div>
        {/* status */}
        <div className="simple-input">
          <label htmlFor="status">الحالة</label>
          <input type="text" id="status" defaultValue={employeeStatusName} />
        </div>
        {/* work hours */}
        <div className="simple-input">
          <label htmlFor="workHours">ساعات العمل</label>
          <input type="text" id="workHours" defaultValue={workingHours} />
        </div>
        {/* loans */}
        <div className="simple-input">
          <label htmlFor="loans">اجمالي عدد القروض</label>
          <input type="text" id="loans" defaultValue={loanCount} />
        </div>
        {/* salary */}
        {/* <div className="input">
          <label htmlFor="salary">الراتب بالريال</label>
          <input type="text" id="salary" defaultValue={"2000"} />
        </div> */}
        {/* hiring date */}
        <div className="simple-input">
          <label htmlFor="hiringDate">تاريخ التعيين</label>
          <input
            type="date"
            id="hiringDate"
            defaultValue={hiringDate.split("T")[0]}
          />
        </div>
      </div>
      <div className="w-40 h-40 rounded-full overflow-hidden">
        <img
          className="w-full"
          src="/images/placeholders/users/user.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Details;
