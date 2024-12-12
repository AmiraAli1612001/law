import Link from "next/link";
import React from "react";

const RenderElement = ({
  cellCount,
  data: { attendanceDate, checkInTime, checkOutTime, status, delayReason },
}) => {
  // {
  //   "attendanceId": 8,
  //   "employeeId": 2,
  //   "attendanceDate": "2024-12-10T17:00:33.689",
  //   "checkInTime": "2024-12-10T17:00:33.025038",
  //   "checkOutTime": null,
  //   "status": "Present",
  //   "delayReason": "string"
  // }
  return (
    <tr className="">
      <td colSpan={cellCount + 1}>
        <form id="editCurrentHrAttendance" className="w-full">
          <div className="small-inputs !grid-cols-3">
            <div className="simple-input">
              <label htmlFor="">تاريخ الحضور</label>
              <input required type="date" defaultValue={new Date(attendanceDate)} name="" id="" />
            </div>

            <div className="simple-input">
              <label htmlFor="">وقت الحضور</label>
              <input required type="time"  defaultValue={new Date(checkInTime)} name="" id="" />
            </div>

            <div className="simple-input">
              <label htmlFor="">وقت الانصراف</label>
              <input onChange={(e) => console.log(e.target.value)} required type="time" defaultValue={new Date(checkOutTime)} name="" id="" />
            </div>
          </div>

          <div className="simple-input my-4">
            <label htmlFor="">الحالة</label>
            <select required name="" id="" defaultValue={status}>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Late">Late</option>
              <option value="Early Leaving">Early Leaving</option>
            </select>
          </div>

          <div className="simple-input">
            <label htmlFor="">السبب</label>
            <textarea name="" id="" required defaultValue={delayReason}>

            </textarea>
          </div>
          <button form="editCurrentHrAttendance" type="submit" className="px-10 py-2 bg-blue-500 text-white rounded mt-4">حفظ</button>
        </form>
      </td>
    </tr>
  );
};

export default RenderElement;
