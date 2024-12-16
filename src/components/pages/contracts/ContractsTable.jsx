"use client";
import "./styles/contractTable.css";
import React, { useMemo } from "react";
import CustomTable from "../../shared/customTable/CustomTable";

import AddContract from "@/components/adds/contracts/addContract/AddContract";
import useFetchWithLoader from "@/customHooks/useFetchWithLoader";


//todo: unfinished
const ContractsTable = ({ swipe }) => {
  const { data } = useFetchWithLoader("/api/CaseContract");
  const { data: contractTypes } = useFetchWithLoader("/api/ContractType");
  const tableColumns = useMemo(
    () => [
      {
        Header: "الرقم",
        accessor: "contractNumber",
      },
      {
        Header: "تاريخ العقد",
        accessor: "contractDate",
        Cell: ({ row }) =>
          new Date(row.original.contractDate).toLocaleDateString(),
      },
      {
        Header: "القيمة",
        accessor: "totalAmount",
      },
      {
        Header: "دفع كامل",
        accessor: "isFullPayment",
        Cell: ({ row }) => (row.original.isFullPayment ? "نعم" : "لا"),
      },
      {
        Header: "النوع",
        accessor: "contractTypeId",
      },
      // {
      //   Header: "المدعي علية",
      //   accessor: "secondParty",
      // },
      {
        Header: "الحالة",
        accessor: "contractStatusId",
      },
      {
        Header: "التصنيف",
        accessor: "contractCategoryId",
      },
      {
        Header: "",
        accessor: "actions",
      },
    ],
    []
  );
  return (
    <CustomTable
      topFilter={Array.isArray(contractTypes) ? contractTypes : []}
      tableData={Array.isArray(data) ? data : []}
      columns={tableColumns}
      AddRecordEle={() => <AddContract />}
      tableType={1}
      // RenderElement={(data)=><ContractRow swipe={swipe} {...data} />}
    />
  );
};

export default ContractsTable;
