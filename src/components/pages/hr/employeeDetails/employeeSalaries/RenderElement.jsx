import { openLoader } from "@/globalState/Features/tempDataSlice";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const {
    user: { token },
  } = useSelector((state) => state.auth);

  const dateRef = useRef();
  const amountRef = useRef();
  const deductionsRef = useRef();
  const paidRef = useRef();
  const outstandingRef = useRef();
  const statusRef = useRef();
  const detailsRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(openLoader());

    try {
      const res = await fetchWithCheck(
        `/api/EmployeeRewards/employee/${employeeSalaryId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            employeeSalaryId,
            employeeId,
            attendanceDate: new Date(dateRef.current.value).toISOString(),
            deductions: deductionsRef.current.value,
            paid: paidRef.current.value,
            outstanding: outstandingRef.current.value,
            amount: amountRef.current.value,
            status: statusRef.current.value,
            details: detailsRef.current.value,
          }),
        }
      );

      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      lazyCloseLoader();
    }
  }
  return (
    <tr className="">
      <td colSpan={cellCount + 1}>
        <form
          onSubmit={handleSubmit}
          id="editCurrentEmployeeReward"
          className="w-full"
          method="POST"
        >
          <div className="small-inputs !grid-cols-3">
            {/* date */}
            <div className="simple-input">
              <label htmlFor="">التاريخ</label>
              <input
                ref={dateRef}
                required
                type="date"
                defaultValue={new Date(date).toISOString().split("T")[0]}
                name=""
                id=""
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
                name=""
                id=""
              />
            </div>
            {/* status */}
            <div className="simple-input">
              <label htmlFor="">السبب</label>
              <input
                ref={statusRef}
                onChange={(e) => console.log(e.target.value)}
                required
                type="text"
                defaultValue={status}
                name=""
                id=""
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
                name=""
                id=""
              />
            </div>
            {/* paid */}
            <div className="simple-input">
              <label htmlFor="">المدفوع</label>
              <input
                ref={paidRef}
                onChange={(e) => console.log(e.target.value)}
                required
                type="text"
                defaultValue={paid}
                name=""
                id=""
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
                name=""
                id=""
              />
            </div>
          </div>

          {/* details */}
          <div className="simple-input">
            <label htmlFor="">التفاصيل</label>
            <textarea
              ref={detailsRef}
              name=""
              id=""
              required
              defaultValue={details}
            ></textarea>
          </div>
          <button
            form="#editCurrentEmployeeReward"
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
