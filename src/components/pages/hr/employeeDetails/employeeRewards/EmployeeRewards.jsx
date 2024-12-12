"use client";
import CustomTable from "@/components/shared/customTable/CustomTable";
import React, { useEffect,  useState } from "react";
import { deleteRecord } from "@/helperFunctions/dom";
import { useSelector } from "react-redux";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import RenderElement from "./RenderElement";
import AddReward from "@/components/adds/hr/addReward/AddReward";

const EmployeeRewards = () => {
  const [data, setData] = useState([]);
  const { employeeId } = useSelector((store) => store.tempData.employeeDetails);
  console.log(data);
  /**
   * {
    "employeeRewardId": 1,
    "employeeId": 1,
    "date": "2024-12-12T14:25:45.591",
    "amount": 100,
    "reason": "string",
    "details": "string"
  }
   */
  const columns = [
    {
      Header: "رقم المكافئة",
      accessor: "employeeRewardId",
    },
    {
      Header: "رقم الموظف",
      accessor: "employeeId",
    },
    {
      Header: "تاريخ",
      accessor: "date",
      Cell: ({ row }) =>
        new Date(row.original.warningDate).toLocaleDateString(),
    },
    {
      Header: "نوع",
      accessor: "amount",
    },
    {
      Header: "السبب",
      accessor: "reason",
    },
    {
      Header: "تفاصيل اضافية",
      accessor: "details",
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
    fetchWithCheck(`/api/EmployeeReward/employee/${employeeId}`)
      .then((res) => setData(res))
      .catch((err) => console.warn(err));
  }, [employeeId]);
  return (
    <CustomTable
      AddRecordEle={AddReward}
      className="min-h-screen"
      RenderElement={RenderElement}
      addTop={true}
      tableType={3}
      columns={columns}
      tableData={Array.isArray(data) ? data : []}
    />
  );
};

export default EmployeeRewards;
