import React from "react";

const Appointments = ({ defendant, prosecutor }) => {
  const sectionStyles = { width: "100%" , display: "flex", flexDirection: "column", gap: "8px"};
  return (
    <div className="flex flex-col gap-4">
      <section style={sectionStyles}>
        <h3>موعد انتهاء المدة الاعتراضية للاستئناف</h3>
        <table className="simple-table">
          <tbody>
            <tr>
              <td>2024-10-10</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section style={sectionStyles}>
        <h3>تسجيل التواريخ</h3>
        <table className="simple-table">
          <thead>
            <tr>
              <th>تاريخ النقد</th>
              <th>الاستئناف</th>
              <th>الاعتراض</th>
              <th>الحكم</th>
              <th>والانتهاء</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-10-10</td>
              <td>علي عبدالله</td>
              <td>يزيد عبدالله الحربي</td>
              <td>غير محدد</td>
              <td>08:45:00</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Appointments;
