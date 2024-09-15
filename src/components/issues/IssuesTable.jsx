"use client";
import React, { useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import issuesData from "@/fakeData/issuesData.json";
import { useColumns } from "./columns";

const IssuesTable = () => {
  const {columns} = useColumns()
  const tableColumns = useMemo(() => columns, []);
  const [data, setData] = useState(issuesData);

  const tableInstance = useTable(
    { columns: tableColumns, data: data },
    useGlobalFilter,
    useSortBy
    // usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    setGlobalFilter,
    headerGroups,
    rows,
    // page,
    // nextPage,
    // previousPage,
    // canPreviousPage,
    // canNextPage,
    // gotoPage,
    // pageCount,
    state,
    // setPageSize,
  } = tableInstance;
  const { globalFilter } = state;
  return (
    <div>
      <table
        {...getTableProps()}
        // style={{ display: `${isCards ? "none" : "table"}` }}
        className="courses-rows w-full"
      >
        <thead className="hidden md:table-header-group">
          {headerGroups.map((headerGroup, i) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={i}
              className="[&>th]:whitespace-nowrap"
            >
              {headerGroup.headers.map((column, i) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="text-start bg-[#1D2A96] !text-white"
                  key={i}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={`shadow rounded-lg ${
                  row.original.month && "[&>td]:!py-4 flex md:table-row w-full"
                }`}
                key={i}
              >
                {row.cells.map((cell, i) => {
                  return (
                    <td {...cell.getCellProps()} key={i}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default IssuesTable;
