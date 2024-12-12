"use client";
import "./customTable.css";
import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import AddWrapper from "../wrappers/adds/AddWrapper";
import { useDispatch } from "react-redux";
import { toggleAddRecordPopup } from "@/globalState/Features/formStateSlice";

const CustomTable = ({
  RenderElement,
  topSearch = true,
  AddRecordEle,
  columns,
  tableData,
  enableFilter = true,
  tableType = 2,
  addBtn = false,
  addTop = false,
  topFilter = false,
  idFilter = false,
  className = "",
}) => {
  const tableColumns = useMemo(() => columns, []);
  const [searchFilter, setSearchFilter] = useState("");
  const [filterMenuActive, setFilterMenuActive] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("");
  const dispatch = useDispatch();
  const data = useMemo(() => {
    if (idFilter) {
      if (searchFilter === "") return tableData;
      else
        return tableData.filter((ele) =>
          searchFilter.includes(ele.id.toString())
        );
    } else {
      return tableData.filter((ele) =>
        Object.keys(ele).some((key) => {
          return ele[key]
            .toString()
            .toLowerCase()
            .includes(searchFilter.toLowerCase());
        })
      );
    }
  }, [searchFilter, idFilter, tableData?.length]);

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

  function renderTable(tableType) {
    switch (tableType) {
      case 1:
        //default table
        return (
          <table
            {...getTableProps()}
            className={`${
              filterMenuActive ? " w-[calc(100%-304px)] " : " w-full "
            } simple-table  `}
          >
            <thead className="">
              {headerGroups.map((headerGroup, i) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                  {headerGroup.headers.map((column, i) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={i}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className="">
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className={``} key={i}>
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
        );
      case 2:
        //no table, custom wrapper and custom row for each record
        return (
          <div
            className={`${
              filterMenuActive ? " w-[calc(100%-304px)] " : " w-full "
            } flex flex-1 flex-col gap-1`}
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <RenderElement key={row.original.id} data={row.original} />
              );
            })}{" "}
          </div>
        );
      case 3:
        //table with custom tr with details open below
        return (
          <table
            {...getTableProps()}
            className={`${
              filterMenuActive ? " w-[calc(100%-304px)] " : " w-full "
            } simple-table  `}
          >
            <thead className="">
              {headerGroups.map((headerGroup, i) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                  {headerGroup.headers.map((column, i) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={i}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className="">
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <CustomElementWrapper
                    row={row}
                    RenderElement={RenderElement}
                    key={i}
                  />
                );
              })}
            </tbody>
          </table>
        );
      case 4:
        //return custom tr without details expansion below
        return (
          <table
            {...getTableProps()}
            className={`${
              filterMenuActive ? " w-[calc(100%-304px)] " : " w-full "
            } simple-table  `}
          >
            <thead className="">
              {headerGroups.map((headerGroup, i) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                  {headerGroup.headers.map((column, i) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={i}
                      className={`w-[calc(100%/${columns.length})]`}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className="">
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <RenderElement
                    cellCount={columns.length}
                    row={row}
                    data={row.original}
                    key={i}
                  />
                );
              })}
            </tbody>
          </table>
        );
      default:
        break;
    }
  }
  return (
    <div className={`${className} flex flex-col gap-1 text-gray-900`}>
      {/* top search */}
      {topSearch && (
        <>
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"
              />
            </svg>
            <input
              className="w-full bg-transparent text-lg text-black focus:outline-none placeholder:text-gray-600"
              type="text"
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder={idFilter ? "ابحث بالرقم التعريفي" : "ابحث..."}
            />

            {/* topFilter */}
            {topFilter && (
              <>
                <button
                  key={"top-filter-all"}
                  className={`text-[#34A853] hover:bg-[#34A853] hover:text-white transition-all whitespace-nowrap font-bold px-2 py-1 border-[#34A853] border ${
                    searchFilter === "" ? "bg-[#34A853] text-white" : ""
                  }`}
                  onClick={() => setSearchFilter("")}
                >
                  الكل
                </button>
                {topFilter.map((ele, i) => (
                  <button
                    key={i}
                    className={`text-[#34A853] hover:bg-[#34A853] hover:text-white transition-all whitespace-nowrap font-bold px-2 py-1 border-[#34A853] border ${
                      searchFilter === ele.value
                        ? "bg-[#34A853] text-white"
                        : ""
                    }`}
                    onClick={() => setSearchFilter(ele.value)}
                  >
                    {ele.title}
                  </button>
                ))}
              </>
            )}

            {/* top add record */}
            {addTop && (
              <button
                onClick={() => dispatch(toggleAddRecordPopup())}
                className="flex mr-8 hover:bg-[#34A853] hover:border-transparent transition-all duration-200 hover:text-white items-center font-bold text-[#34A853] border-[#34A853] border px-2 py-1 rounded"
              >
                اضافة
              </button>
            )}

            {enableFilter && (
              <button
                className="flex hover:bg-[#34A853] hover:border-transparent transition-all duration-200 hover:text-white items-center font-bold text-[#34A853] border-[#34A853] border px-2 py-1 rounded"
                onClick={() => setFilterMenuActive(!filterMenuActive)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                  />
                </svg>
                تصفية
              </button>
            )}
          </div>
          {/* add record */}
          {AddRecordEle && (
            <AddWrapper>
              <AddRecordEle />
            </AddWrapper>
          )}
        </>
      )}

      <div
        className={`${
          filterMenuActive && " gap-1 "
        } transition-all flex w-full relative`}
      >
        {/* data rows */}

        {/* {tableType == 1 ? (
          <table
            {...getTableProps()}
            className={`${
              filterMenuActive ? " w-[calc(100%-304px)] " : " w-full "
            } simple-table  `}
          >
            <thead className="">
              {headerGroups.map((headerGroup, i) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                  {headerGroup.headers.map((column, i) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={i}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className="">
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className={``} key={i}>
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
        ) : (
          <div
            className={`${
              filterMenuActive ? " w-[calc(100%-304px)] " : " w-full "
            } flex flex-1 flex-col gap-1`}
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <RenderElement key={row.original.id} data={row.original} />
              );
            })}{" "}
          </div>
        )} */}
        {renderTable(tableType)}
        {/* filter */}
        {enableFilter && (
          <div
            className={`${
              filterMenuActive ? " min-w-max max-w-[300px] p-4 " : " max-w-0 "
            } transition-all absolute my-1 left-0 top-0 overflow-hidden bg-gray-200 h-fit flex flex-col gap-4`}
          >
            <h2 className="text-3xl">تصفية</h2>
            <div>
              <h3 className="mb-2">ترتيب حسب:</h3>
              {headerGroups.map((headerGroup, i) => (
                <div
                  {...headerGroup.getHeaderGroupProps()}
                  key={i}
                  className="grid grid-cols-2 gap-2"
                >
                  {headerGroup.headers.map((column, i) => (
                    <button
                      onClick={() => {
                        setCurrentFilter(column.id);
                      }}
                      className={`${
                        (column.id === "actions" || column.id === "actions2") &&
                        " hidden "
                      }`}
                      key={i}
                    >
                      <span
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className={`${
                          currentFilter === column.id
                            ? "bg-[#34A853] text-white "
                            : "bg-white "
                        }  rounded p-2 whitespace-nowrap text-center inline-block w-full`}
                        key={i}
                      >
                        {column.render("Header")}
                      </span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* add bottom */}
      {addBtn && (
        <button className="bg-textGreen block w-full bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
          اضافة
        </button>
      )}
      {/* TABLE PAGINATION */}
      <div className="flex justify-center pt-4 gap-1 table-paginaion">
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
        <button>{state.pageIndex + 1}</button>
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
        <RenderElement key={row.original.id} data={row.original} />
      )}
    </>
  );
};
export default CustomTable;
