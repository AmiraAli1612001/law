import React, { useEffect, useState } from "react";
import Link from "next/link";
import { deleteRecord } from "@/helperFunctions/dom";
const RenderElement = ({
  data: { id, title, salary, date, type, typeMessage, source },
}) => {
  const [state, setState] = useState("!bg-yellow-50");
  const [message, setMessage] = useState("حاضر");
  const dto = [
    {
      id: 1,
      title: "ايراد قضية",
      salary: 1000,
      date: "2024/07/06",
      type: 1,
      typeMessage: "وارد",
      issue: 1,
      contract: 1,
    },
  ];
  function changeRowColor() {
    switch (type) {
      case 1:
        setMessage("حاضر");
        setState("!bg-green-50");
        break;
      case 2:
        setMessage("ايراد مستحق");
        setState("!bg-green-50");
        break;
      case 3:
        setMessage("مصروف");
        setState("!bg-red-50");
        break;
      case 4:
        setMessage("مصروف مستحق");
        setState("!bg-red-50");
        break;
      default:
        break;
    }
  }

  function renderIfAttendance(message) {
    return attendanceId != 2 ? message : "لا يوجد";
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
        <p>{title}</p>
      </td>
      <td>
        <p>{salary}</p>
      </td>
      <td>
        <p>{date}</p>
      </td>
      <td>
        <p>{typeMessage}</p>
      </td>
      <td>
        <Link className="underline" href={"/issues/1"}>
          {source}
        </Link>
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
