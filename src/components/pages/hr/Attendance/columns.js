import { useRouter } from "next/navigation";
export function useColumns() {
  const router = useRouter();
  const cellStyles =
    "flex flex-col gap-2 [&>p:first-child]:text-xs [&>p:last-child]:font-semibold [&>p:first-child]:whitespace-nowrap [&>p:first-child]:text-textGreen h-full";
  const columns = [
    {
      Header: "actions",
      accessor: "null",
      Cell: ({ row }) => (
        <button
          className={`p-4 h-full flex items-center justify-center bg-[#FAF9F4] bg-textGreen cursor-pointer w-full`}
          onClick={(e) => {
            // console.log(e.target.parentElement.parentElement);
            // e.target.parentElement.classList.add("mb-40");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            className="pointer-events-none"
          >
            <rect width="24" height="24" fill="none" />
            <path
              d="M12 6L12 18M12 18L17 13M12 18L7 13"
              stroke="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      ),
    },
    {
      Header: "رقم القضية",
      accessor: "id",
      Cell: ({ row }) => (
        <>
          <div className={`${cellStyles} bg-[#FAF9F4]`}>
            <p>رقم القضية</p>
            <p className="text-2xl">{row.original.id}</p>
          </div>
          {/* <span className="absolute top-0 left-0 w-full h-full -z-50 bg-[#FAF9F4]"></span> */}
        </>
      ),
    },
    {
      Header: "تاريخ القضية",
      accessor: "date",
      Cell: ({ row }) => (
        <div className={`${cellStyles}`}>
          <p>تاريخ القضية</p>
          <p>{row.original.date}</p>
        </div>
      ),
    },
    {
      Header: "نوع القضية",
      accessor: "type",
      Cell: ({ row }) => (
        <div className={`${cellStyles}`}>
          <p>نوع القضية</p>
          <p>{row.original.type}</p>
        </div>
      ),
    },
    {
      Header: "الصفة",
      accessor: "character",
      Cell: ({ row }) => (
        <div className={`${cellStyles}`}>
          <p>الصفة</p>
          <p>{row.original.character}</p>
        </div>
      ),
    },
    {
      Header: "المدعي",
      accessor: "prosecutor",
      Cell: ({ row }) => (
        <div className={`${cellStyles}`}>
          <p>المدعي</p>
          <p>{row.original.prosecutor}</p>
        </div>
      ),
    },
    {
      Header: "المدعي علية",
      accessor: "defendant",
      Cell: ({ row }) => (
        <div className={`${cellStyles}`}>
          <p>المدعي علية</p>
          <p>{row.original.defendant}</p>
        </div>
      ),
    },
    {
      Header: "الحالة",
      accessor: "status",
      Cell: ({ row }) => (
        <div className={`${cellStyles}`}>
          <p>الحالة</p>
          <p>{row.original.status}</p>
        </div>
      ),
    },
  ];
  return { columns };
}
