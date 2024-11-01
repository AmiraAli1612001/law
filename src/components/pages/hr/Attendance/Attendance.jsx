"use client";
import CustomTable from "@/components/shared/customTable/CustomTable";
import React, { useEffect, useRef } from "react";
import attendanceData from "@/fakeData/attendanceData.json";
import AddAttendance from "@/components/adds/hr/attendance/AddAttendance";
const Attendance = () => {
  const columns = [
    {
      Header: "رقم الحضور",
      accessor: "id",
    },
    {
      Header: "اسم الموظف",
      accessor: "name",
    },
    {
      Header: "حضور",
      accessor: "attendance",
      Cell: ({ row }) => {
        const cellRef = useRef(null);  

        useEffect(() => {
          const rowElement = cellRef.current.closest("tr");  

           
          rowElement.classList.remove("absent");

          if (row.original.attendance == 2) {
            rowElement.classList.add("absent");
          } 
        }, [row.original.attendance]);

        return (
          <p ref={cellRef}>{row.original.attendance == 1 ? "حاضر" : "غائب"}</p>
        );
      },
    },
    {
      Header: "تاريخ الحضور",
      accessor: "date",
    },
    {
      Header: "وقت الحضور",
      accessor: "attendanceTime",
    },
    {
      Header: "وقت الانصراف",
      accessor: "dismissingTime",
    },
  ];
  /* {
    "id": 48,
    "name": "Vincents Wimes",
    "attendance": true,
    "date": "2024/08/14",
    "attendanceTime": "14:51",
    "dismissingTime": "11:10"
  } */

  return (
    <CustomTable tableType={1} AddRecordEle={AddAttendance} addTop={true}  columns={columns} tableData={attendanceData} />
  );
};

export default Attendance;
