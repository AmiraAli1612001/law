import CustomTable from "@/components/shared/customTable/CustomTable";
import React from "react";
import issuesData from "@/fakeData/issuesData.json";
import Expense from "@/components/adds/finance/expense/Expense";
const ExpensesTable = () => {
  const deleteRecord = (e) => {
    e.target.closest("tr").style.opacity = 0.3;
  };
  const columns = [
    {
      Header: "رقم المصورف",
      accessor: "id",
    },
    {
      Header: "البند",
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
          <button onClick={deleteRecord} className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
            حذف
          </button>
          <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
            تعديل
          </button>
        </div>
      ),
    },
  ]
  return <CustomTable   AddRecordEle={()=><Expense/>} addTop={true} tableType={1} tableData={issuesData} columns={columns}/>;
};

export default ExpensesTable;
