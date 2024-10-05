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
  ]
  return <CustomTable tableType={1} tableData={issuesData} columns={columns}/>;
};



export default PaymentsDueTable