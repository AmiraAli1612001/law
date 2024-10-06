import React from "react";
import "./style/details.css";
const Details = () => {
  return (
    <div className="flex justify-between employee-details gap-4">
      <div className="flex flex-wrap flex-1">
        {/* name */}
        <div className="input">
          <label htmlFor="employeeName">اسم الموظف</label>
          <input
            type="text"
            id="employeeName"
            defaultValue={"محمد احمد محمد"}
          />
        </div>
        {/* job */}
        <div className="input">
          <label htmlFor="jobTitle">الوظيفة</label>
          <input type="text" id="jobTitle" defaultValue={"محامي"} />
        </div>
        {/* department */}
        <div className="input">
          <label htmlFor="department">القسم</label>
          <input type="text" id="department" defaultValue={"القضاء"} />
        </div>
        {/* status */}
        <div className="input">
          <label htmlFor="status">الحالة</label>
          <input type="text" id="status" defaultValue={"فعال"} />
        </div>
        {/* work hours */}
        <div className="input">
          <label htmlFor="work">ساعات العمل</label>
          <input type="text" id="work" defaultValue={"8"} />
        </div>
        {/* loans */}
        <div className="input">
          <label htmlFor="loans">اجمالي عدد القروض</label>
          <input type="text" id="loans" defaultValue={"2"} />
        </div>
        {/* salary */}
        <div className="input">
          <label htmlFor="salary">الراتب بالريال</label>
          <input type="text" id="salary" defaultValue={"2000"} />
        </div>
        {/* hiring date */}
        <div className="input">
          <label htmlFor="hiringDate">تاريخ التعيين</label>
          <input type="date" id="hiringDate" defaultValue={"2022-01-01"} />
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
