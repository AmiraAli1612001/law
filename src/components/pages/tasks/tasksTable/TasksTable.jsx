"use client";
import "./styles/style.css";
import React, { useMemo } from "react";
import CustomTable from "@/components/shared/customTable/CustomTable";
import CallRow from "./taskRow/TaskRow";
import tasksData from "@/fakeData/tasksData.json";
import AddTask from "@/components/adds/tasks/addTask/AddTask";

const TasksTable = () => {
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
        Header: "رقم المهمة",
        accessor: "id",
      },
      {
        Header: "اسم المهمة",
        accessor: "title",
      },
      {
        Header: "تاريخ المهمة",
        accessor: "date",
        
      },
      {
        Header: "تاريخ الانتهاء المحدد",
        accessor: "deadLine",

      },
      {
        Header: "تاريخ الانتهاء الفعلي",
        accessor: "actualEndDate",
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
        tableData={tasksData}
        AddRecordEle={AddTask}
        columns={tableColumns}
        RenderElement={CallRow}
      />
    </>
  );
};

export default TasksTable;
