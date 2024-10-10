import React from "react";

const Parties = ({ defendant, prosecutor }) => {
  return (
    <div className="simple-div">
      <div>
        <label htmlFor="">المدعي</label>
        <textarea>{prosecutor}</textarea>
      </div>
      <div>
        <label htmlFor="">المدعي عليه</label>
        <textarea>{defendant}</textarea>
      </div>
    </div>
  );
};

export default Parties;
