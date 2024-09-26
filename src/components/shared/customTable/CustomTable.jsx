"use client";
// import "./issuesTable.css";
import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

const CustomTable = ({ RenderElement, columns, tableData, filterOption }) => {
  const tableColumns = useMemo(() => columns, []);
  const [searchFilter, setSearchFilter] = useState("");
  // const [data, setData] = useState(tableData);
  const data = useMemo(
    () =>
      tableData.filter((ele) =>
        Object.keys(ele).some((key) => {
          return ele[key]
            .toString()
            .toLowerCase()
            .includes(searchFilter.toLowerCase());
        })
      ),
    [searchFilter]
  );
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
    <div className="flex flex-col gap-1">
      {/* custom rows */}
      <div className="w-full bg-gray-200 rounded p-4 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className=""
        >
          <path
            fill="none"
            stroke="#34A853"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"
          />
        </svg>
        <input
          className="w-full bg-transparent text-lg text-black focus:outline-none placeholder:text-gray-600"
          type="text"
          onChange={(e) => setSearchFilter(e.target.value)}
          placeholder="ابحث..."
        />
      </div>
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
