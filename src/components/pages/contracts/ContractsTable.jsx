"use client";
import "./styles/contractTable.css";
import React, { useMemo } from "react";
import CustomTable from "../../shared/customTable/CustomTable";
import ContractRow from "./contractRow/ContractRow";
import contractsData from "@/fakeData/contractsData.json";
// import AddContractRecord from "@/components/popups/addContractRecord/AddContractRecord";
import AddContract from "@/components/adds/contracts/addContract/AddContract";

const ContractsTable = ({ swipe }) => {
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
      topFilter={[
        { title: "أتعاب", value: "اتعاب" },
        { title: "خدمات", value: "خدمات" },
        { title: "شركات", value: "شركات" },
        { title: "استشارة", value: "استشارة" },
      ]}
        tableData={contractsData}
        columns={tableColumns}
        AddRecordEle={()=><AddContract/>}
        RenderElement={(data)=><ContractRow swipe={swipe} {...data} />}
      />
    </>
  );
};

export default ContractsTable;
