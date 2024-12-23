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

  let [attendance, setAttendance] = useState([])
  const apiKey = process.env.NEXT_PUBLIC_DEV;

  const getAllAttendance = async () => {
    try {
      const response = await fetch(`${apiKey}/AttendanceAdmin`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
      });
      const data = await response.json();
      if (response.ok) {
        setAttendance(data)
      }
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };
  useEffect(() => {
    getAllAttendance()
  }, [])
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

  // useEffect(() => {
  //   dispatch(openLoader());
  //   fetchWithCheck("/api/AttendanceAdmin")
  //     .then((e) => setData(Array.isArray(e) ? e : []))
  //     .catch((e) => {
  //       console.log("HRTable");
  //       console.log(e);
  //     })
  //     .finally((e) => {
  //       lazyCloseLoader();
  //     });
  // }, []);

  return (
    <CustomTable
      tableType={4}
      AddRecordEle={AddAttendance}
      addTop={true}
      RenderElement={RenderElement}
      columns={columns}
      tableData={attendance}
    />
  );
};

export default Attendance;
