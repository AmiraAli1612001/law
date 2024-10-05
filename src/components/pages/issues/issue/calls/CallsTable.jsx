"use client";
import "./styles/hrTable.css";
import React, { useMemo } from "react";
import CustomTable from "@/components/shared/customTable/CustomTable";
import CallRow from "./callRow/CallRow";
import CallsData from "@/fakeData/callsData.json";

const CallsTable = () => {
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
        Header: "رقم المكالمة",
        accessor: "id",
      },
      {
        Header: "اسم المكالمة",
        accessor: "name",
      },
      {
        Header: "تاريخ المكالمة",
        accessor: "date",
      },
      {
        Header: "وقت المكالمة",
        accessor: "time",
      },
      {
        Header: "رقم الجوال",
        accessor: "phone",
      },
      {
        Header: "نوع المكالمة",
        accessor: "callType",
      },
      {
        Header: "مدة المكالمة",
        accessor: "duration",
      },
      {
        Header: "الموظف",
        accessor: "person",
      },
      {
        Header: "تفاصيل المكالمة",
        accessor: "details",
      },
      {
        Header: "ملاحظات",
        accessor: "notes",
      },
      
    ],
    []
  );
  return (
    <>
      <CustomTable
        enableFilter={false}
        tableData={CallsData}
        columns={tableColumns}
        RenderElement={CallRow}
      />
    </>
  );
};

export default CallsTable;
