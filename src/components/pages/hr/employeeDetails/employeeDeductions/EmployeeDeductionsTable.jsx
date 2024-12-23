"use client";
import CustomTable from "@/components/shared/customTable/CustomTable";
import React, { useEffect, useRef, useState } from "react";
import AddAttendance from "@/components/adds/hr/attendance/AddAttendance";
import { deleteRecord } from "@/helperFunctions/dom";
import attendanceData from "@/fakeData/attendanceData.json";
import { useSelector } from "react-redux";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import AddDeduction from "@/components/adds/hr/addDeduction/AddDeduction";
import ContractRow from "@/components/pages/contracts/contractRow/ContractRow";

const EmployeeDeductionsTable = () => {
  const [data, setData] = useState([]);
  const { employeeId } = useSelector((store) => store.tempData.employeeDetails);
  const getAllSDeduction = async () => {
    try {
      const response = await fetch(`${apiKey}/Deduction`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
      });
      const res = await response.json();
      if (response.ok) {
        setData(res)
      }
    } catch (error) {
      toast.error("حدث خطأ اثناء جلب البيانات")
    }
  };
  useEffect(() => {
    getAllSDeduction()
  }, [])

  console.log("de", data)




  const columns = [
    {
      Header: "الرقم",
      accessor: "deductionId",
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
      Header: "السبب",
      accessor: "reason",
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
  // useEffect(() => {
  //   if (employeeId > 0) {
  //     fetchWithCheck(`/api/Deduction/employee/${employeeId}`)
  //       .then((res) => setData(res))
  //       .catch((err) => console.warn(err));
  //   }
  // }, [employeeId]);
  console.log("😍😍😍😍", data)

  return (
    <CustomTable
      AddRecordEle={AddDeduction}
      className="min-h-screen"
      addTop={true}
      tableType={1}
      columns={columns}
      tableData={data}

    />
  );
};

export default EmployeeDeductionsTable;
