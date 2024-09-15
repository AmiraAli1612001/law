import React from "react";
import InfoItem from "./infoItem/InfoItem";
import Link from "next/link";

const InfoBar = () => {
  return (
    <div className="bg-bgGray p-4 pb-2 gap-4  h-full rounded-2xl flex flex-col md:flex-row">
      <div className="flex flex-col ">
        <h3 className="text-xl">الملف العدلي</h3>
        <p className="max-w-52">كل ما يخص معلوماتك العدلية</p>
      </div>
      <div className="flex gap-1.5 py-3 flex-col md:flex-row flex-1">
        <ul className="h-full  flex gap-1.5">
          <InfoItem to="/issues" title="قائمة القضايا">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#34A853"
            >
              <path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
            </svg>
          </InfoItem>
          <InfoItem title="قائمة العقود">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#34A853"
                stroke-linecap="round"
                stroke-width="2"
                d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
              />
            </svg>
          </InfoItem>
          <InfoItem title="قائمة المهام">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#34A853"
            >
              <path d="M360-600v-80h360v80H360Zm0 120v-80h360v80H360Zm120 320H200h280Zm0 80H240q-50 0-85-35t-35-85v-120h120v-560h600v361q-20-2-40.5 1.5T760-505v-295H320v480h240l-80 80H200v40q0 17 11.5 28.5T240-160h240v80Zm80 0v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
            </svg>
          </InfoItem>
        </ul>
        <Link
          href={"/"}
          className="flex w-full flex-1  relative gap-1 text-center items-center justify-center bg-[#435363] md:w-fit p-2 rounded-2xl flex-col text-white font-medium"
        >
          <p className="whitespace-nowrap">مشاهدة الكل</p>
          <svg
            width="34"
            height="35"
            viewBox="0 0 34 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <circle cx="17.3204" cy="17.3985" r="16.6505" fill="white" />
            <path
              d="M26.4006 16.9213C26.4006 17.2096 26.2861 17.4861 26.0822 17.69C25.8783 17.8939 25.6018 18.0084 25.3135 18.0084H11.9964L16.6637 22.6748C16.8679 22.879 16.9827 23.156 16.9827 23.4449C16.9827 23.7337 16.8679 24.0107 16.6637 24.2149C16.4595 24.4191 16.1825 24.5338 15.8937 24.5338C15.6049 24.5338 15.3279 24.4191 15.1236 24.2149L8.60099 17.6922C8.49965 17.5912 8.41923 17.4712 8.36436 17.3391C8.30949 17.2069 8.28125 17.0653 8.28125 16.9222C8.28125 16.7791 8.30949 16.6374 8.36436 16.5053C8.41923 16.3732 8.49965 16.2532 8.60099 16.1522L15.1236 9.62951C15.2248 9.52838 15.3448 9.44817 15.4769 9.39344C15.6091 9.33871 15.7507 9.31055 15.8937 9.31055C16.0367 9.31055 16.1783 9.33871 16.3104 9.39344C16.4425 9.44817 16.5626 9.52838 16.6637 9.62951C16.7648 9.73063 16.8451 9.85068 16.8998 9.9828C16.9545 10.1149 16.9827 10.2565 16.9827 10.3995C16.9827 10.5426 16.9545 10.6842 16.8998 10.8163C16.8451 10.9484 16.7648 11.0685 16.6637 11.1696L11.9964 15.8342H25.3135C25.6018 15.8342 25.8783 15.9487 26.0822 16.1526C26.2861 16.3565 26.4006 16.633 26.4006 16.9213Z"
              fill="#435363"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default InfoBar;
