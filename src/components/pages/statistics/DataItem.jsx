"use client";
import React from "react";

const DataItem = ({title,value}) => {
  return (
    <div onClick={() => console.log(title)} className="bg-whtie flex flex-col rounded  yn-shadow p-4 text-gray-800 cursor-pointer border-green-100 border">
      <p>{title}</p>
      <h3 className="text-3xl font-bold">{value}</h3>
    </div>
  );
};

export default DataItem;
