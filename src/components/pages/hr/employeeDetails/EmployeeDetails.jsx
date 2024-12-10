"use client";
import React, { use, useEffect, useRef, useState } from "react";
import "./style/issueDetails.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { useDispatch } from "react-redux";
import Details from "./details/Details";
import Attendance from "./attendance/Attendance";
import EmployeeStatistics from "@/components/statistics/EmployeeStatistics";
import IssuesTable from "../../issues/IssuesTable";
import ContractsWrapper from "../../contracts/ContractsWrapper";
import VacationsTable from "./vacations/VacationsTable";
import AddEmployee from "@/components/popups/addEmployee/AddEmployee";
import PromotionsTable from "./promotions/PromotionsTable";
import EmployeeContract from "./employeeContract/EmployeeContract";
import WarningsTable from "./warnings/WarningsTable";
import SectionSwiper from "@/components/shared/sectionSwiper/SectionSwiper";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import {
  closeLoader,
  openLoader,
  setEmployeeDetails,
} from "@/globalState/Features/tempDataSlice";
import EmployeeSalaries from "./employeeSalaries/EmployeeSalaries";
import EmployeeDeductions from "./employeeDeductions/EmployeeDeductions";
import { lazyCloseLoader } from "@/helperFunctions/lazy";

const EmployeeDetails = ({ id }) => {
  // const [data, setData] = useState({});\
  const dispatch = useDispatch();

  const sections = [
    {
      title: "التفاصيل",
      ele: <Details />,
    },
    {
      title: "العقد",
      ele: <EmployeeContract />,
    },
    {
      title: "الترقيات",
      ele: <PromotionsTable />,
    },
    {
      title: "الانذارات",
      ele: <WarningsTable />,
    },
    {
      title: "الرواتب",
      ele: <EmployeeSalaries />,
    },
    {
      title: "الخصومات",
      ele: <EmployeeDeductions />,
    },
    {
      title: "السلف",
      ele: (
        <table className="simple-table">
          <thead>
            <tr>
              <th>الرقم</th>
              <th>التاريخ</th>
              <th>المبلغ</th>
              {/* <th>الخصومات</th> */}
              {/* <th>المدفوع</th>
          <th>المستحق</th> */}
              <th>الحالة</th>
              <th>التفاصيل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{new Date("2022-01-01").toLocaleDateString()}</td>

              <td>2000 ريال</td>
              {/* <td>0 ريال</td> */}

              {/* <td>2000 ريال</td>
          <td>0 ريال</td> */}

              <td>تم الدفع</td>
              <td>لا يوجد</td>
              <td>
                <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                  تعديل
                </button>
              </td>
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
              {/* <td>
            <input type="text" />
          </td> */}

              {/* <td>
            <input type="text" />
          </td>
          <td>
            <input type="text" />
          </td> */}

              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>

              <td>
                <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                  اضافة
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      title: "المكافآت",
      ele: (
        <table className="simple-table">
          <thead>
            <tr>
              <th>رقم الدفعة</th>
              <th>تاريخ الدفعة</th>
              <th>المبلغ</th>
              <th>الخصومات</th>
              <th>المدفوع</th>
              <th>المستحق</th>
              <th>الحالة</th>
              <th>التفاصيل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{new Date("2022-01-01").toLocaleDateString()}</td>

              <td>2000 ريال</td>
              <td>0 ريال</td>

              <td>2000 ريال</td>
              <td>0 ريال</td>

              <td>تم الدفع</td>
              <td>لا يوجد</td>
              <td>
                <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                  تعديل
                </button>
              </td>
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
                <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
                  اضافة
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      title: "الحضور و الانصراف",
      ele: <Attendance />,
    },
    {
      title: "الاجازات",
      ele: <VacationsTable />,
    },
    {
      title: "تقييم الاداء",
      ele: <EmployeeStatistics />,
    },
    {
      title: "القضايا",
      ele: <IssuesTable />,
    },
    {
      title: "العقود",
      ele: <ContractsWrapper />,
    },
  ];
  useEffect(() => {
    dispatch(openLoader());
    fetchWithCheck(`/api/Employee/${id}`)
      .then((res) => {
        dispatch(setEmployeeDetails(res));
      })
      .catch((err) => console.warn(err))
      .finally(() => lazyCloseLoader());
  }, []);

  return (
    <div className="issue-details flex">
      <SectionSwiper sections={sections} />
    </div>
  );
};
export default EmployeeDetails;
