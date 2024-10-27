import React from "react";

const Parties = ({ defendant, prosecutor }) => {
  return (
    <div className="simple-div">
      <div>
        <label htmlFor="">المدعي</label>
        <textarea className="text-red-500">{prosecutor}</textarea>
      </div>
      <div>
        <label htmlFor="">المدعي عليه</label>
        <textarea className="text-green-500">{defendant}</textarea>
      </div>
    </div>
  );
};

export default Parties;
