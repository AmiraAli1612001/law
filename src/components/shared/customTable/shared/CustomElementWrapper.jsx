import { useState } from "react";

const CustomElementWrapper = ({ row, RenderElement }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <tr {...row.getRowProps()} className={``}>
        {row.cells.map((cell, i) => {
          return (
            <td {...cell.getCellProps()} key={i}>
              {cell.render("Cell")}
            </td>
          );
        })}
        <td onClick={() => setIsExpanded((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`${
              isExpanded ? "rotate-180" : "rotate-0"
            } transition-all origin-center cursor-pointer`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m6 9l6 6l6-6"
            ></path>
          </svg>
        </td>
      </tr>
      {isExpanded && (
        <RenderElement
          cellCount={row.cells.length}
          key={row.original.id}
          data={row.original}
        />
      )}
    </>
  );
};

export default CustomElementWrapper;