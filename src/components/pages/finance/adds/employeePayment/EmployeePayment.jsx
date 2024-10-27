import PersonSelector from "@/components/shared/personSelector/PersonSelector";
import React from "react";
import HRData from "@/fakeData/HRData.json";

const EmployeePayment = () => {
  return (
    <form className="bg-bgGreen p-4 !gap-4">
      <div>
        <h3 className="font-bold mb-2 text-[#333]">اسم الموظف</h3>
        <PersonSelector
          recordType={"employee"}
          last={true}
          personName="موظف"
          data={HRData}
          filterArr={[
            { name: "اسم الموظف", value: "name" },
            { name: "رقم الموظف", value: "id" },
            { name: "رقم الهاتف", value: "phone" },
          ]}
        />
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
