import CustomTable from "@/components/shared/customTable/CustomTable";
import React from "react";
import HRData from "@/fakeData/HRData.json";
import RenderElement from "./renderElement/RenderElement";
import { deleteRecord } from "@/helperFunctions/dom";
import AddRepeatingSalary from "@/components/adds/finance/salaries/repeating/AddRepeatingSalary";

const RepeatingSalaries = () => {
  const columns = [
    {
      Header: "رقم الراتب",
      accessor: "id",
    },
    {
      Header: "اسم الموظف",
      accessor: "name",
    },
    {
      Header: "المبلغ بالريال",
      accessor: "salary",
    },
    {
      Header: "يوم الصرف",
      accessor: "repeatingSalariesDate",
      Cell: ({ row }) => (
          <div>
            1
          </div>
      )
    },
    {
      Header: "",
      accessor: "actions",
      Cell: (all) => {
        return (
          <div className="flex gap-1 items-center justify-center">
            <button
              onClick={deleteRecord}
              className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
            >
              حذف
            </button>
            {/* <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
            تعديل
          </button> */}
          </div>
        );
      },
    },
  ];
  return (
    <CustomTable
      RenderElement={RenderElement}
      addTop={true}
      AddRecordEle={AddRepeatingSalary}
      tableType={3}
      tableData={HRData}
      columns={columns}
    />
  );
};

export default RepeatingSalaries;
