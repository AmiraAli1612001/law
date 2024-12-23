"use client";
import "./styles/contractTable.css";
import React, { useMemo } from "react";
import CustomTable from "../../shared/customTable/CustomTable";

import AddContract from "@/components/adds/contracts/addContract/AddContract";
import useFetchWithLoader from "@/customHooks/useFetchWithLoader";
import { useState } from "react";
import { useEffect } from "react";
import ContractRow from "./contractRow/ContractRow";
import { render } from "@fullcalendar/core/preact";


//todo: unfinished
const ContractsTable = ({ swipe }) => {
  // const { data } = useFetchWithLoader("/api/CaseContract");
  // const { data: contractTypes } = useFetchWithLoader("/api/ContractType");

  let [contracts, setContracts] = useState([])
  const apiKey = process.env.NEXT_PUBLIC_DEV;

  const getAllContracts = async () => {
    try {
      const response = await fetch(`${apiKey}/CaseContract`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
      });
      const data = await response.json();
      if (response.ok) {
        setContracts(data)
      }

    } catch (error) {
      console.error("Error fetching all contract :", error);
    }
  };
  console.log("🙊🙊", contracts)

  useEffect(() => {
    getAllContracts()
  }, [])
  console.log("contract", contracts)

  const tableColumns = useMemo(
    () => [
      {
        Header: "الرقم",
        accessor: "contractNumber",
      },
      {
        Header: "تاريخ العقد",
        accessor: "contractDate",
      },
      {
        Header: "القيمة",
        accessor: "totalAmount",
      },
      {
        Header: "الطرف الاول",
        accessor: "firstparties",
        Cell: ({ row }) => {
          return row.original.parties[0]?.customerName || "غير متوفر";
        }
      },
      {
        Header: "الطرف التاني",
        accessor: "secondparties",
        Cell: ({ row }) => {
          return row.original.parties[1]?.customerName || "غير متوفر";
        }
      },
      {
        Header: "دفع كامل",
        accessor: "isFullPayment",
        Cell: ({ row }) => {
          return row.original.isFullPayment ? "نعم" : "لا";
        }
      },
      {
        Header: "النوع",
        accessor: "contractTypeId",
      },

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
      topFilter={Array.isArray(contracts) ? contracts : []}
      tableData={contracts}
      columns={tableColumns}
      AddRecordEle={() => <AddContract />}
      tableType={1}
      RenderElement={(contract) => <ContractRow swipe={swipe} {...contract} />}
    />
  );
};

export default ContractsTable;
