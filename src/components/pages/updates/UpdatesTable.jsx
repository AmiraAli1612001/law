"use client";
import "./styles/style.css";
import React, { useMemo } from "react";
import CustomTable from "@/components/shared/customTable/CustomTable";
import CallRow from "./taskRow/TaskRow";
import tasksData from "@/fakeData/tasksData.json";
import AddTask from "@/components/adds/tasks/addTask/AddTask";
import Link from "next/link";

const UpdatesTable = () => {
  // "id": 1,
  //   "title": "Caramel (Sukkar banat)",
  //   "date": "2024/07/12",
  //   "deadLine": "2024/07/16",
  //   "actualEndDate": "2024/07/13",
  //   "status": 1,
  //   "name": "Keefer Potteridge",
  //   "details":
  const data = [
    {
      id: 1,
      title: "جلسة",
      date: new Date().toISOString().split("T")[0],
      status: "1",
      details: "lorem  ipsum dolor sit amet",
    },
    {
      id: 1,
      title: "جسلة",
      date: new Date().toISOString().split("T")[0],
      status: "2",
      details: "lorem  ipsum dolor sit amet",
    },
  ];
  const tableColumns = useMemo(
    () => [
      {
        Header: "الرقم",
        accessor: "id",
      },
      {
        Header: "العنوان",
        accessor: "title",
      },
      {
        Header: "التاريخ",
        accessor: "date",
      },
      {
        Header: "الحالة",
        accessor: "status",
      },
      {
        Header: "التفاصيل",
        accessor: "details",
      },
      {
        Header: "الاجراءات",
        accessor: "actions",
        Cell: ({ row }) =><Link className="bg-blue-500 hover:bg-blue-700 transition-all text-white px-4 text-sm py-1 rounded" href={"/hr/1/sessions/1"}>
          التفاصيل
        </Link>,
      },
    ],
    []
  );
  return (
    <>
      <CustomTable
        // enableFilter={false}
        tableType={1}
        tableData={data}
        // AddRecordEle={AddTask}
        columns={tableColumns}
        // RenderElement={CallRow}
      />
    </>
  );
};

export default UpdatesTable;
