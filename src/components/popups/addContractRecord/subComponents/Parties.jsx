import React, { useRef, useState } from "react";
import HRData from "@/fakeData/HRData.json";
import { useDispatch } from "react-redux";
import { toggleAddRecordPopup, toggleEditEmployee } from "@/globalState/Features/popupsSlice";
const Party = ({
  last = false,
  removeParty,
  addParty,
  index,
  party,
  length,
}) => {
  const [nameInput, setNameInput] = useState("");
  const dispatch = useDispatch()
  function handleAddClient(){
    dispatch(toggleAddRecordPopup("addClient"))
  }
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
          {/* search type */}
          <select name="" id="">
            <option value="" className="hidden">
              طريقة التحديد
            </option>
            <option value="">اسم العميل</option>
            <option value="">رقم العميل</option>
            <option value="">هاتف العميل</option>
          </select>
          {/* search input */}
          <input
            type="text"
            name=""
            placeholder="بحث"
            id=""
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          {/* results list */}
          <select name="" id="" className="max-h-[100px]">
            {HRData.filter((e) =>
              e.name.toLowerCase().includes(nameInput.toLowerCase())
            )
              .slice(0, 6)
              .map((client,i) => (
                <option key={i} value={client.id}>{client.name}</option>
              ))}
          </select>
          {/* add btn */}
          {last && (
            <>
              <button
                onClick={handleAddClient}
                className="bg-textGreen hover:opacity-80 text-white transition-all  rounded py-2 px-4 font-medium whitespace-nowrap"
              >
                عميل جديد
              </button>
              <button
                onClick={addParty}
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
            </>
          )}
          {/* <textarea
                  value={party.value}
                  onChange={(e) => setPartyData(party.id, e.target.value)}
                  className="w-full  min-h-[100px]"
                  name=""
                  id=""
                ></textarea> */}
          {/* {index == parties.length - 1 && parties.length > 1 && ( */}
          {(index > 0 || length > 1) && (
            <button
              onClick={() => removeParty(party)}
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
const Parties = () => {
  const currentNumber = useRef(0);
  const [nameInput, setNameInput] = useState("");
  const [parties, setParties] = useState([
    { id: 0, value: "mohammed ahmed mahmoud" },
  ]);
  function addParty() {
    setParties([...parties, { id: ++currentNumber.current, value: "" }]);
    // currentNumber.current++;
  }
  function setPartyData(id, data) {
    setParties(
      parties.map((party) =>
        party.id === id ? { ...party, value: data } : party
      )
    );
  }
  function removeParty(party) {
    setParties(parties.filter((p) => p.id !== party.id));
  }
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">اطراف العقد</h3>
      {parties.map((party, index) => (
        <Party
          length={parties.length}
          key={index}
          party={party}
          last={index == parties.length - 1}
          removeParty={removeParty}
          addParty={addParty}
          index={index}
        />
      ))}
    </div>
  );
};

export default Parties;
