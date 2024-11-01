"use client";
import "./styles/hrTable.css";
import React, { useMemo } from "react";
import CustomTable from "@/components/shared/customTable/CustomTable";
import VisitRow from "./visitRow/VisitRow";
import AddVacation from "@/components/adds/hr/addVacation/AddVacation";

const VacationsTable = () => {
  const data =[
    {
      id:1,
      from:"2023/10/13",
      to:"2023/10/14",
      notes:"لا يوجد",
      status:"غير موافقة",
    }
  ]
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
    ],
    []
  );
  return (
    <>
      <CustomTable
        // addBtn={true}
        addTop={true}
        enableFilter={false}
        tableData={data}
        columns={tableColumns}
        AddRecordEle={AddVacation}

        RenderElement={VisitRow}
      />
    </>
  );
};

export default VacationsTable;
