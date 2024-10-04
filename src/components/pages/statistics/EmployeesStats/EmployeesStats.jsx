"use client";
import React, { useMemo } from "react";
import HRData from "@/fakeData/HRData.json";
import CustomTable from "@/components/shared/customTable/CustomTable";

const row = (data) => {
  return (
    <tr
      id={data.id}
      name={data.name}
      title={data.title}
      department={data.department}
      status={data.status}
    />
  );
}
const EmployeesStats = () => {
  const tableColumns = useMemo(
    () => [
      // {
      //   Header: "actions",
      //   accessor: "actions",
      // },
      {
        Header: "رقم الموظف",
        accessor: "id",
      },
      {
        Header: "اسم الموظف",
        accessor: "name",
      },
      {
        Header: "اسم الوظيفة",
        accessor: "title",
      },
      {
        Header: "عدد القضايا",
        accessor: "issues",
      },
      {
        Header: "عدد العقود",
        accessor: "contracts",
      },
      {
        Header: "نسبة النجاح",
        accessor: "success",
      },
    ],
    []
  );
  return (
    <>
      <CustomTable
        tableData={HRData}
        columns={tableColumns}
        tableType={1}
        allowFilter={true}
        // RenderElement={HRRow}
      />
    </>
  );
};

export default EmployeesStats;
