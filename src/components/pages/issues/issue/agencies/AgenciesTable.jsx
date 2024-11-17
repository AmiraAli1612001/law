import AddDate from "@/components/adds/issues/addDate/AddDate";
import CustomTable from "@/components/shared/customTable/CustomTable";
import React, { useMemo } from "react";
import { toast } from "react-toastify";
import HRData from "@/fakeData/HRData.json";
import Link from "next/link";
const AgenciesTable = ({ defendant, prosecutor }) => {
  const sectionStyles = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };
  const tableColumns = useMemo(
    () => [
      // {
      //   Header: "actions",
      //   accessor: "actions",
      // },
      {
        Header: "الرقم",
        accessor: "id",
      },
      {
        Header: "العنوان",
        accessor: "name",
        Cell: ({ row, value }) => {
          return (
            <Link
              href={`/issues/1/sessions/1`}
              className="inline-block underline"
            >
              {value}
            </Link>
          );
        },
      },
      {
        Header: "التاريخ",
        accessor: "vacations",
      },
      {
        Header: "الوقت",
        accessor: "issueAppointmentCustomTime",
        Cell: ({ row }) => (
          <div className="font-bold">
            9:30 AM
          </div>
        ),
      },

      {
        Header: "الحالة",
        accessor: "issueAppointmentCustomState",
        Cell: ({ row }) => (
          <div className="bg-textGreen  text-white w-fit px-4 py-2 rounded-lg text-sm">
            تم
          </div>
        ),
      },
    ],
    []
  );
  return (
    <CustomTable
      tableData={HRData}
      columns={tableColumns}
      tableType={1}
      allowFilter={true}
      AddRecordEle={AddDate}
      addTop={true}
      // RenderElement={HRRow}
    />
  );
};

export default AgenciesTable;
