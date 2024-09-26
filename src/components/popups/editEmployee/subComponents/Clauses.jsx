import React, { useRef, useState } from "react";

const Clauses = () => {
  const currentNumber = useRef(0);
  const [clauses, setParties] = useState([
    { id: 0, value: "mohammed ahmed mahmoud" },
  ]);
  function addParty() {
    setParties([...clauses, { id: currentNumber.current + 1, value: "" }]);
    currentNumber.current++;
  }
  function setPartyData(id, data) {
    setParties(
      clauses.map((clause) =>
        clause.id === id ? { ...clause, value: data } : clause
      )
    );
  }
  function removeParty(clause) {
    setParties(clauses.filter((p) => p.id !== clause.id));
  }
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">البنود</h3>
      {clauses.map((clause, index) => (
        <div key={index} className="flex justify-between items-center ">
          <div className="flex-1">
            <h4>
              البند <span>{index + 1}</span>
            </h4>
            <div className="flex rounded  overflow-hidden">
              {index === clauses.length - 1 && (
                <button
                  onClick={addParty}
                  className="bg-textGreen text-white p-2 h-auto font-medium"
                >
                  اضافة <br /> بند
                </button>
              )}
              <div
                className="flex-1 h-auto [&>div]:rounded-t flex min-h-[100px] flex-col"
              >
                <input type="text" placeholder="عنوان البند" />
                <textarea
                  value={clause.value}
                  onChange={(e) => setPartyData(clause.id, e.target.value)}
                  className="w-full  min-h-[100px]"
                  name=""
                  placeholder="محتوى البند"
                  id=""
                ></textarea>
              </div>
              {index == clauses.length - 1 && clauses.length > 1 && (
                <button
                  onClick={() => removeParty(clause)}
                  className="bg-red-500 text-white p-2 h-auto font-medium"
                >
                  حذف
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clauses;
