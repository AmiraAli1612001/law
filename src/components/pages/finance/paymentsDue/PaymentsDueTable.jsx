import CustomTable from "@/components/shared/customTable/CustomTable";
import React from "react";
import issuesData from "@/fakeData/issuesData.json";
const PaymentsDueTable = () => {
  const columns = [
    {
      Header: "رقم الدفعة المستحقة",
      accessor: "id",
    },
    {
      Header: "العنوان",
      accessor: "title",
    },
    {
      Header: "التاريخ",
      accessor: "date",
    },
    {
      Header: "المبلغ بالريال",
      accessor: "salary",
    },
    {
      Header: "",
      accessor: "actions",
      Cell: ({ row }) => (
        <div className="flex gap-1 items-center justify-center">
          <button className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
            حذف
          </button>
          <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
            تعديل
          </button>
        </div>
      ),
    },
  ];
  return <CustomTable addTop={true} tableType={1} tableData={issuesData} columns={columns} />;
};

export default PaymentsDueTable;
