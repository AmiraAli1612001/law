"use client";
import "./styles/contractTable.css";
import React, { useMemo } from "react";
import CustomTable from "../../shared/customTable/CustomTable";
import CustomRow from "./customRow/CustomRow";
import AddClient from "@/components/adds/clients/AddClient/AddClient";
import Link from "next/link";

const ClientsTable = ({ swipe }) => {
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
        Header: "تاريخ الاضافة",
        accessor: "date",
      },
      {
        Header: "عدد العقود",
        accessor: "contracts",
      },
      {
        Header: "",
        accessor: "actions",
        Cell: ({ row }) => (
          <Link
            className="bg-blue-500 hover:bg-blue-700 transition-all text-white px-4 text-sm py-1 rounded"
            href={"/clients/1"}
          >
            عرض
          </Link>
        ),
      },
    ],
    []
  );
  const data = [
    {
      id: 1,
      name: "محمد ابراهيم",
      contracts: 4,
      date: "2022/01/01",
    },
  ];
  return (
    <>
      <CustomTable
        tableData={data}
        columns={tableColumns}
        tableType={1}
        AddRecordEle={() => <AddClient />}
        RenderElement={(data) => <CustomRow swipe={swipe} {...data} />}
      />
    </>
  );
};

export default ClientsTable;
