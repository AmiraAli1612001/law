"use client";
import React, { useMemo } from "react";
import CustomTable from "@/components/shared/customTable/CustomTable";
import ContractRow from "./contractRow/ContractRow";
import contractsData from "@/fakeData/contractsData.json";
import AddContractRecord from "@/components/popups/addContractRecord/AddContractRecord";
const PaymentsEle = ({ swipe }) => {
  function renderPaymentStatus(id) {
    switch (id) {
      case 1:
        return <span className="text-green-400 font-bold">تم التحصيل</span>;
      case 2:
        return <span className="text-red-400 font-bold">لا تحصيل</span>;
      default:
        break;
    }
  }
  const tableColumns = useMemo(
    () => [
      {
        Header: "الرقم",
        accessor: "id",
      },
      {
        Header: "العقد",
        accessor: "contractId",
      },
      {
        Header: "تاريخ الدفعة",
        accessor: "date",
        Cell: ({ row }) =>
          row.original.paymentType == 1 ? (
            row.original.date
          ) : (
            <span className=" font-bold text-sm">لا يوجد</span>
          ),
      },
      {
        Header: "نوع الدفعة",
        accessor: "paymentTitle",
      },
      {
        Header: "القيمة",
        accessor: "value",
      },
      {
        Header: "نسبة الوسيط",
        accessor: "middleman",
      },
      {
        Header: "الحالة",
        accessor: "status",
        Cell: ({ row }) => renderPaymentStatus(row.original.status),
      },
      // {
      //   Header: "",
      //   accessor: "actions",
      //   Cell: ({ row }) => <div>
      //     <button className="bg-yellow-500 bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center font-bold">
      //       تحصيل
      //     </button>
      //   </div>,
      // },
    ],
    []
  );
  const data = [
    {
      id: 1,
      contractId: 1,
      paymentType: 1,
      status: 1,
      paymentTitle: "بتاريخ محدد",
      date: new Date().toLocaleDateString("en-GB"),
      value: 2500,
      middleman: "0%",
    },
    {
      id: 2,
      contractId: 4,
      paymentType: 2,
      status: 2,
      paymentTitle: "بصدور حكم",
      date: new Date().toLocaleDateString("en-GB"),
      value: 2500,
      middleman: "0%",
    },
    {
      id: 3,
      contractId: 1,
      paymentType: 1,
      status: 1,
      paymentTitle: "بتاريخ محدد",
      date: new Date().toLocaleDateString("en-GB"),
      value: 2500,
      middleman: "0%",
    },
  ];
  return (
    <>
      <CustomTable
        tableData={data}
        columns={tableColumns}
        idFilter={true}
        tableType={3}
        AddRecordEle={() => <AddContractRecord />}
        RenderElement={(data) => <ContractRow swipe={swipe} {...data} />}
      />
    </>
  );
};

export default PaymentsEle;
