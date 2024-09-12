import React from "react";
import InfoItem from "./infoItem/InfoItem";

const InfoBar = () => {
  return (
    <div className="bg-bgGray p-4 flex gap-4 items-center h-full rounded">
      <div className="flex flex-col ">
        <h3 className="text-xl">الملف العدلي</h3>
        <p className="max-w-52">كل ما يخص معلوماتك العدلية من القضاء والوكالات والخدمات</p>
      </div>
      <ul className="h-full py-3">
        <InfoItem/>
      </ul>
    </div>
  );
};

export default InfoBar;
