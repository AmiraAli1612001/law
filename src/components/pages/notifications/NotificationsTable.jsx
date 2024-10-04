"use client"
import CustomTable from "@/components/shared/customTable/CustomTable";
import React from "react";
import notificationsData from "@/fakeData/notificationsData.json";
import NotificationElement from "./notificationElement/NotificationElement";

const NotificationsTable = () => {
  const columns = [
    {
      Header: "رقم الاشعار",
      accessor: "id",
    },
    {
      Header: "الرسالة",
      accessor: "message",
    },
    {
      Header: "التاريخ",
      accessor: "date",
    },
  ]
  return <CustomTable RenderElement={NotificationElement} columns={columns} tableData={notificationsData} tableType={2} />;
};

export default NotificationsTable;
