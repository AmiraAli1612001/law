import React from "react";

const Notification = ({ children }) => {
  return <li className="flex  gap-1 border-b pb-1">{children}</li>;
};

const Notifications = () => {
  return (
    <div className="bg-bgGray p-4 flex flex-col rounded-2xl justify-between border drop-shadow-sm min-w-[250px] max-h-[500px]">
      <h3 className="text-lg font-semibold">ابرز الاشعارات</h3>
      <ul className="bg-white p-4 rounded-2xl mt-4 flex-1 border flex flex-col gap-4">
        {/* <li className="p-4 flex justify-center items-center gap-4 font-medium">
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5004 15.9561C9.83377 16.9561 9.00043 17.4561 8.00043 17.4561C6.50043 17.4561 6.16743 16.9561 5.50043 15.9561M13.0854 14.4561H2.91543C2.62327 14.4562 2.33631 14.3788 2.08388 14.2317C1.83146 14.0846 1.62261 13.8731 1.4787 13.6188C1.33479 13.3645 1.26097 13.0766 1.26479 12.7845C1.26861 12.4924 1.34993 12.2065 1.50043 11.9561C2.48308 10.3208 3.00165 8.44881 3.00043 6.54105V5.45605C3.00043 4.39519 3.42186 3.37777 4.17201 2.62763C4.92215 1.87748 5.93957 1.45605 7.00043 1.45605H9.00043C10.0613 1.45605 11.0787 1.87748 11.8289 2.62763C12.579 3.37777 13.0004 4.39519 13.0004 5.45605V6.54105C13.0004 8.44805 13.5184 10.3211 14.5004 11.9561C14.6509 12.2065 14.7323 12.4924 14.7361 12.7845C14.7399 13.0766 14.6661 13.3645 14.5222 13.6188C14.3783 13.8731 14.1694 14.0846 13.917 14.2317C13.6646 14.3788 13.3776 14.4562 13.0854 14.4561Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>لا توجد اشعارات</span>
        </li> */}
        <Notification>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 20 20"
          >
            <rect width="20" height="20" fill="none" />
            <path
              fill="#34A853"
              d="M10.6 9c-.4-.1-.8-.3-1.1-.6c-.3-.1-.4-.4-.4-.6s.1-.5.3-.6c.3-.2.6-.4.9-.3c.6 0 1.1.3 1.4.7l.9-1.2c-.3-.3-.6-.5-.9-.7s-.7-.3-1.1-.3V4H9.4v1.4c-.5.1-1 .4-1.4.8c-.4.5-.7 1.1-.6 1.7c0 .6.2 1.2.6 1.6c.5.5 1.2.8 1.8 1.1c.3.1.7.3 1 .5c.2.2.3.5.3.8q0 .45-.3.9c-.3.3-.7.4-1 .4c-.4 0-.9-.1-1.2-.4c-.3-.2-.6-.5-.8-.8l-1 1.1c.3.4.6.7 1 1c.5.3 1.1.6 1.7.6V16h1.1v-1.5c.6-.1 1.1-.4 1.5-.8c.5-.5.8-1.3.8-2c0-.6-.2-1.3-.7-1.7c-.5-.5-1-.8-1.6-1M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m0 14.9c-3.8 0-6.9-3.1-6.9-6.9S6.2 3.1 10 3.1s6.9 3.1 6.9 6.9s-3.1 6.9-6.9 6.9"
            />
          </svg>
          <div className="text-base">
            <span className="text-green-700 font-bold text-sm">1,500 ريال</span>
            {" - "}
            <span>ايراد عقد</span>
            <p className="text-sm font-bold text-gray-500">2024-01-01</p>
          </div>
        </Notification>
        <Notification>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="#b91c1c"
              d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.39.08-.75.21-1.1.36l1.51 1.51c.32-.08.69-.13 1.09-.13M5.47 3.92L4.06 5.33L7.5 8.77c0 2.08 1.56 3.22 3.91 3.91l3.51 3.51c-.34.49-1.05.91-2.42.91c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.83-.55 2.46-1.12l2.22 2.22l1.41-1.41z"
            />
          </svg>
          <div className="text-base">
            <span className="text-red-700 font-bold text-sm">300 ريال</span>
            {" - "}
            <span>تكاليف عقد</span>
            <p className="text-sm font-bold text-gray-500">2024-01-01</p>
          </div>
        </Notification>
        <Notification>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 20 20"
          >
            <rect width="20" height="20" fill="none" />
            <path
              fill="#34A853"
              d="M10.6 9c-.4-.1-.8-.3-1.1-.6c-.3-.1-.4-.4-.4-.6s.1-.5.3-.6c.3-.2.6-.4.9-.3c.6 0 1.1.3 1.4.7l.9-1.2c-.3-.3-.6-.5-.9-.7s-.7-.3-1.1-.3V4H9.4v1.4c-.5.1-1 .4-1.4.8c-.4.5-.7 1.1-.6 1.7c0 .6.2 1.2.6 1.6c.5.5 1.2.8 1.8 1.1c.3.1.7.3 1 .5c.2.2.3.5.3.8q0 .45-.3.9c-.3.3-.7.4-1 .4c-.4 0-.9-.1-1.2-.4c-.3-.2-.6-.5-.8-.8l-1 1.1c.3.4.6.7 1 1c.5.3 1.1.6 1.7.6V16h1.1v-1.5c.6-.1 1.1-.4 1.5-.8c.5-.5.8-1.3.8-2c0-.6-.2-1.3-.7-1.7c-.5-.5-1-.8-1.6-1M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m0 14.9c-3.8 0-6.9-3.1-6.9-6.9S6.2 3.1 10 3.1s6.9 3.1 6.9 6.9s-3.1 6.9-6.9 6.9"
            />
          </svg>
          <div className="text-base">
            <span className="text-green-700 font-bold text-sm">1,500 ريال</span>{" - "}
            <span>ايراد عقد</span>
            <p className="text-sm font-bold text-gray-500">2024-01-01</p>
          </div>
        </Notification>
      </ul>
    </div>
  );
};

export default Notifications;
