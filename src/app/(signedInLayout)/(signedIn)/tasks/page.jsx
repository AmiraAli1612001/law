"use client";
import AddRecord from "@/components/shared/addRecord/AddRecord";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { toast } from "react-toastify";
const Issues = () => {
  const handleDateClick = (arg) => {
    toast(arg.dateStr);
  };
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
            { title: "event 1", date: "2024-09-09" },
            { title: "event 2", date: "2024-09-16" },
          ]}
          dateClick={handleDateClick}
          eventContent={renderEventContent}
        />
      </div>
    </ScreenWrapper>
  );
};
function renderEventContent(eventInfo) {
  console.log(eventInfo)
  return (
    <div className="flex flex-col gap-1">
      <b>{eventInfo.event.title}</b>
      <i>{eventInfo.event.startStr}</i>
    </div>
  );
}
export default Issues;
