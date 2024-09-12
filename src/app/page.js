import Appointments from "@/components/home/appointments/Appointments";
import InfoBar from "@/components/home/infoBar/InfoBar";
import Notifications from "@/components/home/notifications/Notifications";
import Services from "@/components/home/services/Services";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";

export default function Home() {
  return (
    <div className="h-full flex-1 my-8">
      <ScreenWrapper className={"flex flex-col gap-4 text-gray-600"}>
        <div className="flex w-full gap-4 h-48">
          <div className="w-3/5 h-full">
            <InfoBar />
          </div>
          <div className="w-2/5 h-full">
            <Notifications />
          </div>
        </div>
        <div className="flex w-full gap-4 h-[480px]">
          <div className="w-3/5 h-full">
            <Services />
          </div>
          <div className="w-2/5 h-full">
            <Appointments />
          </div>
        </div>
      </ScreenWrapper>
    </div>
  );
}
