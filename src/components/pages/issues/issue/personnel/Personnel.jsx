import React from "react";

const Personnel = ({ lawyer, admin }) => {
  return (
    <div className="simple-div">
      <div c>
        <label htmlFor="">المشرف القائم على القضية</label>
        <section>{admin}</section>
      </div>
      <div>
        <label htmlFor="">المحامي المسند إليه القضية</label>
        <section>{lawyer}</section>
      </div>
    </div>
  );
};

export default Personnel;
