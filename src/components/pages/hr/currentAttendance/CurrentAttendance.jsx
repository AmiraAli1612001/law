import CustomTable from "@/components/shared/customTable/CustomTable";
import React from "react";
import HRData from "@/fakeData/HRData.json";
import RenderElement from "./renderElement/RenderElement";

const CurrentAttendance = () => {
  const columns = [
    {
      Header: "رقم",
      accessor: "id",
    },
    {
      Header: "الاسم",
      accessor: "name",
    },
    {
      Header: "الوظيفة",
      accessor: "title",
    },
    {
      Header: "القسم",
      accessor: "department",
    },
  ];
  //   {
  //     "id": 1,
  //     "name": "Aigneis Brunn",
  //     "title": "Senior Cost Accountant",
  //     "department": "ادارة",
  //     "status": 2,
  //     "vacations": "2023/12/05",
  //     "loans": 5059,
  //     "salary": 12216,
  //     "profit": 51976,
  //     "issues": 142,
  //     "contracts": 61,
  //     "success": 82
  //   },
  return (
    <CustomTable
      RenderElement={RenderElement}
      columns={columns}
      tableData={HRData}
      tableType={4}
    />
  );
};

export default CurrentAttendance;
