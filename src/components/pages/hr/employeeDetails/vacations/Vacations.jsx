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
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2024-10-10</td>
            <td>2024-10-12</td>
            <td>مقبولة</td>
            <td>لا يوجد</td>
            <td>
              <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                تعديل
              </button>
            </td>
          </tr>
          <tr className="absent">
            <td>2</td>
            <td>2024-10-13</td>
            <td>2024-10-14</td>
            <td>غير مقبولة</td>
            <td>لا يوجد</td>
            <td>
              <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all text-white px-4 py-2 rounded text-sm text-center">
                تعديل
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Vacations;
