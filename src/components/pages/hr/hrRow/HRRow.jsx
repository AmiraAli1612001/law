import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js";
import { Line } from "react-chartjs-2";
import {
  toggleAddRecordPopup,
  toggleEditEmployee,
} from "@/globalState/Features/popupsSlice";
import { useDispatch } from "react-redux";
import EmployeeStatistics from "@/components/statistics/EmployeeStatistics";
import Link from "next/link";
import { deleteRecord } from "@/helperFunctions/dom";
const HRRow = ({
  data: {
    id,
    name,
    title,
    department,
    status: status2,
    vacations,
    work,
    loans,
    salary,
  },
}) => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  // console.log(data)
  // const cellStyles =;
  //bg-[#FAF9F4]
  return (
    <div className="hr-row-custom-wrapper">
      <div
        className={`bg-bgGreen flex gap-2 p-4 items-center HR-row rounded-lg relative border drop-shadow-sm`}
      >
        <div className={`w-[10%]`}>
          <p className="text-base ">{id}</p>
        </div>
        <div className="row-data-content">
          <Link href={`/hr/${1}`} className="underline">{name}</Link>
        </div>
        <div className="row-data-content">
          <p className="">{title}</p>
        </div>
        <div className="row-data-content">
          <p className="">{department}</p>
        </div>
        <div className="row-data-content">
          <p className="">{status2 == 1 ? "مفعل" : "غير مفعل"}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Link
            href={`/hr/${1}`}
            className="bg-textGreen bg-opacity-90 hover:bg-opacity-65 transition-all text-white px-4 py-2 rounded text-sm"
            // onClick={() => setState(!state)}
          >
            التفاصيل
          </Link>
          <button
            className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all text-white px-4 py-2 rounded text-sm"
            // onClick={() => dispatch(toggleEditEmployee(id))}
            // onClick={() => dispatch(toggleAddRecordPopup(""))}
            onClick={(e)=>deleteRecord(e,".hr-row-custom-wrapper")}
          >
            حذف
          </button>
        </div>
      </div>
      <div
        className={`${
          state ? "p-4" : "overflow-hidden max-h-0"
        } flex gap-4 HR-row-details transition-all`}
      >
        <section className="flex flex-col gap-4 w-full">
          <section>
            <table className="simple-table">
              <thead>
                <tr>
                  <th>الراتب الشهري</th>
                  <th>تاريخ التعيين</th>
                  <th>ميعاد الجلسة الحالية</th>
                  <th>المسمي الوظيفي</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4500 ريال</td>
                  <td>2024-10-10</td>
                  <td>2024-10-10</td>
                  <td>مدير عام</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="flex  gap-2 w-full">
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold">الرواتب</h4>
                {/* <button className="bg-textGreen bg-opacity-[0.3] text-white px-4 py-2 rounded text-sm">
                  اضافة راتب
                </button> */}
              </div>
              <table className="simple-table">
                <thead>
                  <tr>
                    <th>المدفوع</th>
                    <th>التاريخ</th>
                    <th>المستحق</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4500 ريال</td>
                    <td>2024-10-10</td>
                    <td>500 ريال</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" />
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                    <td className="flex justify-end">
                      <button className="bg-textGreen bg-opacity-[0.3] text-white px-4 py-2 rounded text-sm">
                        اضافة
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold">الخصومات</h4>
                {/* <button className="bg-textGreen bg-opacity-[0.3] text-white px-4 py-2 rounded text-sm">
                  اضافة خصم
                </button> */}
              </div>
              <table className="simple-table">
                <thead>
                  <tr>
                    <th>القيمة</th>
                    <th>العنوان</th>
                    <th>التاريخ</th>
                    <th>المدفوع</th>
                    <th>المستحق</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>500 ريال</td>
                    <td>تأخير</td>
                    <td>2024-10-10</td>
                    <td>0 ريال</td>
                    <td>500 ريال</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" />
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                    <td className="flex justify-end">
                      <button className="bg-textGreen bg-opacity-[0.3] text-white px-4 py-2 rounded text-sm">
                        اضافة
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="flex flex-1 flex-col gap-2">
            <div className="flex justify-between">
              <h4 className="text-lg font-semibold">الحضور و الانصراف</h4>
              {/* <button className="bg-textGreen bg-opacity-[0.3] text-white px-4 py-2 rounded text-sm">
                  اضافة راتب
                </button> */}
            </div>
            <table className="simple-table">
              <thead>
                <tr>
                  <th>وقت الحضور</th>
                  <th>وقت الانصراف</th>
                  <th>تأخير</th>
                  <th>سبب التأخير</th>
                  <th>اذن انصراف مبكر</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-10-10 08:45:00</td>
                  <td>2024-10-10 08:45:00</td>
                  <td>لا يوجد</td>
                  <td>لا يوجد</td>
                  <td>لا يوجد</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td className="flex justify-end">
                    <button className="bg-textGreen bg-opacity-[0.3] text-white px-4 py-2 rounded text-sm">
                      اضافة
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="flex flex-1 flex-col gap-2">
            <div className="flex justify-between">
              <h4 className="text-lg font-semibold">الإجازات</h4>
              {/* <button className="bg-textGreen bg-opacity-[0.3] text-white px-4 py-2 rounded text-sm">
                  اضافة راتب
                </button> */}
            </div>
            <table className="simple-table">
              <thead>
                <tr>
                  <th>السبب</th>
                  <th>من</th>
                  <th>الي</th>
                  <th>مدفوعة الأجر</th>
                  <th>المدة</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>اجازة مرضية</td>
                  <td>2024-10-10</td>
                  <td>2024-10-12</td>
                  <td>
                    <span className="text-mainRed font-bold text-sm">
                      غير مدفوع
                    </span>
                  </td>
                  <td>3 ايام</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td className="flex justify-end">
                    <button className="bg-textGreen bg-opacity-[0.3] text-white px-4 py-2 rounded text-sm">
                      اضافة
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="flex flex-1 flex-col gap-2">
            <div className="flex justify-between">
              <h4 className="text-lg font-semibold">تقييم الأداء</h4>
              {/* <button className="bg-textGreen bg-opacity-[0.3] text-white px-4 py-2 rounded text-sm">
                  اضافة راتب
                </button> */}
            </div>
            <EmployeeStatistics />
          </section>
        </section>
      </div>
    </div>
  );
};

export default HRRow;
