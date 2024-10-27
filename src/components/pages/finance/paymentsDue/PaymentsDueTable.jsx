import CustomTable from "@/components/shared/customTable/CustomTable";
import React from "react";
import HRData from "@/fakeData/HRData.json";
const PaymentsDueTable = () => {
  const columns = [
    {
      Header: "رقم الراتب",
      accessor: "id",
    },
    {
      Header: "اسم الموظف",
      accessor: "title",
    },
    {
      Header: "التاريخ",
      accessor: "vacations",
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
  return <CustomTable addTop={true} tableType={1} tableData={HRData} columns={columns} />;
};

export default PaymentsDueTable;
