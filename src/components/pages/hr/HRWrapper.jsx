"use client";
import React, { useRef, useState } from "react";
// import "./style/issueDetails.css";
// import Sessions from "./sessions/Sessions";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import Personnel from "./personnel/Personnel";
import { useDispatch, useSelector } from "react-redux";
import issuesData from "@/fakeData/issuesData.json";
// import Parties from "./parties/Parties";
// import Appointments from "./appointments/Appointments";
// import VisitsTable from "./visits/VisitsTable";
// import CallsTable from "./calls/CallsTable";
import { togglePrintContractPopup } from "@/globalState/Features/popupsSlice";
import HRTable from "./HRTable";
import VacationsTable from "./vacations/VacationsTable";
import { resetFormState } from "@/globalState/Features/formStateSlice";
import LicensesTable from "./licenses/LicensesTable";
import Attendance from "./Attendance/Attendance";
import CurrentAttendance from "./currentAttendance/CurrentAttendance";
import SectionSwiper from "@/components/shared/sectionSwiper/SectionSwiper";

const HRWrapper = ({ id }) => {
  const [active, setActive] = useState(0);
  const outerSwiperRef = useRef(null);
  const innnerSwiperRef = useRef(null);
  const dispatch = useDispatch();
  const issueDetails = issuesData.find((issue) => issue.id == id);
  console.log(active);

  const sections = [
    {
      title: "الموظفين",
      ele: <HRTable />,
    },
    {
      title: "حضور اليوم",
      ele: <CurrentAttendance />,
    },
    {
      title: "الحضور والانصراف",
      ele: <Attendance />,
    },
    {
      title: "الاجازات",
      ele: <VacationsTable />,
    },
    {
      title: "الرخص",
      ele: <LicensesTable />,
    },
  ];

  return <SectionSwiper autoHeight={false} sections={sections} />;
};
export default HRWrapper;
