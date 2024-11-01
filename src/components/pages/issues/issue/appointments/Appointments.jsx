import AddDate from "@/components/adds/issues/addDate/AddDate";
import CustomTable from "@/components/shared/customTable/CustomTable";
import React, { useMemo } from "react";
import { toast } from "react-toastify";
import HRData from "@/fakeData/HRData.json";
import Link from "next/link";
const Appointments = ({ defendant, prosecutor }) => {
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
        Header: "رقم الموظف",
        accessor: "id",
      },
      {
        Header: "اسم الموظف",
        accessor: "name",
        Cell: ({ row, value }) => {
          return (
            <Link href={`/hr/${1}`} className="inline-block underline">
              {value}
            </Link>
          );
        }
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

export default Appointments;
