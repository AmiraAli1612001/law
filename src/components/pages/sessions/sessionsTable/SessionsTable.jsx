"use client";
import "./styles/style.css";
import React, { useMemo } from "react";
import CustomTable from "@/components/shared/customTable/CustomTable";
import tasksData from "@/fakeData/tasksData.json";
import CustomRow from "./taskRow/TaskRow";
import AddSession from "@/components/adds/session/AddSession";

const SessionsTable = ({addTop=false}) => {
  // "id": 1,
  // "case":true,
  // "name": "John Doe",
  // "date": "2022/01/01",
  // "time": "10:00",
  // "phone": "0123456789",
  // "callType": "صادرة",
  // "duration": "3:00",
  // "person": "علي عبدالله",
  // "details": "تفاصيل الاتصال تفاصيل الاتصال تفاصيل الاتصال",
  // "notes": "لا يوجد"
  const tableColumns = useMemo(
    () => [
      {
        Header: "actions",
        accessor: "actions",
      },
      {
        Header: "رقم الجلسة",
        accessor: "id",
      },
      {
        Header: "اسم الجلسة",
        accessor: "title",
      },
      {
        Header: "تاريخ الجلسة",
        accessor: "date",
      },
      {
        Header: "الموظف",
        accessor: "name",
      },
      {
        Header: "الحالة",
        accessor: "status",
      },
      {
        Header: "التفاصيل",
        accessor: "details",
      },
    ],
    []
  );
  return (
    <>
      <CustomTable
        // enableFilter={false}
        AddRecordEle={()=><AddSession/>}
        addTop={addTop}
        tableData={tasksData}
        columns={tableColumns}
        RenderElement={CustomRow}
      />
    </>
  );
};

export default SessionsTable;
