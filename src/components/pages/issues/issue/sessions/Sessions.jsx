"use client";
import { toggleAttachmentsPopup } from "@/globalState/Features/popupsSlice";
// import "./style/sessions.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
const Sessions = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col">
      <table className="simple-table">
        <thead>
          <tr>
            <th>المنفذ</th>
            <th>الجلسات</th>
            {/* <th>رقم القضية</th> */}
            <th>الوقت</th>
            <th>التاريخ الميلادي</th>
            <th>التاريخ الهجري</th>
            <th>اليوم</th>
            <th>الحالة</th>
            <th>ملف ضبط الجلسة</th>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 1 }).map((_, index) => (
            <tr key={index}>
              <td>أ. علي العنزي</td>
              <td>يزيد عبدالله الحربي</td>
              {/* 2 */}
              {/* <td>4570802222</td> */}
              <td>08:45:00</td>
              {/* 4 */}
              <td>9/4/2024</td>
              <td>1446/03/01</td>
              {/* 6 */}
              <td>الأربعاء</td>
              <td>تم التنفيذ</td>
              <td>
                <button
                  onClick={() => dispatch(toggleAttachmentsPopup())}
                  className="bg-textGreen w-fit hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
                >
                  عرض
                </button>
              </td>
              <td>
                <Link
                  href={`/issues/${id}/sessions/${index}`}
                  className="bg-[#048D5A] text-white px-4 py-2 rounded text-sm text-center"
                >
                  التفاصيل
                </Link>
              </td>
            </tr>
          ))}
          <tr key={"ranya1"}>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            {/* 3 */}
            {/* <td>
              <input type="text" />
            </td> */}
            <td>
              <input type="text" />
            </td>
            {/* 5 */}
            <td>
              <input type="date" className="!w-fit" />
            </td>
            <td>
              <input type="date" className="!w-fit" />
            </td>
            {/* 7 */}
            <td>
              <input type="text" />
            </td>
            {/* 7 */}
            <td>
              <select name="" id="">
                <option value="">منتهية</option>
                <option value="">غير منتهية</option>
              </select>
            </td>
            {/* 7 */}
            <td>
              <button className="bg-textGreen hover:bg-opacity-55 transition-all cursor-pointer overflow-hidden text-white px-4 py-2 rounded text-sm text-center relative">
                <span className="">اضافة</span>
                <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-0" />
              </button>
            </td>
            <td>
              <button className="bg-textGreen hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                اضافة
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
        اضافة
      </button> */}
    </div>
  );
};

export default Sessions;
