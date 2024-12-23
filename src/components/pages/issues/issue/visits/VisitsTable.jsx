"use client";
import "./styles/hrTable.css";
import React, { useMemo } from "react";
import CustomTable from "@/components/shared/customTable/CustomTable";
import VisitRow from "./visitRow/VisitRow";
import visitsData from "@/fakeData/visitsData.json";
import AddVisit from "@/components/adds/issues/addVisit/AddVisit";

const VisitsTable = () => {
  //<th>الارتباط بالقضية</th>
  //<th>اسم العميل</th>
  //<th>تصنيف العميل</th>
  //<th>رقم الجوال</th>
  //<th>رقم الهوية</th>
  //<th>رقم الواتساب</th>
  //<th>العنوان</th>
  //<th>سبب الزيارة</th>
  // "id": 1,
  //   "date": "2023/10/13",
  //   "name": "Keefer Potteridge",
  //   "amount": 5,
  //   "type": "قضية",
  //   "status": true,
  //   "clientType":"وكيل",
  //   "phone":"0123456789",
  //   "idNumber":"123456789",
  //   "whatsapp":"0123456789",
  //   "address":"123 Main St",
  //   "reason":"استشارة",
  //   "person":"علي عبدالله",
  //   "hour":"10:00",
  //   "notes":"لا يوجد"
  const tableColumns = useMemo(
    () => [
      {
        Header: "actions",
        accessor: "actions",
      },
      {
        Header: "رقم الزيارة",
        accessor: "id",
      },
      {
        Header: "اسم العميل",
        accessor: "name",
      },
      
      {
        Header: "رقم الجوال",
        accessor: "phone",
      },
      {
        Header: "رقم الهوية",
        accessor: "idNumber",
      },
      {
        Header: "رقم الواتساب",
        accessor: "whatsapp",
      },
      {
        Header: "العنوان",
        accessor: "address",
      },
      {
        Header: "تصنيف العميل",
        accessor: "clientType",
      },
      {
        Header: "سبب الزيارة",
        accessor: "reason",
      },
      {
        Header: "تاريخ الزيارة",
        accessor: "date",
      },
      {
        Header: "الوقت",
        accessor: "hour",
      },
      {
        Header: "الشخص المراد مقابلته",
        accessor: "person",
      },
      {
        Header: "المبلغ",
        accessor: "amount",
      },
      {
        Header: "المرفقات",
        accessor: "status",
        Cell: ({ row, value }) => {
          return (
           <input type="file" />
          );
        }
      },
      {
        Header: "الملاحظات",
        accessor: "notes",
      },
    ],
    []
  );
  return (
    <>
      <CustomTable
        // addBtn={true}
        addTop={true}
        enableFilter={false}
        tableData={visitsData}
        columns={tableColumns}
        AddRecordEle={AddVisit}
        
        RenderElement={VisitRow}
      />
    </>
  );
};

export default VisitsTable;
