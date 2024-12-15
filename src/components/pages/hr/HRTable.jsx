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

const HRTable = () => {
  const { data } = useFetchWithLoader("/api/Employee");
  
  // {
  //   "employeeId": 1,
  //   "fullNameArabic": "محمد أحمد علي",
  //   "fullNameEnglish": "Mohamed Ahmed Ali",
  //   "email": "mohamed.ali@example.com",
  //   "phoneNumber": "01012345678",
  //   "nationalId": "12345678901234",
  //   "hiringDate": "2023-01-01T00:00:00",
  //   "nationality": "مصري",
  //   "jobTitle": "محامي",
  //   "gender": "ذكر",
  //   "departmentId": 1,
  //   "residenceProfessionId": 1,
  //   "employeeStatusId": 1,
  //   "isActive": true,
  //   "workingHours": 8,
  //   "loanCount": 1,
  //   "password": "hashedPassword123",
  //   "isLock": false,
  //   "departmentName": "القضاء",
  //   "residenceProfessionName": "محامي",
  //   "employeeStatusName": "على رأس العمل"
  // }
  console.log(data);


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
            <Link href={`/hr/${1}`} className="inline-block underline">
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
      tableData={Array.isArray(data) ? data : []}
      columns={tableColumns}
      RenderElement={HRRow}
    />
  );
};

export default HRTable;
