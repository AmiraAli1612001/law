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
      from: "2023/10/13",
      to: "2023/10/14",
      notes: "لا يوجد",
      status: "غير موافقة",
    }
  ]
  const tableColumns = useMemo(
    () => [
      {
        Header: "actions",
        accessor: "actions",
      },
      {
        Header: "رقم الزيارة",
        accessor: "id",
      },
      {
        Header: "اسم العميل",
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
