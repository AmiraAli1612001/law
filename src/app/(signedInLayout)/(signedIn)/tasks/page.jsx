"use client";
import AddRecord from "@/components/shared/addRecord/AddRecord";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { toast } from "react-toastify";
import { store } from "@/globalState/store";
import { toggleTask } from "@/globalState/Features/popupsSlice";
const Issues = () => {
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <LinkHeader title={"القضايا"} />
        {/* <AddRecord recordType={1} title={"اضافة قضية"} /> */}
      </div>
      <div>
        {/* <IssuesTable /> */}
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={[
            { title: "جلسة رقم 1", date: "2024-09-09" },
            { title: "event 2", date: "2024-09-16" },
          ]}
          eventContent={renderEventContent}
        />
      </div>
    </ScreenWrapper>
  );
};
function renderEventContent(eventInfo) {
  const handleDateClick = (arg) => {
    // toast.info("ttt");
    store.dispatch(toggleTask())
  };
  return (
    <div className="flex flex-col gap-1 cursor-pointer" onClick={handleDateClick}>
      <b>{eventInfo.event.title}</b>
      <i>9:00 am</i>
      <i>{eventInfo.event.startStr}</i>
    </div>
  );
}
export default Issues;
