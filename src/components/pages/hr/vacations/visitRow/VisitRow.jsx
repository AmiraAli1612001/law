import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { toast } from "react-toastify";
import { useContext } from "react";
import AuthContext from "@/context/Auth";
const VisitRow = ({ data }) => {
  const {
    leaveId,
    employeeId,
    employeeName,
    leaveType,
    isPaid,
    startDate,
    endDate,
    totalDays,
    reason,
    status,
    adminComment,
    approvalDate,
    rejectionDate,
  } = data
  console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv", data)
  const [state, setState] = useState("!bg-yellow-50");
  const [message, setMessage] = useState("لا اجراء");
  const dispatch = useDispatch();
  function changeRowColor() {
    switch (state) {
      case 1:
        setMessage("لا اجراء");
        setState("!bg-yellow-50");
        break;
      case 2:
        setMessage("موافق");
        setState("!bg-green-50");
        break;
      case 3:
        setMessage("رفض");
        setState("!bg-red-50");
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    changeRowColor();
  }, [state]);




  /****************************************accept**************************** */

  const apiKey = process.env.NEXT_PUBLIC_DEV;
  let { getAllLeaveAdmin } = useContext(AuthContext)

  const accept = async () => {
    try {

      const response = await fetch(`${apiKey}/LeaveAdmin/approve/${leaveId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
        body: JSON.stringify("")
      });

      if (response.ok) {

        await getAllLeaveAdmin()
        toast.success("تم قبول الاجازه بنجاح")
      }

    } catch (error) {
      toast.error("حدث خطا")
    }
  };

  const reject = async () => {
    try {

      const response = await fetch(`${apiKey}/LeaveAdmin/reject/${leaveId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
        body: JSON.stringify("")

      });

      if (response.ok) {
        await getAllLeaveAdmin()
        toast.error("تم رفض الاجازه")
      }


    } catch (error) {
      toast.error("حدث خطا")
    }
  };
  useEffect(() => {

    let id

  }, [])
  return (
    <tr className={`${state}`}>
      <td>
        <p>{leaveId}</p>
      </td>
      <td>
        <Link className="underline" href={`/hr/${employeeId}`}>
          {employeeName}
        </Link>
      </td>
      <td>
        <p>{startDate}</p>
      </td>
      <td>
        <p>{endDate}</p>
      </td>
      <td>
        <p>{reason}</p>
      </td>
      <td>
        <p>{totalDays}</p>
      </td>
      <td>
        <p>{status}</p>
      </td>
      <td>
        <div className="flex gap-2">
          <button
            onClick={() => { setState(3); reject() }}
            className="bg-mainRed transition-all hover:bg-opacity-[0.7] text-white px-4 py-2 rounded text-sm"
          >
            رفض
          </button>
          <button
            onClick={() => { setState(2); accept() }}
            className="bg-textGreen transition-all hover:bg-opacity-[0.7] text-white px-4 py-2 rounded text-sm"
          >
            قبول
          </button>
        </div>
      </td>
    </tr>
  );
};

export default VisitRow;
