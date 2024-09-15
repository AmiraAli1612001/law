import { useRouter } from "next/navigation";
export function useColumns() {
  const router = useRouter();
  const columns = [
    {
      Header: "رقم القضية",
      accessor: "id",
      Cell: ({ row }) =>
        <div className="bg-[#FAF9F4]">{row.original.id}</div>
    },
    {
      Header: "تاريخ القضية",
      accessor: "date",
      Cell: ({ row }) =>
        <div>{row.original.date}</div>
    },
    {
      Header: "نوع القضية",
      accessor: "type",
      Cell: ({ row }) =>
        <div>{row.original.type}</div>
    },
    {
      Header: "الصفة",
      accessor: "prosecutor",
      Cell: ({ row }) =>
        <div>{row.original.prosecutor}</div>
    },
    {
      Header: "المدعي",
      accessor: "character",
      Cell: ({ row }) =>
        <div>{row.original.character}</div>
    },
    {
      Header: "المدعي علية",
      accessor: "defendant",
      Cell: ({ row }) =>
        <div>{row.original.defendant}</div>
    },
    {
      Header: "الحالة",
      accessor: "status",
      Cell: ({ row }) =>
        <div>{row.original.status}</div>
    },
  ];
  return { columns };
}