import PersonSelector from "@/components/shared/personSelector/PersonSelector";
import React from "react";
import HRData from "@/fakeData/HRData.json";
import DynamicList from "@/components/shared/dynamicList/DynamicList";

const EmployeePayment = () => {
  return (
    <form className="bg-bgGreen p-4 !gap-4">
      <div>
        <DynamicList recordType={"addEmployee"} btnTitle={"اضافة موظف"} title={"الموظف"}>
          <PersonSelector />
        </DynamicList>
      </div>
      <hr />
      <div className="small-inputs !grid-cols-2">
        <div className="simple-input">
          <label htmlFor="">المبلغ</label>
          <input type="number" name="" id="" />
        </div>
        <div className="simple-input">
          <label htmlFor="">تاريخ الدفعة</label>
          <input type="date" name="" id="" defaultValue={new Date()} />
        </div>
      </div>
    </form>
  );
};

export default EmployeePayment;
