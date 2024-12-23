import React, { useEffect, useState } from "react";
import Link from "next/link";
import { deleteRecord } from "@/helperFunctions/dom";
const RenderElement = ({
  data: {
    attendanceId,
    employeeId,
    attendanceDate,
    checkInTime,
    checkOutTime,
    status,
    delayReason,
    actions,
  },
}) => {
  const [state, setState] = useState("!bg-yellow-50");
  const [message, setMessage] = useState("bg-green-50");

  // Parse the input times
  const checkInDate = new Date(checkInTime);
  const checkOutDate = new Date(checkOutTime);

  // Create reference times for 9:00 AM and 3:00 PM
  const nineAM = new Date(checkInDate);
  nineAM.setHours(9, 0, 0, 0); // Set to 9:00 AM

  const threePM = new Date(checkOutDate);
  threePM.setHours(15, 0, 0, 0); // Set to 3:00 PM

  // Calculate differences in milliseconds
  const diffCheckInToNineAM = nineAM - checkInDate; // Difference between 9:00 AM and check-in
  const diffCheckOutToThreePM = threePM - checkOutDate; // Difference between check-out and 3:00 PM

  // Convert differences to hours and minutes
  const formatTimeDifference = (ms) => {
    const totalMinutes = Math.abs(Math.floor(ms / 60000)); // Convert ms to minutes
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return (
      <span className={ms < 0 ? "text-red-500" : "text-green-500"} >
        {ms < 0 ? "تأخير" : "مبكر"}
        {` ${hours} ساعات و ${minutes} دقيقة`}
        {/* {` ${hours} hours and ${minutes} minutes`} */}
      </span>
    );
  };

  // Results
  // console.log("Difference between check-in and 9:00 AM:");
  // console.log(formatTimeDifference(diffCheckInToNineAM));

  // console.log("Difference between check-out and 3:00 PM:");
  // console.log(formatTimeDifference(diffCheckOutToThreePM));


  const apiKey = process.env.NEXT_PUBLIC_DEV;

  const deleteAttendance = async () => {
    const id = localStorage.getItem("attendanceId");
    try {
      const response = await fetch(`${apiKey}/AttendanceAdmin/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error(
          `Failed to delete attendance. Status: ${response.status}, Message: ${errorData.message || "Unknown error"}`
        );
        return;
      }
      console.log(`Attendance with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting attendance:", error);
    }
  };


  const columns = [
    {
      Header: "الرقم",
      accessor: "attendanceId",
    },
    {
      Header: "رقم الموظف",
      accessor: "employeeId",
    },
    {
      Header: "تاريخ الحضور",
      accessor: "attendanceDate",
    },
    {
      Header: "وقت الحضور",
      accessor: "checkInTime",
    },
    {
      Header: "وقت الانصراف",
      accessor: "checkOutTime",
    },
    {
      Header: "الحالة",
      accessor: "status",
    },
    {
      Header: "سبب التأخير",
      accessor: "delayReason",
    },
    {
      Header: "",
      accessor: "actions",
    },
  ];
  // function changeRowColor() {
  //   switch (attendanceId) {
  //     case 1:
  //       setMessage("حاضر");
  //       setState("!bg-green-50");
  //       break;
  //     case 2:
  //       setMessage("غائب");
  //       setState("!bg-red-50");
  //       break;
  //     case 3:
  //       setMessage("تأخير");
  //       setState("!bg-yellow-50");
  //       break;
  //     default:
  //       break;
  //   }
  // }

  function renderIfAttendance(message) {
    return attendanceId != 2 ? message : "لا يوجد";
  }

  // useEffect(() => {
  //   changeRowColor();
  // }, [state]);



  return (
    <tr className={`${state}`}>
      <td>
        <p>{attendanceId}</p>
      </td>
      <td>
        <Link className="underline" href={"/hr/1"}>
          {employeeId}
        </Link>
      </td>
      <td>
        <p>{new Date(attendanceDate).toLocaleDateString()}</p>
      </td>
      <td>
        <span>{checkInDate.toLocaleTimeString()}</span>
        <p>
          {formatTimeDifference(diffCheckInToNineAM)}
        </p>
      </td>
      <td>
        <span>{checkOutDate.toLocaleTimeString()}</span>
        <p>{formatTimeDifference(-diffCheckOutToThreePM)}</p>
      </td>
      <td>
        <p>{status}</p>
      </td>
      <td>
        <p>{delayReason}</p>
      </td>
      <td>
        <button
          onClick={deleteAttendance}
          className="bg-mainRed transition-all hover:bg-opacity-[0.7] text-white px-4 py-2 rounded text-sm"
        >
          حذف
        </button>
      </td>
    </tr>
  );
};

export default RenderElement;
