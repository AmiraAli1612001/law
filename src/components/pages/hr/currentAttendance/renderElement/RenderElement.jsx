import Link from "next/link";
import React from "react";

const RenderElement = ({ data: { id, name, title, department, status } }) => {
  return (
    <tr className="simple-row">
      <td>{id}</td>
      <td>{name}</td>
      <td>{title}</td>
      <td>{department}</td>
      <td>
        {status == 1 ? (
          <span className="px-2 bg-green-500 text-white rounded font-bold text-xs">
            المؤسسة 1
          </span>
        ) : (
            <span className="px-2 bg-red-500 text-white rounded font-bold text-xs">
           ميداني: محكمة 1
          </span>
        )}
      </td>
      <td>
        <Link
          className="bg-blue-500 transition-all hover:bg-opacity-[0.7] text-white px-4 py-1 rounded text-sm"
          href={`/hr/attendance/${id}`}
        >
          عرض
        </Link>
      </td>
    </tr>
  );
};

export default RenderElement;
