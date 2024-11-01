"use client";
import "./styles/hrTable.css";
import React, { useMemo } from "react";
import CustomTable from "../../shared/customTable/CustomTable";
import HRRow from "./hrRow/HRRow";
import HRData from "@/fakeData/HRData.json";
import Link from "next/link";
import AddEmployee from "@/components/adds/hr/addEmployee/AddEmployee";

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
        addTop={true}
        topFilter={[
          { title: "الجميع", value: "" },
          { title: "على رأس العمل", value: "على رأس العمل" },
          { title: "إجازة", value: "إجازة" },
          { title: "متدرب", value: "متدرب" },
          { title: "إنهاء خدمات", value: "إنهاء خدمات" },
        ]}
        AddRecordEle={AddEmployee}
        tableData={HRData}
        columns={tableColumns}
        RenderElement={HRRow}
      />
    </>
  );
};

export default HRTable;
