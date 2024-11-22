import DynamicList from "@/components/shared/dynamicList/DynamicList";
import PersonSelector from "@/components/shared/personSelector/PersonSelector";
import { exportTableToExcel } from "@/helperFunctions/excelExport";
import Link from "next/link";
import React from "react";

const RenderElement = ({ className, data }) => {
  const tableData = [
    { Name: "John Doe", Age: 30, Department: "Engineering" },
    { Name: "Jane Smith", Age: 25, Department: "Marketing" },
  ];
  return (
    <tr className={`${className} !bg-orange-200 !bg-opacity-15`}>
      <td colSpan={7} className="!p-0">
        <div className="flex flex-col p-4">
          تفاصيل الوكالة
        </div>
      </td>
    </tr>
  );
};

export default RenderElement;
