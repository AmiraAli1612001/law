"use client";
import CustomTable from "@/components/shared/customTable/CustomTable";
import React, { useEffect, useRef, useState } from "react";
import AddAttendance from "@/components/adds/hr/attendance/AddAttendance";
import { deleteRecord } from "@/helperFunctions/dom";
import attendanceData from "@/fakeData/attendanceData.json";
import AddWarning from "@/components/adds/hr/addWarning/AddWarning";
import { useSelector } from "react-redux";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import RenderElement from "./RenderElement";
import deleteRecordAPI from "@/helperFunctions/apiHelpers/delete";

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
        <button
          onClick={(e) =>
            deleteRecordAPI(
              `/api/EmployeeWarning/${row.original.employeeWarningId}`
            )
          }
          className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
        >
          حذف
        </button>
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
      RenderElement={RenderElement}
      addTop={true}
      tableType={3}
      columns={columns}
      tableData={Array.isArray(data) ? data : []}
    />
  );
};

export default WarningsTable;
