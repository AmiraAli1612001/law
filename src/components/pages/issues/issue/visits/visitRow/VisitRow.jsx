import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js";
import { Line } from "react-chartjs-2";
import { toggleEditEmployee } from "@/globalState/Features/popupsSlice";
import { useDispatch } from "react-redux";
import EmployeeStatistics from "@/components/statistics/EmployeeStatistics";
const VisitRow = ({
  data: {
    id,
    name,
    title,
    status: status2,
    phone,
    idNumber,
    whatsapp,
    address,
    clientType,
    reason,
    date,
    hour,
    person,
    notes,
    amount,
  },
}) => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const tableColumns = () => [
    {
      Header: "actions",
      accessor: "actions",
    },
    {
      Header: "رقم الزيارة",
      accessor: "id",
    },
    {
      Header: "اسم العميل",
      accessor: "name",
    },
    {
      Header: "الارتباط بالقضية",
      accessor: "status",
    },
    {
      Header: "رقم الجوال",
      accessor: "phone",
    },
    {
      Header: "رقم الهوية",
      accessor: "idNumber",
    },
    {
      Header: "رقم الواتساب",
      accessor: "whatsapp",
    },
    {
      Header: "العنوان",
      accessor: "address",
    },
    {
      Header: "تصنيف العميل",
      accessor: "clientType",
    },
    {
      Header: "سبب الزيارة",
      accessor: "reason",
    },
    {
      Header: "تاريخ الزيارة",
      accessor: "date",
    },
    {
      Header: "الوقت",
      accessor: "hour",
    },
    {
      Header: "الشخص المراد مقابلته",
      accessor: "person",
    },
    {
      Header: "المبلغ",
      accessor: "amount",
    },
    {
      Header: "الملاحظات",
      accessor: "notes",
    },
  ];

  return (
    <div className="">
      <table className="simple-table row-titles">
        <tbody>
          <tr>
            <td>
              <span>رقم الزيارة</span>
              <p>{id}</p>
            </td>
            <td>
              <span>اسم العميل</span>
              <p>{name}</p>
            </td>
           
            <td>
              <span>رقم الجوال</span>
              <p>{phone}</p>
            </td>
            <td>
              <span>رقم الهوية</span>
              <p>{idNumber}</p>
            </td>
            <td>
              <span>رقم الواتساب</span>
              <p>{whatsapp}</p>
            </td>
            <td>
              <span>العنوان</span>
              <p>{address}</p>
            </td>
            <td>
              <span>تصنيف العميل</span>
              <p>{clientType}</p>
            </td>
            <td>
              <span>سبب الزيارة</span>
              <p>{reason}</p>
            </td>
            <td>
              <span>تاريخ الزيارة</span>
              <p>{date}</p>
            </td>
            <td>
              <span>الارتباط بالقضية</span>
              <input className="block !w-[95px]" type="file" name="" id="" />
            </td>
            <td>
              <span>الوقت</span>
              <p>{hour}</p>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <div
        className={`bg-bgGreen flex gap-2 p-4 items-center HR-row rounded-lg relative border drop-shadow-sm`}
      >
        <div className={`w-[10%]`}>
          <p className="text-base ">{id}</p>
        </div>
        <div className="row-data-content">
          <p className="">{name}</p>
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
          <button
            className="bg-textGreen bg-opacity-[0.3] text-white px-4 py-2 rounded text-sm"
            onClick={() => setState(!state)}
          >
            التفاصيل
          </button>
          <button
            className="bg-mainRed bg-opacity-[0.3] text-white px-4 py-2 rounded text-sm"
            onClick={() => dispatch(toggleEditEmployee(id))}
          >
            تعديل
          </button>
        </div>
      </div> */}
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

export default VisitRow;
