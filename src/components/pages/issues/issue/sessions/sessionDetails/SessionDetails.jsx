"use client";
import React from "react";
import "./style/issueDetails.css";

import Link from "next/link";
import SectionSwiper from "@/components/shared/sectionSwiper/SectionSwiper";
import Personnel from "./personnel/Personnel";
import { useDispatch } from "react-redux";
import { toggleAttachmentsPopup } from "@/globalState/Features/popupsSlice";

const SessionDetails = ({ id = 1 }) => {
  const dispatch = useDispatch()
  const sections = [
    {
      title: "ملخص الجلسة",
      ele: (
        <div className="simple-div">
          <div className="p-2">
            <span>اخر تحديث: </span>
            <Link
              href={"/hr/1"}
              className="font-semibold underline text-blue-700"
            >
              محمد ابارهيم
            </Link>
          </div>
          <section name="" disabled id="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            eveniet, tempora hic rerum nobis error obcaecati vel enim molestiae,
            fugit eligendi numquam ad quod magnam atque nam, veniam iste.
            Quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dolorum eveniet, tempora hic rerum nobis error obcaecati vel enim
            molestiae, fugit eligendi numquam ad quod magnam atque nam, veniam
            iste. Quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Dolorum eveniet, tempora hic rerum nobis error obcaecati vel
            enim molestiae, fugit eligendi numquam ad quod magnam atque nam,
            veniam iste. Quisquam. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolorum eveniet, tempora hic rerum nobis error
            obcaecati vel enim molestiae, fugit eligendi numquam ad quod magnam
            atque nam, veniam iste. Quisquam.
          </section>
        </div>
      ),
    },
    {
      title: "التاريخ و الوقت",
      ele: (
        <table className="simple-table">
          <thead>
            <tr>
              <th>التاريخ</th>
              <th>الوقت</th>
              <th>الموظف</th>
              <th>الحالة</th>
              <th>الملاحظات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-10-10</td>
              <td>10:00</td>
              <td>علي عبدالله</td>
              <td>قيد الدراسة</td>
              <td>لا يوجد</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      title: "التنفيذ",
      ele: (
        <div className="simple-div">
          <label htmlFor="">ملاحظات</label>
          <section name="" disabled id="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            eveniet, tempora hic rerum nobis error obcaecati vel enim molestiae,
            fugit eligendi numquam ad quod magnam atque nam, veniam iste.
            Quisquam.
          </section>
        </div>
      ),
    },
    {
      title: "المحامي الحاضر",
      ele: (
        // <div>
        //   {/* lawyer !*/}
        //   <div className="simple-input bg-bgGreen p-4">
        //     <label htmlFor="">المحامي المسند إليه القضية</label>
        //     <PersonSelector defaultValue="mohamed abdullah" />
        //   </div>
        //   {/* helper !*/}
        //   <div className="simple-input bg-bgGreen p-4">
        //     <label htmlFor="">المحامي المساعد</label>
        //     <PersonSelector defaultValue="mohamed abdullah" />
        //   </div>
        // </div>
        <Personnel admin={"احمد"} lawyer={"محمد"} />
      ),
    },
    {
      title: "تقرير الجلسة",
      ele: (
        <div className="simple-div">
          <section>
            <button onClick={()=>dispatch(toggleAttachmentsPopup("/files/تقرير جلسة.pdf"))} className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 h-fit py-2 rounded text-sm text-center">
              عرض
            </button>
          </section>
        </div>
      ),
    },
    {
      title: "الملاحظات",
      ele: (
        <div className="simple-div">
          <section name="" disabled id="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            eveniet, tempora hic rerum nobis error obcaecati vel enim molestiae,
            fugit eligendi numquam ad quod magnam atque nam, veniam iste.
            Quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dolorum eveniet, tempora hic rerum nobis error obcaecati vel enim
            molestiae, fugit eligendi numquam ad quod magnam atque nam, veniam
            iste. Quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Dolorum eveniet, tempora hic rerum nobis error obcaecati vel
            enim molestiae, fugit eligendi numquam ad quod magnam atque nam,
            veniam iste. Quisquam. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolorum eveniet, tempora hic rerum nobis error
            obcaecati vel enim molestiae, fugit eligendi numquam ad quod magnam
            atque nam, veniam iste. Quisquam.
          </section>
        </div>
      ),
    },
  ];

  return <SectionSwiper sections={sections} />;
};

export default SessionDetails;
