"use client";
import "./styles/contractTable.css";
import React, { useEffect, useMemo, useState } from "react";
import CustomTable from "../../shared/customTable/CustomTable";
import CustomRow from "./customRow/CustomRow";
import AddClient from "@/components/adds/clients/AddClient/AddClient";
import Link from "next/link";
import { openLoader } from "@/globalState/Features/tempDataSlice";
import { lazyCloseLoader } from "@/helperFunctions/lazy";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import { useDispatch } from "react-redux";

const ClientsTable = ({ swipe }) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  /**
   *  {
      "id": 1,
      "fullNameArabic": "string 1",
      "email": "string",
      "phoneNumber": "string",
      "nationalId": "string",
      "nationalIdExpiryDate": "2024-12-07T06:39:28.504",
      "nationality": "string",
      "gender": "string",
      "maritalStatus": "string",
      "workLocation": "string",
      "residence": "string",
      "additionalInfo": "string",
      "addDate": "2024-12-07T06:39:31.8742059"
    }
   */
  const tableColumns = useMemo(
    () => [
      {
        Header: "الرقم",
        accessor: "id",
      },
      {
        Header: "الاسم",
        accessor: "fullNameArabic",
      },
      {
        Header: "البريد الالكتروني",
        accessor: "email",
      },
      {
        Header: "الهاتف",
        accessor: "phoneNumber",
      },
      {
        Header: "الجنسية",
        accessor: "nationality",
      },
      {
        Header: "رقم الهوية",
        accessor: "nationalId",
      },
      {
        Header: "تاريخ الاضافة",
        accessor: "addDate",
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

  useEffect(() => {
    dispatch(openLoader());
    fetchWithCheck(`/api/Customer?pageNumber=${1}`)
      .then((e) => setData(e))
      .catch((e) => {
        console.log("HRTable");
        console.log(e);
      })
      .finally((e) => {
        lazyCloseLoader();
      });
  }, []);
  return (
    <CustomTable
      tableData={data?.customers || []}
      columns={tableColumns}
      tableType={1}
      AddRecordEle={() => <AddClient />}
      RenderElement={(data) => <CustomRow swipe={swipe} {...data} />}
    />
  );
};

export default ClientsTable;
