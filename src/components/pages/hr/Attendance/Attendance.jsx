"use client";
import CustomTable from "@/components/shared/customTable/CustomTable";
import React, { useEffect, useState } from "react";
import attendanceData from "@/fakeData/attendanceData.json";
import AddAttendance from "@/components/adds/hr/attendance/AddAttendance";
import RenderElement from "./renderElement/RenderElement";
import { openLoader } from "@/globalState/Features/tempDataSlice";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import { lazyCloseLoader } from "@/helperFunctions/lazy";
import { useDispatch } from "react-redux";
const Attendance = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // {
  //   "attendanceId": 1,
  //   "employeeId": 2,
  //   "attendanceDate": "2024-12-07T01:31:48.713",
  //   "checkInTime": "2024-12-07T01:32:18.3915007",
  //   "checkOutTime": "2024-12-07T06:22:24.9429247",
  //   "status": "Present",
  //   "delayReason": "string"
  // },
  
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
      Header: "تاريخ الحضور",
      accessor: "attendanceDate",
    },
    {
      Header: "وقت الحضور",
      accessor: "checkInTime",
    },
    {
      Header: "وقت الانصراف",
      accessor: "checkOutTime",
    },
    {
      Header: "الحالة",
      accessor: "status",
    },
    {
      Header: "سبب التأخير",
      accessor: "delayReason",
    },
    {
      Header: "",
      accessor: "actions",
    },
  ];

  useEffect(() => {
    dispatch(openLoader());
    fetchWithCheck("/api/AttendanceAdmin")
      .then((e) => setData(Array.isArray(e) ? e : []))
      .catch((e) => {
        console.log("HRTable");
        console.log(e);
      })
      .finally((e) => {
        lazyCloseLoader();
      });
  }, []);

  return (
    <CustomTable
      tableType={4}
      AddRecordEle={AddAttendance}
      addTop={true}
      RenderElement={RenderElement}
      columns={columns}
      tableData={data}
    />
  );
};

export default Attendance;
