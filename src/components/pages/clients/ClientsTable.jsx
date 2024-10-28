"use client";
import "./styles/contractTable.css";
import React, { useMemo } from "react";
import CustomTable from "../../shared/customTable/CustomTable";
import CustomRow from "./customRow/CustomRow";
import AddClient from "@/components/adds/clients/AddClient/AddClient";

const ClientsTable = ({ swipe }) => {
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
  const data = [
    {
      id: 1,
      name: "mohammed ibrahim",
      contracts: 4,
      issues: 2,
    },
  ];
  return (
    <>
      <CustomTable
        tableData={data}
        columns={tableColumns}
        AddRecordEle={() => <AddClient />}
        RenderElement={(data) => <CustomRow swipe={swipe} {...data} />}
      />
    </>
  );
};

export default ClientsTable;
