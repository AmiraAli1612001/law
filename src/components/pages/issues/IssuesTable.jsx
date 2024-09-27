"use client";
import "./issuesTable.css";
import React, { useMemo } from "react";

import issuesData from "@/fakeData/issuesData.json";
import IssueRow from "./issueRow/IssueRow";
import CustomTable from "../../shared/customTable/CustomTable";

const IssuesTable = () => {
  const tableColumns = useMemo(
    () => [
      {
        Header: "actions",
        accessor: "actions",
      },
      {
        Header: "رقم القضية",
        accessor: "id",
      },
      {
        Header: "تاريخ القضية",
        accessor: "date",
      },
      {
        Header: "نوع القضية",
        accessor: "type",
      },
      {
        Header: "الصفة",
        accessor: "character",
      },
      {
        Header: "المدعي",
        accessor: "prosecutor",
      },
      {
        Header: "المدعي علية",
        accessor: "defendant",
      },
      {
        Header: "الحالة",
        accessor: "status",
      },
    ],
    []
  );

  return (
    <>
      <CustomTable
        tableData={issuesData}
        columns={tableColumns}
        RenderElement={IssueRow}
        filterOption={"status"}
      />
    </>
  );
  return (
    <div>
      {/* <table
        {...getTableProps()}
        className="courses-rows w-full h-fit"
      > */}
      {/* <thead className="hidden md:table-header-group">
          {headerGroups.map((headerGroup, i) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={i}
              className="[&>th]:whitespace-nowrap"
            >
              {headerGroup.headers.map((column, i) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="text-start bg-[#048d5a] !text-white p-4 w-fit"
                  key={i}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead> */}
      {/* <tbody {...getTableBodyProps()} className="h-full">
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={`shadow w-full rounded-lg h-full flex lg:table-row`}
                key={i}
              >
                {row.cells.map((cell, i) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      key={i}
                      className="[&>div]:p-4"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody> */}
      {/* </table> */}
      {/* custom rows */}
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

export default IssuesTable;
