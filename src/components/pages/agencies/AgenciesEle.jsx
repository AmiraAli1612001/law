"use client";

import React, { useMemo } from "react";
import CustomTable from "../../shared/customTable/CustomTable";

// import HRData from "@/fakeData/HRData.json";
import Link from "next/link";
import RenderElement from "./renderElement/RenderElement";
import { deleteRecord } from "@/helperFunctions/dom";
// import AddEmployee from "@/components/adds/hr/addEmployee/AddEmployee";

const AgenciesEle = () => {
  const data = [
    {
      id: 1,
      name: "اسم الوكالة",
      issue: 1,
      date: new Date().toLocaleDateString("en-GB"),
      status: "سارية",
    },
  ];
  const tableColumns = useMemo(
    () => [
      {
        Header: "الرقم",
        accessor: "id",
      },
      {
        Header: "الاسم",
        accessor: "name",
      },
      {
        Header: "القضية",
        accessor: "issue",
        Cell: () => (
          <Link href="/issues/1" className="inline-block underline font-bold">
            1
          </Link>
        ),
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
        Header: "",
        accessor: "actions",
        Cell: ({ row }) => (
          <button
            onClick={deleteRecord}
            className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
          >
            حذف
          </button>
        ),
      },
    ],
    []
  );
  return (
    <>
      <CustomTable
        addTop={true}
        // AddRecordEle={AddEmployee}
        tableType={3}
        tableData={data}
        RenderElement={RenderElement}
        columns={tableColumns}
      />
    </>
  );
};

export default AgenciesEle;
