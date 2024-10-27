"use client";
import "./styles/hrTable.css";
import React, { useMemo } from "react";
import CustomTable from "@/components/shared/customTable/CustomTable";
import VisitRow from "./visitRow/VisitRow";
import visitsData from "@/fakeData/visitsData.json";
import AddVisit from "@/components/adds/visit/AddVisit";
import AddVacation from "@/components/adds/addVacation/AddVacation";
import AddPromotion from "@/components/adds/addPromotion/AddPromotion";

const PromotionsTable = () => {
  const data = [
    {
      id: 1,
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
        AddRecordEle={AddPromotion}
        RenderElement={VisitRow}
      />
    </>
  );
};

export default PromotionsTable;
