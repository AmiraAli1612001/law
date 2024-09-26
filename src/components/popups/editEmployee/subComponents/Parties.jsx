import React, { useRef, useState } from "react";

const Parties = () => {
  const currentNumber = useRef(0);
  const [parties, setParties] = useState([
    { id: 0, value: "mohammed ahmed mahmoud" },
  ]);
  function addParty() {
    setParties([...parties, { id: currentNumber.current + 1, value: {} }]);
    currentNumber.current++;
  }
  function setPartyData(id, data) {
    setParties(
      parties.map((party) =>
        party.id === id
          ? { ...party, value: { ...parties[id], ...data } }
          : party
      )
    );
  }
  function removeParty(party) {
    setParties(parties.filter((p) => p.id !== party.id));
  }
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">الاجازات</h3>
      {parties.map((party, index) => (
        <div key={index} className="flex justify-between items-center ">
          <div className="flex flex-1 gap-2 rounded  overflow-hidden">
            {index === parties.length - 1 && (
              <button
                onClick={addParty}
                className="bg-textGreen text-white p-2 h-auto font-medium"
              >
                اضافة <br /> اجازة
              </button>
            )}
            <div
              dir="rtl"
              className="flex-1 h-auto [&>div]:rounded-t flex min-h-[100px] flex-col gap-4"
            >
              <input
                type="text"
                placeholder="سبب الاجازة"
                onChange={(e) =>
                  setPartyData(party.id, { reason: e.target.value })
                }
              />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 flex-1">
                  <label htmlFor="">من</label>
                  <input
                  className="flex-1"
                    type="date"
                    onChange={(e) =>
                      setPartyData(party.id, { startDate: e.target.value })
                    }
                  />
                </div>
                <div className="flex  items-center gap-2 flex-1">
                  <label htmlFor="">الي</label>
                  <input
                  className="flex-1"
                    type="date"
                    onChange={(e) =>
                      setPartyData(party.id, { endDate: e.target.value })
                    }
                  />
                </div>
              </div>
              {/* <textarea
                  value={party.value}
                  onChange={(e) => setPartyData(party.id, e.target.value)}
                  className="w-full  min-h-[100px]"
                  name=""
                  id=""
                ></textarea> */}
            </div>
            {index == parties.length - 1 && parties.length > 1 && (
              <button
                onClick={() => removeParty(party)}
                className="bg-red-500 text-white p-2 h-auto font-medium"
              >
                حذف
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Parties;
