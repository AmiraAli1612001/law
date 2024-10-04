import CustomTable from "@/components/shared/customTable/CustomTable";
import React from "react";
import issuesData from "@/fakeData/issuesData.json";
const ExpensesTable = () => {
  const columns = [
    {
      Header: "رقم المصورف",
      accessor: "id",
    },
    {
      Header: "اسم المصورف",
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
  ]
  return <CustomTable tableType={1} tableData={issuesData} columns={columns}/>;
};

export default ExpensesTable;
