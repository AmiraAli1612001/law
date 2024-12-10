import React from "react";
import EmployeeDeductionsTable from "./EmployeeDeductionsTable";

const EmployeeDeductions = () => {
  return (
    <div>
      <form action="" className="mb-4 simple-form">
        <div className="small-inputs main-section !bg-indigo-200">
          <div className="simple-input">
            <label htmlFor="">اجمالي الخصومات</label>
            <input type="text" name="" className="bg-white" id="" value={"3000"} disabled />
          </div>
        </div>
      </form>
      <EmployeeDeductionsTable />
    </div>
  );
};

export default EmployeeDeductions;
