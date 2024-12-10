"use client";
import CustomTable from "@/components/shared/customTable/CustomTable";
import React, { useEffect, useRef, useState } from "react";
import AddAttendance from "@/components/adds/hr/attendance/AddAttendance";
import { deleteRecord } from "@/helperFunctions/dom";
import attendanceData from "@/fakeData/attendanceData.json";
import AddWarning from "@/components/adds/hr/addWarning/AddWarning";
import { useSelector } from "react-redux";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";

const WarningsTable = () => {
  const [data, setData] = useState([]);
  const { employeeId } = useSelector((store) => store.tempData.employeeDetails);
  console.log(data);
  const columns = [
    {
      Header: "رقم الانذار",
      accessor: "employeeWarningId",
    },
    {
      Header: "رقم الموظف",
      accessor: "employeeId",
    },
    {
      Header: "تاريخ الانذار",
      accessor: "warningDate",
      Cell: ({ row }) =>
        new Date(row.original.warningDate).toLocaleDateString(),
    },
    {
      Header: "نوع الانذار",
      accessor: "warningType",
    },
    {
      Header: "تفاصيل اضافية",
      accessor: "additionalDetails",
    },
    {
      Header: "",
      accessor: "actions",
      Cell: ({ row }) => (
        <div className="flex gap-1 items-center justify-center">
          <button
            onClick={(e) => deleteRecord(e)}
            className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
          >
            حذف
          </button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    fetchWithCheck(`/api/EmployeeWarning/employee/${employeeId}`)
      .then((res) => setData(res))
      .catch((err) => console.warn(err));
  }, [employeeId]);
  return (
    <CustomTable
      AddRecordEle={AddWarning}
      className="min-h-screen"
      addTop={true}
      tableType={1}
      columns={columns}
      tableData={Array.isArray(data) ? data : []}
    />
  );
};

export default WarningsTable;
