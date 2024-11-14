import * as XLSX from "xlsx";
export const exportTableToExcel = (tableData, fileName = "المرفق") => {
  tableData = [
    { Name: "John Doe", Age: 30, Department: "Engineering" },
    { Name: "Jane Smith", Age: 25, Department: "Marketing" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Bob Johnson", Age: 35, Department: "Sales" },
    { Name: "Alice Brown", Age: 28, Department: "HR" },
    { Name: "Charlie Davis", Age: 32, Department: "IT" },
  ];
  // Create a new workbook and worksheet
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(tableData);

  // Append worksheet to workbook
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  // Generate a binary string for the workbook
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

  // Convert binary string to octet-stream Blob
  const blob = new Blob(
    [new Uint8Array([...excelBuffer].map((char) => char.charCodeAt(0)))],
    {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    }
  );

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${fileName}.xlsx`;

  // Programmatically click the link to trigger the download, then remove it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
