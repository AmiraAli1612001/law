import { useRouter } from "next/navigation";
export function useColumns() {
  const router = useRouter();
  const columns = [
    {
      Header: "id",
      accessor: "id",
      Cell: ({ row }) =>
        <span>{row.original.id}</span>
    },
    {
      Header: "date",
      accessor: "date",
      Cell: ({ row }) =>
        <span>{row.original.date}</span>
    },
    {
      Header: "type",
      accessor: "type",
      Cell: ({ row }) =>
        <span>{row.original.type}</span>
    },
    {
      Header: "prosecutor",
      accessor: "prosecutor",
      Cell: ({ row }) =>
        <span>{row.original.prosecutor}</span>
    },
    {
      Header: "character",
      accessor: "character",
      Cell: ({ row }) =>
        <span>{row.original.character}</span>
    },
    {
      Header: "defendant",
      accessor: "defendant",
      Cell: ({ row }) =>
        <span>{row.original.defendant}</span>
    },
    {
      Header: "status",
      accessor: "status",
      Cell: ({ row }) =>
        <span>{row.original.status}</span>
    },
  ];
  return { columns };
}