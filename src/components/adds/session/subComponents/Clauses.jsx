import React, { useRef, useState } from "react";
import HRData from "@/fakeData/HRData.json";
import { useDispatch } from "react-redux";
import { toggleAddRecordPopup, toggleEditEmployee } from "@/globalState/Features/popupsSlice";
const Clause = ({
  last = false,
  removeClause,
  addClause,
  index,
  clause,
  length,
}) => {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-between items-center ">
      <div className="flex-1 simple-input">
        {/* <h4>
          الطرف <span>{index + 1}</span>
        </h4> */}
        <div className="flex  overflow-hidden gap-2">
          <div className="bg-contract rounded p-2 text-lg font-bold flex justify-center items-center">
            <span>{index + 1}</span>
          </div>
          {/* search input */}
          <textarea
            // type="text"
            name=""
            id=""
            // value={nameInput}
            // onChange={(e) => setNameInput(e.target.value)}
          ></textarea>
          {/* add btn */}
          {last && (
              <button
                onClick={addClause}
                className="bg-textGreen hover:opacity-80 text-white transition-all  rounded p-2 font-medium whitespace-nowrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                  ></path>
                </svg>
              </button>
          )}
          {/* <textarea
                  value={clause.value}
                  onChange={(e) => setClauseData(clause.id, e.target.value)}
                  className="w-full  min-h-[100px]"
                  name=""
                  id=""
                ></textarea> */}
          {/* {index == clauses.length - 1 && clauses.length > 1 && ( */}
          {(index > 0 || length > 1) && (
            <button
              onClick={() => removeClause(clause)}
              className="bg-red-500 text-white rounded aspect-square w-max p-2 h-auto font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M19 12.998H5v-2h14z"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
const Clauses = () => {
  const currentNumber = useRef(0);
  const [nameInput, setNameInput] = useState("");
  const [clauses, setClauses] = useState([
    { id: 0, value: "mohammed ahmed mahmoud" },
  ]);
  function addClause() {
    setClauses([...clauses, { id: ++currentNumber.current, value: "" }]);
    // currentNumber.current++;
  }
  function setClauseData(id, data) {
    setClauses(
      clauses.map((clause) =>
        clause.id === id ? { ...clause, value: data } : clause
      )
    );
  }
  function removeClause(clause) {
    setClauses(clauses.filter((p) => p.id !== clause.id));
  }
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">البنود</h3>
      {clauses.map((clause, index) => (
        <Clause
          length={clauses.length}
          key={index}
          clause={clause}
          last={index == clauses.length - 1}
          removeClause={removeClause}
          addClause={addClause}
          index={index}
        />
      ))}
    </div>
  );
};

export default Clauses;
