import React, { useRef, useState } from "react";

const Parties = () => {
  const currentNumber = useRef(0);
  const [parties, setParties] = useState([
    { id: 0, value: "mohammed ahmed mahmoud" },
  ]);
  function addParty() {
    setParties([...parties, { id: currentNumber.current + 1, value: "" }]);
    currentNumber.current++;
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
        <div key={index} className="flex justify-between items-center ">
          <div className="flex-1">
            <h4>
              الطرف <span>{index + 1}</span>
            </h4>
            <div className="flex rounded  overflow-hidden">
              {index === parties.length - 1 && (
                <button
                  onClick={addParty}
                  className="bg-textGreen text-white p-2 h-auto font-medium"
                >
                  اضافة <br /> طرف
                </button>
              )}
              <div
                dir="ltr"
                className="flex-1 h-auto [&>div]:rounded-t flex min-h-[100px] flex-col"
              >
                {/* <div id={`contract-party-toolbar-${party.id}`}>
                  <span className="ql-formats">
                    <select className="ql-font"></select>
                    <select className="ql-size"></select>
                  </span>
                  <span className="ql-formats">
                    <button className="ql-bold"></button>
                    <button className="ql-italic"></button>
                    <button className="ql-underline"></button>
                    <button className="ql-strike"></button>
                  </span>
                  <span className="ql-formats">
                    <select className="ql-color"></select>
                    <select className="ql-background"></select>
                  </span>
                  <span className="ql-formats">
                    <button className="ql-script" value="sub"></button>
                    <button className="ql-script" value="super"></button>
                  </span>
                  <span className="ql-formats">
                    <button className="ql-header" value="1"></button>
                    <button className="ql-header" value="2"></button>
                    <button className="ql-blockquote"></button>
                    <button className="ql-code-block"></button>
                  </span>
                  <span className="ql-formats">
                    <button className="ql-list" value="ordered"></button>
                    <button className="ql-list" value="bullet"></button>
                    <button className="ql-indent" value="-1"></button>
                    <button className="ql-indent" value="+1"></button>
                  </span>
                  <span className="ql-formats">
                    <button className="ql-direction" value="rtl"></button>
                    <select className="ql-align"></select>
                  </span>
                  <span className="ql-formats">
                    <button className="ql-link"></button>
                    <button className="ql-image"></button>
                    <button className="ql-video"></button>
                  </span>
                  <span className="ql-formats">
                    <button className="ql-clean"></button>
                  </span>
                </div> */}
                {/* <ReactQuill
                  modules={{
                    toolbar: `#contract-party-toolbar-${party.id}`,
                  }}
                  id={`contract-party-${party.id}`}
                  theme="snow"
                  value={party.value}
                  onChange={(e) => setPartyData(party.id, e)}
                /> */}
                <textarea
                  value={party.value}
                  onChange={(e) => setPartyData(party.id, e.target.value)}
                  className="w-full  min-h-[100px]"
                  name=""
                  id=""
                ></textarea>
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
        </div>
      ))}
    </div>
  );
};

export default Parties;
