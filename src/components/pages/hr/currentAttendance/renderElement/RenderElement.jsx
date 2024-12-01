import Link from "next/link";
import React from "react";

const RenderElement = ({ data: { id, name, title, department } }) => {
  return (
    <tr className="simple-row">
      <td>{id}</td>
      <td>{name}</td>
      <td>{title}</td>
      <td>{department}</td>
      <td>
        <Link className="bg-blue-500 transition-all hover:bg-opacity-[0.7] text-white px-4 py-1 rounded text-sm" href={`/hr/attendance/${id}`}>عرض</Link>
      </td>
    </tr>
  );
};

export default RenderElement;
