import CustomTable from "@/components/shared/customTable/CustomTable";
import React from "react";
import RenderElement from "./renderElement/RenderElement";
import { deleteRecord } from "@/helperFunctions/dom";

const VaultEle = () => {
  const columns = [
    {
      Header: "الرقم",
      accessor: "id",
    },
    {
      Header: "العنوان",
      accessor: "title",
    },
    {
      Header: "المبلغ بالريال",
      accessor: "salary",
    },
    {
      Header: "التاريخ",
      accessor: "date",
    },
    {
      Header: "النوع",
      accessor: "typeMessage",
    },
    {
      Header: "المصدر",
      accessor: "source",
    },
    {
      Header: "",
      accessor: "actions",
      Cell: (all) => {
        return (
          <div className="flex gap-1 items-center justify-center">
            <button
              onClick={deleteRecord}
              className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
            >
              حذف
            </button>
          </div>
        );
      },
    },
  ];

  const data = [
    {
      id: 1,
      title: "ايراد قضية",
      salary: 1000,
      date: "2024/07/06",
      type: 1,
      typeMessage: "وارد",
      source: 1,
    },
    {
      id: 2,
      title: "نسبة وسيط",
      salary: 1500,
      date: "2024/07/06",
      type: 3,
      typeMessage: "مستحق",
      source: 1,
    },
    {
      id: 3,
      title: "ايراد قضية",
      salary: 1200,
      date: "2024/07/06",
      type: 2,
      typeMessage: "مستحق",
      source: 1,
    },
  ];

  return (
    <CustomTable
      RenderElement={RenderElement}
      addTop={true}
      tableType={4}
      tableData={data}
      columns={columns}
    />
  );
};

export default VaultEle;
