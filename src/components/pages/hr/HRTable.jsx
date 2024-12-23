"use client";
import "./styles/hrTable.css";
import React, { useEffect, useMemo, useState } from "react";
import CustomTable from "../../shared/customTable/CustomTable";
import HRRow from "./hrRow/HRRow";
import HRData from "@/fakeData/HRData.json";
import Link from "next/link";
import AddEmployee from "@/components/adds/hr/addEmployee/AddEmployee";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import { useDispatch } from "react-redux";
import { openLoader } from "@/globalState/Features/tempDataSlice";
import { lazyCloseLoader } from "@/helperFunctions/lazy";
import useFetchWithLoader from "@/customHooks/useFetchWithLoader";
import { useContext } from "react";
import AuthContext from "@/context/Auth";

const HRTable = () => {


 let {employees} = useContext(AuthContext)
  const tableColumns = useMemo(
    () => [
      {
        Header: "actions",
        accessor: "actions",
      },
      {
        Header: "رقم الموظف",
        accessor: "employeeId",
      },
      {
        Header: "اسم الموظف",
        accessor: "fullNameArabic",
        Cell: ({ row, value }) => {
          return (
            <Link href={`/hr/${row.original.employeeId}`} className="inline-block underline">
              {value}
            </Link>
          );
        },
      },
      {
        Header: "اسم الوظيفة",
        accessor: "jobTitle",
      },
      {
        Header: "القسم",
        accessor: "departmentName",
      },
      {
        Header: "الحالة",
        accessor: "employeeStatusId",
      },
    ],
    []
  );
  return (
    <CustomTable
      addTop={true}
      topFilter={[
        { title: "على رأس العمل", value: "على رأس العمل" },
        { title: "إجازة", value: "إجازة" },
        { title: "متدرب", value: "متدرب" },
        { title: "إنهاء خدمات", value: "إنهاء خدمات" },
      ]}
      tableType={2}
      AddRecordEle={AddEmployee}
      tableData={employees}
      columns={tableColumns}
      RenderElement={HRRow}
    />
  );
};

export default HRTable;
