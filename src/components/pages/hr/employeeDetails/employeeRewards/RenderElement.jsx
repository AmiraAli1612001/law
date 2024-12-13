import { openLoader } from "@/globalState/Features/tempDataSlice";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const RenderElement = ({
  cellCount,
  data: { employeeRewardId, employeeId, date, amount, reason, details },
}) => {
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((state) => state.auth);

  const dateRef = useRef();
  const amountRef = useRef();
  const reasonRef = useRef();
  const detailsRef = useRef();
  

  async function handleSubmit(e) {
      e.preventDefault();
      dispatch(openLoader());

  
      try {
        const res = await fetchWithCheck(`/api/EmployeeRewards/employee/${employeeRewardId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            employeeId,
            attendanceId,
            attendanceDate: new Date(
              dateRef.current.value
            ).toISOString(),
            amount: amountRef.current.value,
            reason: reasonRef.current.value,
            details: detailsRef.current.value,
          }),
        });
  
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
            {/* reason */}
            <div className="simple-input">
              <label htmlFor="">السبب</label>
              <input
                ref={reasonRef}
                onChange={(e) => console.log(e.target.value)}
                required
                type="text"
                defaultValue={reason}
                name=""
                id=""
              />
            </div>
          </div>

          {/* reason */}
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
