import React from "react";

const Personnel = ({ lawyer, admin }) => {
  return (
    <div className="simple-div">
      <div c>
        <label htmlFor="">المشرف القائم على القضية</label>
        <textarea>{admin}</textarea>
      </div>
      <div>
        <label htmlFor="">المحامي المسند إليه القضية</label>
        <textarea>{lawyer}</textarea>
      </div>
    </div>
  );
};

export default Personnel;
