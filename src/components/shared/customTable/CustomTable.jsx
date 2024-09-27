"use client";
import "./customTable.css";
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
  const [filterMenuActive, setFilterMenuActive] = useState(false);
  const [currentFiler, setCurrentFiler] = useState("");
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
          placeholder="ابحث..."
        />
        <button
          className="flex hover:bg-[#34A853] hover:border-transparent transition-all duration-200 hover:text-white items-center font-bold text-[#34A853] border-[#34A853] border-[2px] px-2 py-1 rounded"
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
      </div>
      <div
        className={`${
          filterMenuActive && " gap-1 "
        } transition-all flex w-full`}
      >
        <div
          className={`${
            filterMenuActive && " w-[calc(100%-304px)] "
          } flex flex-1 flex-col gap-1`}
        >
          {page.map((row) => {
            prepareRow(row);
            return <RenderElement key={row.original.id} data={row.original} />;
          })}
        </div>
        <div
          className={`${
            filterMenuActive ? " min-w-max max-w-[300px] p-4 " : " max-w-0 "
          } transition-all overflow-hidden bg-gray-200 h-fit flex flex-col gap-4`}
        >
          <h2 className="text-3xl">تصفية</h2>
          <div>
            <h3 className="mb-2">ترتيب حسب:</h3>
            {headerGroups.map((headerGroup) => (
              <div
                {...headerGroup.getHeaderGroupProps()}
                key={headerGroup.id}
                className="grid grid-cols-2 gap-2"

              >
                {headerGroup.headers.map((column) => (
                  <button
                    {...column.getHeaderProps()}
                    key={column.id}
                    className={`${
                      currentFiler === column.id
                        ? "bg-[#34A853] text-white "
                        : "bg-white "
                    }  rounded p-2 whitespace-nowrap text-center `}
                    onClick={() => {
                      setCurrentFiler(column.id);
                      column.toggleSortBy();
                    }}
                  >
                    {column.render("Header")}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
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

export default CustomTable;
