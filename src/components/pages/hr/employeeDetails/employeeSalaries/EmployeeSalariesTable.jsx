"use client";
import CustomTable from "@/components/shared/customTable/CustomTable";
import React, { useEffect, useRef, useState } from "react";
import AddAttendance from "@/components/adds/hr/attendance/AddAttendance";
import { deleteRecord } from "@/helperFunctions/dom";
import attendanceData from "@/fakeData/attendanceData.json";
import { useSelector } from "react-redux";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import AddSalary from "@/components/adds/hr/addSalary/AddSalary";
import RenderElement from "./RenderElement";
import deleteRecordAPI from "@/helperFunctions/apiHelpers/delete";
import { useContext } from "react";
import AuthContext from "@/context/Auth";

const EmployeeSalariesTable = () => {
  const { employeeId } = useSelector((store) => store.tempData.employeeDetails);
  const apiKey = process.env.NEXT_PUBLIC_DEV;
 
 let {salary} = useContext(AuthContext)











  const columns = [
    {
      Header: "رقم",
      accessor: "employeeSalaryId",
    },
    {
      Header: "رقم الموظف",
      accessor: "employeeId",
    },
    {
      Header: "التاريخ",
      accessor: "date",
      Cell: ({ row }) =>
        new Date(row.original.warningDate).toLocaleDateString(),
    },
    {
      Header: "المبلغ",
      accessor: "amount",
    },
    {
      Header: "الخصومات",
      accessor: "deductions",
    },
    {
      Header: "المدفوع",
      accessor: "paid",
    },
    {
      Header: "المستحق",
      accessor: "outstanding",
    },
    {
      Header: "الحالة",
      accessor: "status",
    },
    {
      Header: "التفاصيل",
      accessor: "details",
    },
    {
      Header: "",
      accessor: "actions",
      Cell: ({ row }) => (
        <div className="flex gap-1 items-center justify-center">
          <button
            onClick={(e) => deleteRecordAPI(`/api/EmployeeSalary/${row.original.employeeSalaryId}`)}
            className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
          >
            حذف
          </button>
        </div>
      ),
    },
  ];
  // useEffect(() => {
  //   if (employeeId > 0) {
  //     fetchWithCheck(`/api/EmployeeSalary/employee/${employeeId}`)
  //       .then((res) => setData(res))
  //       .catch((err) => console.warn(err));
  //   }
  // }, [employeeId]);
  return (
    <CustomTable
      AddRecordEle={AddSalary}
      className="min-h-screen"
      addTop={true}
      tableType={3}
      RenderElement={RenderElement}
      columns={columns}
      tableData={Array.isArray(salary) ? salary : []}
    />
  );
};

export default EmployeeSalariesTable;
