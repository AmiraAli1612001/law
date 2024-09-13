import React from "react";

const InfoItem = ({children,title}) => {
  return (
    <li className="flex relative gap-1 items-center justify-center bg-white w-fit h-full p-6 rounded-2xl flex-col drop-shadow">
      <span className="drop-shadow aspect-square absolute top-0 -translate-y-1/2 text-iconGreen p-2 bg-white rounded-full flex items-center">
        {children}
      </span>

      <p className="text-center">{title}</p>
      <h4 className="text-2xl font-bold">10</h4>
    </li>
  );
};

export default InfoItem;
