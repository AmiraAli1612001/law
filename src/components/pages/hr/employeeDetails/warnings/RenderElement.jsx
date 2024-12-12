import React from "react";

const RenderElement = ({
  cellCount,
  data: {
    employeeWarningId,
    employeeId,
    warningDate,
    warningType,
    additionalDetails,
  },
}) => {
  return (
    <tr className="!p-0">
      <td className="!p-0" colSpan={cellCount}>
        <div className={`flex items-center justify-center [&>*]:w-1/${cellCount} [&>*]:p-4`}>
          <div>{employeeWarningId}</div>
          <div>{employeeId}</div>
          <div>{new Date(warningDate).toLocaleDateString()}</div>
          <div>{warningType}</div>
          <div>{additionalDetails}</div>
          <div>
            <div className="flex gap-1 items-center justify-center">
              <button
                onClick={(e) => deleteRecord(e)}
                className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default RenderElement;
