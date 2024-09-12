import React from "react";

const Appointments = () => {
  return (
    <div className="bg-bgGray p-4 rounded-2xl h-full">
      <div className="flex items-center justify-between">
        <h4>التقويم العدلي</h4>
        <div>
          <p>اتسخدم التقويم الميلادي</p>
        </div>
      </div>
      <div className="bg-white p-4 mt-4 rounded">
        <h4>المواعيد المتستقبلية</h4>
        <ul>
          <li>
            <div>
              <h5>جلسة مرافعة</h5>
              <span>12:00 am</span>
            </div>
            <div>
              <p>رقم القضية: 141414</p>
              <p>المحكمة الجزائية بالدمام</p>
            </div>
            <button className="bg-[#048D5A] text-white px-4 py-2 rounded">تسجيل حضور الجلسة</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Appointments;
