import React, { useEffect, useState } from "react";
import Link from "next/link";
import { deleteRecord } from "@/helperFunctions/dom";
const RenderElement = ({
  data: {
    id,
    name,
    attendanceId,
    date,
    attendanceTime,
    leaveTime,
    attendanceDelay,
  },
}) => {
  const [state, setState] = useState("!bg-yellow-50");
  const [message, setMessage] = useState("حاضر");


  function changeRowColor() {
    switch (attendanceId) {
      case 1:
        setMessage("حاضر");
        setState("!bg-green-50");
        break;
      case 2:
        setMessage("غائب");
        setState("!bg-red-50");
        break;
      case 3:
        setMessage("تأخير");
        setState("!bg-yellow-50");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    changeRowColor();
  }, [state]);

  return (
    <tr className={`${state}`}>
      <td>
        <p>{id}</p>
      </td>
      <td>
        <Link className="underline" href={"/hr/1"}>
          {name}
        </Link>
      </td>
      <td>
        <p>{message}</p>
      </td>
      <td>
        <p>{date}</p>
      </td>
      <td>
        <p>{attendanceTime}</p>
      </td>
      <td>
        <p>{leaveTime}</p>
      </td>
      <td>
        <p>{attendanceDelay}</p>
      </td>
      <td>
        <button
          onClick={deleteRecord}
          className="bg-mainRed transition-all hover:bg-opacity-[0.7] text-white px-4 py-2 rounded text-sm"
        >
          حذف
        </button>
      </td>
    </tr>
  );
};

export default RenderElement;
