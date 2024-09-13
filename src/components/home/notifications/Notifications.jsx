import React from "react";

const Notifications = () => {
  return (
    <div className="bg-bgGray p-4 w-full flex flex-col h-full rounded-2xl justify-between">
      <h3 className="text-xl font-semibold">ابرز الاشعارات</h3>
      <ul className="bg-white p-4 rounded-2xl mt-4">
        <li className="p-4 flex justify-center items-center gap-4 font-medium">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5004 15.9561C9.83377 16.9561 9.00043 17.4561 8.00043 17.4561C6.50043 17.4561 6.16743 16.9561 5.50043 15.9561M13.0854 14.4561H2.91543C2.62327 14.4562 2.33631 14.3788 2.08388 14.2317C1.83146 14.0846 1.62261 13.8731 1.4787 13.6188C1.33479 13.3645 1.26097 13.0766 1.26479 12.7845C1.26861 12.4924 1.34993 12.2065 1.50043 11.9561C2.48308 10.3208 3.00165 8.44881 3.00043 6.54105V5.45605C3.00043 4.39519 3.42186 3.37777 4.17201 2.62763C4.92215 1.87748 5.93957 1.45605 7.00043 1.45605H9.00043C10.0613 1.45605 11.0787 1.87748 11.8289 2.62763C12.579 3.37777 13.0004 4.39519 13.0004 5.45605V6.54105C13.0004 8.44805 13.5184 10.3211 14.5004 11.9561C14.6509 12.2065 14.7323 12.4924 14.7361 12.7845C14.7399 13.0766 14.6661 13.3645 14.5222 13.6188C14.3783 13.8731 14.1694 14.0846 13.917 14.2317C13.6646 14.3788 13.3776 14.4562 13.0854 14.4561Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>لا توجد اشعارات</span>
        </li>
      </ul>
    </div>
  );
};

export default Notifications;
