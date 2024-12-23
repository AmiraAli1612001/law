import CustomTable from "@/components/shared/customTable/CustomTable";
import React, { useEffect, useState } from "react";
import HRData from "@/fakeData/HRData.json";
import RenderElement from "./renderElement/RenderElement";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import { closeLoader, openLoader } from "@/globalState/Features/tempDataSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { lazyCloseLoader } from "@/helperFunctions/lazy";
import deleteRecordAPI from "@/helperFunctions/apiHelpers/delete";

const CurrentAttendance = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  // {
  //   "attendanceId": 8,
  //   "employeeId": 2,
  //   "attendanceDate": "2024-12-10T17:00:33.689",
  //   "checkInTime": "2024-12-10T17:00:33.025038",
  //   "checkOutTime": null,
  //   "status": "Present",
  //   "delayReason": "string"
  // }

  let [today, setToday] = useState([])
  const apiKey = process.env.NEXT_PUBLIC_DEV;

  const getAllTodayAttendance = async () => {
    try {
      const response = await fetch(`${apiKey}/Attendance/checked-in-today`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
      });
      const data = await response.json();
      if (response.ok) {
        setToday(data)
      }
    } catch (error) {
      console.error("Error fetching today attendance :", error);
    }
  };
  useEffect(() => {
    getAllTodayAttendance()
  }, [today])
  const columns = [
    {
      Header: "الرقم",
      accessor: "attendanceId",
    },
    {
      Header: "رقم الموظف",
      accessor: "employeeId",
    },
    {
      Header: "التاريخ",
      accessor: "attendanceDate",
      Cell: ({ row }) =>
        new Date(row.original.attendanceDate).toLocaleDateString(),
    },
    {
      Header: "وقت الدخول",
      accessor: "checkInTime",
      Cell: ({ row }) =>
        new Date(row.original.checkInTime).toLocaleTimeString(),
    },
    {
      Header: "وقت الخروج",
      accessor: "checkOutTime",
      Cell: ({ row }) =>
        new Date(row.original.checkOutTime).toLocaleTimeString(),
    },
    {
      Header: "الحالة",
      accessor: "status",
    },
    {
      Header: "سبب التاخير",
      accessor: "delayReason",
    },
    {
      Header: "الاجراءات",
      accessor: "actions",
      Cell: ({ row }) => (
        <>
          <Link
            href="/hr/1"
            className="bg-blue-500 px-4 py-1 rounded text-white hover:bg-blue-600 transition-all inline-block"
          >
            عرض
          </Link>
          <button onClick={() => deleteRecordAPI(`/api/AttendanceAdmin/${row.original.attendanceId}`)} className="px-4 py-1 bg-red-500 text-white rounded">
            حذف
          </button>
        </>
      ),
    },
  ];
  // useEffect(() => {
  //   dispatch(openLoader());
  //   fetchWithCheck("/api/attendance/checked-in-today")
  //     .then((res) => {
  //       // dispatch(setEmployeeDetails(res));
  //       setData(Array.isArray(res) ? res : []);
  //     })
  //     .catch((err) => console.warn(err))
  //     .finally(() => lazyCloseLoader());
  // }, []);
  return (
    <CustomTable
      RenderElement={RenderElement}
      columns={columns}
      tableData={today}
      tableType={3}
    />
  );
};

export default CurrentAttendance;
