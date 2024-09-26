const Countdown = dynamic(
  () => import("@/components/shared/countDown/CountDown"),
  {
    ssr: false,
  }
);
// import Countdown from "@/components/shared/countDown/CountDown";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const IssueRow = ({
  data: {
    id,
    date,
    type,
    character,
    prosecutor,
    defendant,
    status: issueStatus,
  },
}) => {
  // const cellStyles =;
  return (
    <div className="shadow flex flex-col w-full">
      <div className="flex w-full flex-col lg:flex-row gap-1 issueRow shadow rounded-lg relative cursor-pointer">
        <button
          className={`p-4 h-full flex items-center justify-center bg-[#FAF9F4] bg-textGreen cursor-pointer order-12 lg:order-none`}
          onClick={(e) => {
            // console.log(e.target.parentElement.parentElement);
            e.target.parentElement.nextElementSibling.classList.toggle(
              "issueInnerDetailsWrapper"
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            className="pointer-events-none"
          >
            <rect width="24" height="24" fill="none" />
            <path
              d="M12 6L12 18M12 18L17 13M12 18L7 13"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className={` bg-[#FAF9F4]`}>
          <p>رقم القضية</p>
          <p className="text-2xl row-data-content">{id}</p>
        </div>
        <div>
          <p>تاريخ القضية</p>
          <p>{date}</p>
        </div>
        <div>
          <p>نوع القضية</p>
          <p className="row-data-content">{type}</p>
        </div>
        <div>
          <p>الصفة</p>
          <p className="row-data-content">{character}</p>
        </div>
        <div>
          <p>المدعي</p>
          <p className="row-data-content">{prosecutor}</p>
        </div>
        <div>
          <p>المدعي علية</p>
          <p className="row-data-content">{defendant}</p>
        </div>
        <div>
          <p>الحالة</p>
          <p className="row-data-content">{issueStatus}</p>
        </div>
        <Link className="absolute left-2 top-2" href={`/issues/${id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            className="text-[#34A853] "
          >
            <path
              fill="#34A853"
              d="M138 180a10 10 0 1 1-10-10a10 10 0 0 1 10 10M128 74c-21 0-38 15.25-38 34v4a6 6 0 0 0 12 0v-4c0-12.13 11.66-22 26-22s26 9.87 26 22s-11.66 22-26 22a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-2.42c18.11-2.58 32-16.66 32-33.58c0-18.75-17-34-38-34m102 54A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90"
            />
          </svg>
        </Link>
      </div>
      <div className="issueInnerDetailsWrapper overflow-hidden py-4 w-fit">
        <h4 className="text-textGreen font-medium text-2xl">اخر التحديثات</h4>
        <div className="flex gap-4">
          <div className="border-textGreen border [&>*]:p-4 rounded">
            <section className="!pb-0">
              <h3 className="text-textGreen font-medium text-lg">غير نهائي</h3>
            </section>
            <ul className="issueInnerDetails flex flex-col gap-1">
              <li>
                <p>رقك الصك</p>
                <p>10100110</p>
              </li>
              <li>
                <p>صفة الحكم</p>
                <p>حكم منهي للخصومة</p>
              </li>
            </ul>
            <section className="flex justify-between gap-4 border-t border-gray-400">
              <div className="flex items-center gap-1 text-xs">
                <p>تاريخ اصدار الحكم</p>
                <Countdown targetDate={"2024-10-10"} />
              </div>
              <h5 className="text-textGreen font-medium">الدرجة الاولي</h5>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueRow;
