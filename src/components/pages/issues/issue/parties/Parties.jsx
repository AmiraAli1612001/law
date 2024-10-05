import React from "react";

const Parties = ({ defendant, prosecutor }) => {
  return (
    <div className="simple-div">
      <div>
        <label htmlFor="">المدعي</label>
        <section>{prosecutor}</section>
      </div>
      <div>
        <label htmlFor="">المدعي عليه</label>
        <section>{defendant}</section>
      </div>
    </div>
  );
};

export default Parties;
