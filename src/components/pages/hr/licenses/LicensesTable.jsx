import CustomTable from "@/components/shared/customTable/CustomTable";
import React from "react";

const CustomRow = () => {
    return <div>
        
    </div>;
}

const LicensesTable = () => {
    const data =[
        {
            id: "1",
            name: "test",
            title: "رخصة قيادة",
            expiry: new Date().toLocaleDateString("en-GB"),
        }
    ]
  return <CustomTable columns={[]} tableData={data}  />;
};

export default LicensesTable;
