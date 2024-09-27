"use client";
import "./styles/contractTable.css";
import React, { useMemo } from "react";
import CustomTable from "../../shared/customTable/CustomTable";
import ContractRow from "./contractRow/ContractRow";
import contractsData from "@/fakeData/contractsData.json";

const ContractsTable = () => {
  const tableColumns = useMemo(
    () => [
      {
        Header: "actions",
        accessor: "actions",
      },
      {
        Header: "رقم العقد",
        accessor: "id",
      },
      {
        Header: "اسم العقد",
        accessor: "title",
      },
      {
        Header: "تاريخ العقد",
        accessor: "date",
      },
      {
        Header: "المدعي",
        accessor: "firstParty",
      },
      {
        Header: "المدعي علية",
        accessor: "secondParty",
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
        tableData={contractsData}
        columns={tableColumns}
        RenderElement={ContractRow}
      />
    </>
  );
};

export default ContractsTable;
