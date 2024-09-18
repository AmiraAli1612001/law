import React from "react";

const HRRow = ({ data: { id, name, title, department, status } }) => {
  // console.log(data)
  // const cellStyles =;
  //bg-[#FAF9F4]
  return (
    <div className="">
      <div
        className={`bg-bgGreen flex gap-2 p-4 items-center HR-row rounded-lg relative`}
      >
        <div className={`min-w-[100px] max-w-[20%] `}>
          <p className="text-base ">{id}</p>
        </div>
        <div className="row-data-content">
          <p className="">{name}</p>
        </div>
        <div className="row-data-content">
          <p className="">{title}</p>
        </div>
        <div className="row-data-content">
          <p className="">{department}</p>
        </div>
        <div className="row-data-content">
          <p className="">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default HRRow;
