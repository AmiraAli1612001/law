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
        <div className="flex flex-col">
          <div className="flex">
            {/* reports */}
            <div className="bg-gray-100  p-4 flex flex-col gap-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">التقارير</h3>
              {/* report */}
              <button className="flex items-center gap-2 bg-cyan-200 bg-opacity-70 py-2 px-4 rounded shadow hover:bg-opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14 11a3 3 0 0 1-3-3V4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8zm-2-3a2 2 0 0 0 2 2h3.59L12 4.41zM7 3h5l7 7v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3"
                  ></path>
                </svg>
                <button
                  onClick={() => exportTableToExcel(tableData, "تقرير المصورف")}
                  className="underline"
                >
                  تحميل التقرير
                </button>
              </button>
              {/* attachment */}
              <button className="flex items-center gap-2 bg-cyan-200 bg-opacity-70 py-2 px-4 rounded shadow hover:bg-opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14 11a3 3 0 0 1-3-3V4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8zm-2-3a2 2 0 0 0 2 2h3.59L12 4.41zM7 3h5l7 7v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3"
                  ></path>
                </svg>
                <button
                  onClick={() => exportTableToExcel(tableData, "تقرير المصورف")}
                  className="underline"
                >
                  تحميل المرفق
                </button>
              </button>
            </div>
            {/* details */}
            <div className="p-4 flex-1">
              <div className="flex justify-between">
                {/* added by */}
                <div className="mb-4">
                  <span className="text-lg font-semibold text-gray-900">
                    اضافة
                  </span>
                  :{" "}
                  <Link href={"/hr/1"} className="underline">
                    محمد احمد
                  </Link>
                </div>
                {/* payment method */}
                <div className="flex items-center gap-2">
                  <h3>طريقة الدفع: </h3>
                  <select name="" id="" className="!w-max">
                    <option value="1">Bank Transfer</option>
                    <option value="2">Credit Card</option>
                    <option value="3">Cash</option>
                  </select>
                </div>
              </div>
              {/* notes */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  ملاحظات:
                </h3>
                <textarea
                  name=""
                  id=""
                  className="w-full p-2 h-fit"
                  defaultValue={
                    "lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum"
                  }
                ></textarea>
              </div>
            </div>
          </div>
          <div className="p-4 bg-blue-100">
            <DynamicList title={"الموظفين المسئولين"}>
              <PersonSelector />
            </DynamicList>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default RenderElement;
