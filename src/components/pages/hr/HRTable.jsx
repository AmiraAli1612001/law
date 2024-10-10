"use client";
import "./styles/hrTable.css";
import React, { useMemo } from "react";
import CustomTable from "../../shared/customTable/CustomTable";
import HRRow from "./hrRow/HRRow";
import HRData from "@/fakeData/HRData.json";
import Link from "next/link";

const HRTable = () => {
  const tableColumns = useMemo(
    () => [
      {
        Header: "actions",
        accessor: "actions",
      },
      {
        Header: "رقم الموظف",
        accessor: "id",
      },
      {
        Header: "اسم الموظف",
        accessor: "name",
        Cell: ({ row, value }) => {
          return (
            <Link href={`/hr/${1}`} className="inline-block underline">
              {value}
            </Link>
          );
        },
      },
      {
        Header: "اسم الوظيفة",
        accessor: "title",
      },
      {
        Header: "القسم",
        accessor: "department",
      },
      {
        Header: "الحالة",
        accessor: "status",
      },
    ],
    []
  );
  return (
    <>
      <CustomTable
        tableData={HRData}
        columns={tableColumns}
        RenderElement={HRRow}
      />
    </>
  );
};

export default HRTable;
