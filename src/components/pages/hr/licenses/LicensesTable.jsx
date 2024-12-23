import AddLicense from "@/components/adds/hr/license/AddLicense";
import CustomTable from "@/components/shared/customTable/CustomTable";
import React from "react";

const CustomRow = ({ data: { id, name, title, expiry } }) => {
  return <div className="custom-table-row simple-row">
    <div>{id}</div>
    <div>{name}</div>
    <div>{title}</div>
    <div>{expiry}</div>
  </div>;
};

const LicensesTable = () => {
  const data = [
    {
      id: "1",
      name: "test",
      title: "رخصة قيادة",
      expiry: new Date().toLocaleDateString("en-GB"),
    },
  ];
  const tableColumns = [
    {
      Header: "actions",
      accessor: "actions",
    },
    {
      Header: "رقم الرخصة",
      accessor: "id",
    },
    {
      Header: "اسم الرخصة",
      accessor: "name",
    },
    {
      Header: "العنوان",
      accessor: "title",
    },
    {
      Header: "تاريخ الانتهاء",
      accessor: "expiry",
    },
  ]
  return (
    <CustomTable addTop={true} AddRecordEle={AddLicense} columns={tableColumns} tableData={data}
    RenderElement={CustomRow} 
    />
  );
};

export default LicensesTable;
