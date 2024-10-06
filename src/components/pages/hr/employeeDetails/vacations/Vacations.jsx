import React from "react";

const Vacations = () => {
  return (
    <div>
      <table className="simple-table">
        <thead>
          <tr>
            <th>الرقم</th>
            <th>من</th>
            <th>الي</th>
            <th>الحالة</th>
            <th>الملاحظات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2024-10-10</td>
            <td>2024-10-12</td>
            <td>مقبولة</td>
            <td>لا يوجد</td>
          </tr>
          <tr className="absent">
            <td>2</td>
            <td>2024-10-13</td>
            <td>2024-10-14</td>
            <td>غير مقبولة</td>
            <td>لا يوجد</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Vacations;
