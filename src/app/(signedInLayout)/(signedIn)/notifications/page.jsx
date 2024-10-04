import NotificationsTable from "@/components/pages/notifications/NotificationsTable";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
import React from "react";

const Notifications = () => {
  return (
    <ScreenWrapper className="py-4">
      <NotificationsTable />
    </ScreenWrapper>
  );
};

export default Notifications;
