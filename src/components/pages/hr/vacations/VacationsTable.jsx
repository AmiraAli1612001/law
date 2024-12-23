"use client";
import "./styles/hrTable.css";
import React, { useMemo } from "react";
import CustomTable from "@/components/shared/customTable/CustomTable";
import VisitRow from "./visitRow/VisitRow";
import AddVacation from "@/components/adds/hr/addVacation/AddVacation";
import { deleteRecord } from "@/helperFunctions/dom";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "@/context/Auth";

const VacationsTable = () => {
  // const data = [

  //   {
  //     id: 1,
  //     name: "mohammed ibrahim",
  //     from: new Date().toLocaleDateString("en-GB"),
  //     to: new Date(
  //       new Date().getTime() + 2 * 24 * 60 * 60 * 1000
  //     ).toLocaleDateString("en-GB"),
  //     notes: "لا يوجد",
  //     vacationCount: 2,
  //     status: "لا اجراء",
  //     statusId: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "ahned ibrahim",
  //     from: new Date().toLocaleDateString("en-GB"),
  //     to: new Date(
  //       new Date().getTime() + 2 * 24 * 60 * 60 * 1000
  //     ).toLocaleDateString("en-GB"),
  //     notes: "لا يوجد",
  //     vacationCount: 2,
  //     status: "لا اجراء", statusId: 1,
  //   },
  //   {
  //     id: 3,
  //     name: "ali ibrahim",
  //     from: new Date().toLocaleDateString("en-GB"),
  //     to: new Date(
  //       new Date().getTime() + 2 * 24 * 60 * 60 * 1000
  //     ).toLocaleDateString("en-GB"),
  //     notes: "لا يوجد",
  //     vacationCount: 2,
  //     status: "لا اجراء", statusId: 1,
  //   },
  // ];

  let { leaveAdmin, getAllLeaveAdmin } = useContext(AuthContext)


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
        Header: "من",
        accessor: "from",
      },
      {
        Header: "الي",
        accessor: "to",
      },
      {
        Header: "ملاحظات",
        accessor: "notes",
      },
      {
        Header: "عدد الايام",
        accessor: "vacationCount",
      },
      {
        Header: "الحالة",
        accessor: "status",
      },
      {
        Header: "",
        accessor: "actions",
        Cell: ({ row }) => {
          return (
            <button
              onClick={deleteRecord}
              className="bg-mainRed transition-all hover:bg-opacity-[0.7] text-white px-4 py-2 rounded text-sm"
            >
              الغاء
            </button>
          );
        },
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
        tableType={4}
        columns={tableColumns}
        AddRecordEle={AddVacation}
        RenderElement={VisitRow}
        tableData={leaveAdmin}

      />
    </>
  );
};

export default VacationsTable;
