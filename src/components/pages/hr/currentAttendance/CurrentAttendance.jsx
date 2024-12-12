import CustomTable from "@/components/shared/customTable/CustomTable";
import React, { useEffect, useState } from "react";
import HRData from "@/fakeData/HRData.json";
import RenderElement from "./renderElement/RenderElement";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import { closeLoader, openLoader } from "@/globalState/Features/tempDataSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { lazyCloseLoader } from "@/helperFunctions/lazy";

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
        <Link
          href="/hr/1"
          className="bg-blue-500 px-4 py-1 rounded text-white hover:bg-blue-600 transition-all"
        >
          عرض
        </Link>
      ),
    },
  ];
  useEffect(() => {
    dispatch(openLoader());
    fetchWithCheck("/api/attendance/checked-in-today")
      .then((res) => {
        // dispatch(setEmployeeDetails(res));
        setData(Array.isArray(res) ? res : []);
      })
      .catch((err) => console.warn(err))
      .finally(() => lazyCloseLoader());
  }, []);
  return (
    <CustomTable
      RenderElement={RenderElement}
      columns={columns}
      tableData={data}
      tableType={3}
    />
  );
};

export default CurrentAttendance;
