"use client";
import "./style/sessions.css";
import Link from "next/link";
const Sessions = ({ id }) => {
  return (
    <table className="issue-sessions-table w-full">
      <thead>
        <tr>
          <th>المنفذ</th>
          <th>الجلسات</th>
          <th>رقم القضية</th>
          <th>الوقت</th>
          <th>التاريخ الميلادي</th>
          <th>التاريخ الهجري</th>
          <th>اليوم</th>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 3 }).map((_, index) => (
          <tr key={index}>
            <td>أ. علي العنزي</td>
            <td>يزيد عبدالله الحربي</td>
            <td>4570802222</td>
            <td>08:45:00</td>
            <td>9/4/2024</td>
            <td>1446/03/01</td>
            <td>الأربعاء</td>
            <td>
              <button className="bg-[#048D5A] text-white px-4 py-2 rounded text-sm text-center">
                التفاصيل
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Sessions;
