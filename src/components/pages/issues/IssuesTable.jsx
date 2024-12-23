"use client";
import "./styles/issuesTable.css";
import React, { useMemo } from "react";

import issuesData from "@/fakeData/issuesData.json";
import IssueRow from "./issueRow/IssueRow";
import CustomTable from "../../shared/customTable/CustomTable";
import AddIssue from "@/components/adds/issues/addIssue/AddIssue";

const IssuesTable = () => {
  const tableColumns = useMemo(
    () => [
      {
        Header: "actions",
        accessor: "actions",
      },
      {
        Header: "رقم القضية",
        accessor: "id",
      },
      {
        Header: "تاريخ القضية",
        accessor: "date",
      },
      {
        Header: "نوع القضية",
        accessor: "type",
      },
      {
        Header: "الصفة",
        accessor: "character",
      },
      {
        Header: "المدعي",
        accessor: "prosecutor",
      },
      {
        Header: "المدعي علية",
        accessor: "defendant",
      },
      {
        Header: "الحالة",
        accessor: "status",
      },
      {
        Header: "actions2",
        accessor: "actions2",
      },
    ],
    []
  );

  return (
    <>
      <CustomTable
        topFilter={[
          { title: "قيد الدراسة", value: "قيد الدراسة" },
          { title: "مكتملة", value: "مكتملة" },
          { title: "جديدة", value: "جديدة" },
          { title: "محكوم بها حكم غير قطعي", value: "محكوم بها حكم غير قطعي" },
          { title: "محكوم بها حكم قطعي", value: "محكوم بها حكم قطعي" },
        ]}
        tableData={issuesData}
        columns={tableColumns}
        RenderElement={IssueRow}
        AddRecordEle={AddIssue}
        filterOption={"status"}
      />
    </>
  );

};

export default IssuesTable;
