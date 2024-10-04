import Link from "next/link";
import React from "react";

const NotificationElement = ({
  data: { id, eventId, amount, type, status, date, name },
}) => {
  return (
    <Link href={`/`} className="simple-row flex items-center p-4 gap-3 hover:bg-hoverBg transition-all duration-75">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 36 36"
        className={status ? "text-green-500" : "text-red-500"}
      >
        <rect width="36" height="36" fill="none" />
        <path
          fill="currentColor"
          d="M32.51 27.83A14.4 14.4 0 0 1 30 24.9a12.6 12.6 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.6 12.6 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93a1 1 0 0 0-.34.75v1.36a1 1 0 0 0 1 1h27.8a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-.34-.75M5.13 28.94a16.2 16.2 0 0 0 2.44-3a14.2 14.2 0 0 0 1.65-5.85v-4.94a8.74 8.74 0 1 1 17.47 0v4.94a14.2 14.2 0 0 0 1.65 5.85a16.2 16.2 0 0 0 2.44 3Z"
          class="clr-i-outline clr-i-outline-path-1"
        />
        <path
          fill="currentColor"
          d="M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28"
          class="clr-i-outline clr-i-outline-path-2"
        />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
      <div className="w-6">{id}</div>
      <div className="flex gap-1">
        <span className="w-12">{status ? "اضاف" : "حذف"}</span>
        <span>{name}</span>
        <span className={`${status ? "text-green-500" : "text-red-500"} font-semibold text-sm`}>({amount} {type})</span>
      </div>
    </Link>
  );
};

export default NotificationElement;