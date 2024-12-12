import { openLoader } from "@/globalState/Features/tempDataSlice";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import { lazyCloseLoader } from "@/helperFunctions/lazy";
import Link from "next/link";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const RenderElement = ({
  cellCount,
  data: {
    attendanceId,
    employeeId,
    attendanceDate,
    checkInTime,
    checkOutTime,
    status,
    delayReason,
  },
}) => {
  const attendanceDateRef = useRef();
  const checkInTimeRef = useRef();
  const checkOutTimeRef = useRef();
  const statusRef = useRef();
  const delayReasonRef = useRef();
  const {
    user: { token },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // {
  //   "attendanceId": 8,
  //   "employeeId": 2,
  //   "attendanceDate": "2024-12-10T17:00:33.689",
  //   "checkInTime": "2024-12-10T17:00:33.025038",
  //   "checkOutTime": null,
  //   "status": "Present",
  //   "delayReason": "string"
  // }
  console.log(new Date(checkOutTime).toLocaleTimeString());
  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(openLoader());
    console.log({
      attendanceDate: new Date(attendanceDateRef.current.value).toISOString(),
      checkInTime:
        attendanceDateRef.current.value.split("T")[0] +
        "T" +
        checkInTimeRef.current.value +
        ".000Z",
      checkOutTime:
        attendanceDateRef.current.value.split("T")[0] +
        "T" +
        checkOutTimeRef.current.value +
        ".000Z",
      status: statusRef.current.value,
      delayReason: delayReasonRef.current.value,
    });

    try {
      const res = await fetchWithCheck(`/api/AttendanceAdmin/${attendanceId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          employeeId,
          attendanceId,
          attendanceDate: new Date(
            attendanceDateRef.current.value
          ).toISOString(),
          checkInTime:
            attendanceDateRef.current.value.split("T")[0] +
            "T" +
            checkInTimeRef.current.value +
            ":00.000Z",
          checkOutTime:
            attendanceDateRef.current.value.split("T")[0] +
            "T" +
            checkOutTimeRef.current.value +
            ":00.000Z",
          status: statusRef.current.value,
          delayReason: delayReasonRef.current.value,
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
          id="editCurrentHrAttendance"
          className="w-full"
          method="POST"
        >
          <div className="small-inputs !grid-cols-3">
            <div className="simple-input">
              <label htmlFor="">تاريخ الحضور</label>
              <input
                ref={attendanceDateRef}
                required
                type="date"
                defaultValue={
                  new Date(attendanceDate).toISOString().split("T")[0]
                }
                name=""
                id=""
              />
            </div>

            <div className="simple-input">
              <label htmlFor="">وقت الحضور</label>
              <input
                ref={checkInTimeRef}
                required
                type="time"
                defaultValue={new Date(checkInTime).toISOString().split("T")[1].slice(0, 5)}
                name=""
                id=""
              />
            </div>

            <div className="simple-input">
              <label htmlFor="">وقت الانصراف</label>
              <input
                ref={checkOutTimeRef}
                onChange={(e) => console.log(e.target.value)}
                required
                type="time"
                defaultValue={
                  new Date(checkOutTime).toISOString().split("T")[1].slice(0, 5)
                }
                name=""
                id=""
              />
            </div>
          </div>

          <div className="simple-input my-4">
            <label htmlFor="">الحالة</label>
            <select
              ref={statusRef}
              required
              name=""
              id=""
              defaultValue={status}
            >
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Late">Late</option>
              <option value="Early Leaving">Early Leaving</option>
            </select>
          </div>

          <div className="simple-input">
            <label htmlFor="">السبب</label>
            <textarea
              ref={delayReasonRef}
              name=""
              id=""
              required
              defaultValue={delayReason}
            ></textarea>
          </div>
          <button
            form="editCurrentHrAttendance"
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
