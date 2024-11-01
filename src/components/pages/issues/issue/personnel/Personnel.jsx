import PersonSelector from "@/components/shared/personSelector/PersonSelector";
import React from "react";

const Personnel = ({ lawyer, admin }) => {
  return (
    <div className="simple-div">
      {/* lawyer !*/}
      <div className="simple-input bg-bgGreen p-4">
        <label htmlFor="">المشرف القائم على القضية</label>
        <PersonSelector />
      </div>
      {/* helper !*/}
      <div className="simple-input bg-bgGreen p-4">
        <label htmlFor="">المحامي المسند إليه القضية</label>
        <PersonSelector />
      </div>
    </div>
  );
};

export default Personnel;
