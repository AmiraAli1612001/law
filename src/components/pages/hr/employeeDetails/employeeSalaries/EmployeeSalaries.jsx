import React from "react";
import EmployeeSalariesTable from "./EmployeeSalariesTable";

const EmployeeSalaries = () => {
  return (
    <div>
      <form action="" className="mb-4 simple-form">
        <div className="small-inputs main-section !bg-indigo-200">
          <div className="simple-input">
            <label htmlFor="">الراتب الاساسي بالريال</label>
            <input type="text" name="" id="" value={"3000"} />
          </div>
        </div>
      </form>
      <EmployeeSalariesTable />
    </div>
  );
};

export default EmployeeSalaries;
