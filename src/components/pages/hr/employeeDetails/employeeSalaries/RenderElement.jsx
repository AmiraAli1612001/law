import AuthContext from "@/context/Auth";
import { openLoader } from "@/globalState/Features/tempDataSlice";
import React, { useRef, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const RenderElement = ({
  cellCount,
  data: {
    employeeSalaryId,
    employeeId,
    date,
    amount,
    deductions,
    paid,
    outstanding,
    status,
    details,
  },
}) => {
  const dispatch = useDispatch();
  
  const dateRef = useRef();
  const amountRef = useRef();
  const deductionsRef = useRef();
  const paidRef = useRef();
  const outstandingRef = useRef();
  const statusRef = useRef();
  const detailsRef = useRef();

  let [myDate, setDate] = useState("");
  let [myAmount, setAmount] = useState("");
  let [myDeductions, setDeductions] = useState("");
  let [myPaid, setPaid] = useState("");
  let [myDetails, setDetails] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_DEV;

  let { getAllSalaries } = useContext(AuthContext);
  const editEmployeeSalary = async () => {
    console.log("Employee ID:", employeeId);
    console.log("Date:", myDate);
    console.log("Amount:", myAmount);
    console.log("Deductions:", myDeductions);
    console.log("Paid:", myPaid);
    console.log("Details:", myDetails);
  
    try {
      const response = await fetch(`${apiKey}/EmployeeSalary/${employeeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,  // Ensure the token is valid
        },
        cache: "no-store",  // Avoid caching for API requests
        body: JSON.stringify({
          employeeSalaryId: employeeSalaryId,  // Make sure the correct ID is passed
          employeeId: employeeId,
          date: myDate,
          amount: myAmount,
          deductions: myDeductions,
          paid: myPaid,
          outstanding: 0,  // Set it based on your logic
          status: statusRef.current.value,
          details: myDetails,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        toast.error("حدث خطأ ما");
      } else {
        toast.success("تم الحفظ الراتب بنجاح");
        getAllSalaries();  // Refresh the salaries list
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("حدث خطأ ما");
    }
  };
  

  return (
    <tr className="">
      <td colSpan={cellCount + 1}>
        <form
          id="editCurrentEmployeeReward"
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submit
            editEmployeeSalary(); // Call the function to update the employee salary
          }}
        >
          <div className="small-inputs !grid-cols-3">
            {/* date */}
            <div className="simple-input">
              <label htmlFor="">التاريخ</label>
              <input
                ref={dateRef}
                required
                type="date"
                onChangeCapture={(e) => {
                  setDate(e.target.value);
                }}
                defaultValue={new Date(date).toISOString().split("T")[0]}
              />
            </div>
            {/* amount */}
            <div className="simple-input">
              <label htmlFor="">وقت الحضور</label>
              <input
                ref={amountRef}
                required
                type="text"
                defaultValue={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            {/* status */}
            <div className="simple-input">
              <label htmlFor="">السبب</label>
              <input
                ref={statusRef}
                required
                type="text"
                defaultValue={status}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="small-inputs !grid-cols-3">
            {/* deductions */}
            <div className="simple-input">
              <label htmlFor="">خصم</label>
              <input
                ref={deductionsRef}
                required
                type="text"
                defaultValue={deductions}
                onChange={(e) => {
                  setDeductions(e.target.value);
                }}
              />
            </div>
            {/* paid */}
            <div className="simple-input">
              <label htmlFor="">المدفوع</label>
              <input
                ref={paidRef}
                required
                type="text"
                defaultValue={paid}
                onChange={(e) => {
                  setPaid(e.target.value);
                }}
              />
            </div>
            {/* المتبقي */}
            <div className="simple-input">
              <label htmlFor="">المتبقي</label>
              <input
                ref={outstandingRef}
                required
                type="text"
                defaultValue={outstanding}
              />
            </div>
          </div>

          {/* details */}
          <div className="simple-input">
            <label htmlFor="">التفاصيل</label>
            <textarea
              ref={detailsRef}
              required
              defaultValue={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-10 py-2 bg-blue-500 text-white rounded mt-4"
          >
            حفظ
          </button>
        </form>
      </td>
    </tr>
  );
};

export default RenderElement;
