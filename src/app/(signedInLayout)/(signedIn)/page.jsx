import Appointments from "@/components/pages/home/appointments/Appointments";
import InfoBar from "@/components/pages/home/infoBar/InfoBar";
import Notifications from "@/components/pages/home/notifications/Notifications";
import Services from "@/components/pages/home/services/Services";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";

export default function Home() {
  return (
    <div className="h-full flex-1 my-8 flex flex-col">
      {/* <ScreenWrapper className={"flex flex-1 flex-col gap-4 text-gray-600"}> */}
      <ScreenWrapper
        className={"grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-600"}
      >
        <div className="flex flex-col gap-4">
          <InfoBar />
          <Services />
        </div>
        <div className="flex flex-col gap-4">
          <Notifications />
          <Appointments />
        </div>
        {/* <div className="flex flex-col lg:flex-row w-full gap-4 ">
          <div className="lg:w-3/5 flex h-fit">
            <InfoBar />
          </div>
          <div className="lg:w-2/5 flex ">
            <Notifications />
          </div>
        </div>
        <div className="flex flex-1 flex-col lg:flex-row w-full gap-4">
          <div className="lg:w-3/5 flex">
            <Services />
          </div>
          <div className="lg:w-2/5 flex">
            <Appointments />
          </div>
        </div> */}
      </ScreenWrapper>
    </div>
  );
}
