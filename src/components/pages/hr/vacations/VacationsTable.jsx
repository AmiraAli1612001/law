"use client";
import "./styles/hrTable.css";
import React, { useMemo } from "react";
import CustomTable from "@/components/shared/customTable/CustomTable";
import VisitRow from "./visitRow/VisitRow";
import AddVacation from "@/components/adds/hr/addVacation/AddVacation";

const VacationsTable = () => {
  const data = [
    {
      id: 1,
      name: "mohammed ibrahim",
      from: "محامي درجة ثانية",
      to: "محامي درجة اولي",
      notes: "لا يوجد",
      date: new Date().toLocaleDateString("en-GB"),
    },
  ];
  const tableColumns = useMemo(
    () => [
      {
        Header: "actions",
        accessor: "actions",
      },
      {
        Header: "رقم الترقية",
        accessor: "id",
      },
      {
        Header: "اسم الموظف",
        accessor: "name",
      },
    ],
    []
  );
  return (
    <>
      <CustomTable
        // addBtn={true}
        addTop={true}
        enableFilter={false}
        tableData={data}
        columns={tableColumns}
        AddRecordEle={AddVacation}
        RenderElement={VisitRow}
      />
    </>
  );
};

export default VacationsTable;
