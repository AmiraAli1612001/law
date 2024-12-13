import { openLoader } from "@/globalState/Features/tempDataSlice";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";

const RenderElement = ({
  cellCount,
  data: {
    employeeWarningId,
    employeeId,
    warningType,
    warningDate,
    additionalDetails,
  },
}) => {
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((state) => state.auth);

  const dateRef = useRef();
  const warningTypeRef = useRef();
  const detailsRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(openLoader());

    try {
      const res = await fetchWithCheck(
        `/api/EmployeeWarning/${employeeSalaryId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            employeeWarningId,
            employeeId,
            warningDate: new Date(dateRef.current.value).toISOString(),
            warningType: warningTypeRef.current.value,
            additionalDetails: detailsRef.current.value,
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
          <div className="small-inputs !grid-cols-2">
            {/* date */}
            <div className="simple-input">
              <label htmlFor="">التاريخ</label>
              <input
                ref={dateRef}
                required
                type="date"
                defaultValue={new Date(warningDate).toISOString().split("T")[0]}
                name=""
                id=""
              />
            </div>
            {/* warning */}
            <div className="simple-input">
              <label htmlFor="">نوع الانذار</label>
              <input
                ref={warningTypeRef}
                onChange={(e) => console.log(e.target.value)}
                required
                type="text"
                defaultValue={warningType}
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
              defaultValue={additionalDetails}
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


