"use client";
import CustomTable from "@/components/shared/customTable/CustomTable";
import React from "react";
import attendanceData from "@/fakeData/attendanceData.json";
import AddAttendance from "@/components/adds/hr/attendance/AddAttendance";
import RenderElement from "./renderElement/RenderElement";
const Attendance = () => {

  const columns = [
    {
      Header: "الرقم",
      accessor: "id",
    },
    {
      Header: "الاسم",
      accessor: "name",
    },
    {
      Header: "الحالة",
      accessor: "attendance",
      // Cell: ({ row }) => {
      //   const cellRef = useRef(null);

      //   useEffect(() => {
      //     const rowElement = cellRef.current.closest("tr");

      //     rowElement.classList.remove("absent");

      //     if (row.original.attendanceId == 2) {
      //       rowElement.classList.add("absent");
      //     }
      //   }, [row.original.attendanceId]);

      //   return (
      //     <p ref={cellRef}>{row.original.attendanceId == 1 ? "حاضر" : "غائب"}</p>
      //   );
      // },
    },
    {
      Header: "تاريخ الحضور",
      accessor: "date",
      // Cell: ({ row }) => <p>{row.original.date}</p>,
    },
    {
      Header: "وقت الحضور",
      accessor: "attendanceTime",
    },
    {
      Header: "وقت الانصراف",
      accessor: "dismissingTime",
    },
    {
      Header: "وقت التأخير",
      accessor: "attendanceDelay",
    },
    {
      Header: "",
      accessor: "actions",
    },
  ];

  return (
    <CustomTable
      tableType={4}
      AddRecordEle={AddAttendance}
      addTop={true}
      RenderElement={RenderElement}
      columns={columns}
      tableData={attendanceData}
    />
  );
};

export default Attendance;
