"use client";
import "./contractTable.css";
import React, { useMemo } from "react";
import CustomTable from "../../shared/customTable/CustomTable";
import ContractRow from "./contractRow/ContractRow";
import HRData from "@/fakeData/HRData.json";

const HRTable = () => {
  const tableColumns = useMemo(
    () => [
      {
        Header: "actions",
        accessor: "null",
      },
      {
        Header: "رقم الموظف",
        accessor: "id",
      },
      {
        Header: "اسم الموظف",
        accessor: "name",
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
        RenderElement={ContractRow}
      />
    </>
  );
};

export default HRTable;
