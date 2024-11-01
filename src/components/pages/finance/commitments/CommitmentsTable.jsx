import CustomTable from "@/components/shared/customTable/CustomTable";
import React from "react";
import issuesData from "@/fakeData/issuesData.json";
import AddCommitment from "@/components/adds/finance/commitments/addCommitment/AddCommitment";
const CommitmentsTable = () => {
  const deleteRecord = (event, ele) => {
    event.target.closest(ele ?? "tr").style.opacity = 0.3;
  };
  const columns = [
    {
      Header: "رقم الالتزام",
      accessor: "id",
    },
    {
      Header: "العنوان",
      accessor: "title",
    },
    {
      Header: "التاريخ",
      accessor: "date",
    },
    {
      Header: "المبلغ بالريال",
      accessor: "salary",
    },
    {
      Header: "",
      accessor: "actions",
      Cell: ({ row }) => (
        <div className="flex gap-1 items-center justify-center">
          <button
            onClick={deleteRecord}
            className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
          >
            حذف
          </button>
          <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
            تعديل
          </button>
        </div>
      ),
    },
  ];
  return (
    <CustomTable
      addTop={true}
      AddRecordEle={AddCommitment}
      tableType={1}
      tableData={issuesData}
      columns={columns}
    />
  );
};

export default CommitmentsTable;
