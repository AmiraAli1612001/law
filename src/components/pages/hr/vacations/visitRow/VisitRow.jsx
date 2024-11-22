import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js";
import { Line } from "react-chartjs-2";
import { toggleEditEmployee } from "@/globalState/Features/popupsSlice";
import { useDispatch } from "react-redux";
import EmployeeStatistics from "@/components/statistics/EmployeeStatistics";
import { deleteRecord } from "@/helperFunctions/dom";
import Link from "next/link";
const VisitRow = ({
  data: { id, name, from, to, notes, vacationCount, status, statusId },
}) => {
  const [state, setState] = useState("!bg-yellow-50");
  const dispatch = useDispatch();
  function changeRowColor() {
    switch (state) {
      case 1:
        setState("!bg-yellow-50");
        break;
      case 2:
        setState("!bg-green-50");
        break;
      case 3:
        setState("!bg-red-50");
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

          <Link className="underline" href={"/hr/1"}>{name}</Link>

      </td>
      <td>
        <p>{from}</p>
      </td>
      <td>
        <p>{to}</p>
      </td>
      <td>
        <p>{vacationCount}</p>
      </td>
      <td>
        <p>{notes}</p>
      </td>
      <td>
        <p>{status}</p>
      </td>
      <td>
        <div className="flex gap-2">
          <button
            onClick={() => setState(3)}
            className="bg-mainRed transition-all hover:bg-opacity-[0.7] text-white px-4 py-2 rounded text-sm"
          >
            رفض
          </button>
          <button
            onClick={() => setState(2)}
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
