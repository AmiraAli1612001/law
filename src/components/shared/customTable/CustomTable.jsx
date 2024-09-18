"use client";
// import "./issuesTable.css";
import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";


const CustomTable = ({ RenderElement, columns, tableData }) => {
  const tableColumns = useMemo(() => columns, []);
  const [data, setData] = useState(tableData);

  const tableInstance = useTable(
    { columns: tableColumns, data: data },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    setGlobalFilter,
    headerGroups,
    rows,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageCount,
    state,
    // setPageSize,
  } = tableInstance;
  const { globalFilter } = state;
  return (
    <div>
      {/* custom rows */}
      <div className="flex flex-col gap-1">
        {page.map((row) => {
          prepareRow(row);
          return <RenderElement key={row.original.id} data={row.original} />;
        })}
      </div>
      {/* TABLE PAGINATION */}
      <div className="flex justify-center pt-4 gap-1 courses-paginaion">
        <button className="next" onClick={nextPage} disabled={!canNextPage}>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.29303 11.707L0.586032 5.99997L6.29303 0.292969L7.70703 1.70697L3.41403 5.99997L7.70703 10.293L6.29303 11.707Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button onClick={() => gotoPage(0)}>1</button>
        <span>...</span>
        <button onClick={() => gotoPage(pageCount - 1)}>{pageCount}</button>
        <button
          className="prev"
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.70697 11.707L7.41397 5.99997L1.70697 0.292969L0.292969 1.70697L4.58597 5.99997L0.292969 10.293L1.70697 11.707Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomTable;
