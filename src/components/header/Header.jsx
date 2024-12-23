"use client";
import "./header.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavItem from "./navItem/NavItem";
import ScreenWrapper from "../shared/screenWrapper/Wrapper";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleAttendancePopup } from "@/globalState/Features/smallPopupsSlice";
import { resetAuth } from "@/globalState/Features/authSlice";
import { usePathname, useRouter } from "next/navigation";
import { resetFormState } from "@/globalState/Features/formStateSlice";
import {
  toggleAddRecordPopup,
  toggleCurrentAttendance,
} from "@/globalState/Features/popupsSlice";
import CheckIn from "./checkIn/CheckIn";
// import { handleLogout } from "@/helperFunctions/auth";

const Header = () => {
  const [notificationsState, setNotificationsState] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    dispatch(resetFormState());
  }, [pathname]);

  function handleLogout(router) {
    localStorage.removeItem("token")
    router.push("/auth");
  }
  return (
    <>
      {/* top header */}
      <header className="bg-bgGreen text-3xl  z-[60]">
        <ScreenWrapper className={"relative z-50"}>
          <section className="flex items-center py-4 justify-between">
            {/* right logo wrapper */}
            <div className="flex items-center gap-4">
              <Image
                //C:\Users\yousef\Desktop\mohamed al-swaify\law-firm\public\images\logos\صقور الشعار.png
                src={"/images/logos/صقور الشعار.png"}
                alt="saudi logo"
                width={160}
                height={0}
              />
              <div className="relative w-fit rounded hidden md:block drop-shadow-sm">
                <input
                  type="text"
                  className="text-base p-3 md:min-w-[330px]"
                  placeholder="أكتب هنا للبحث"
                />
                <svg
                  width="20"
                  height="20"
                  className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none "
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_69_42)">
                    <path
                      d="M16.8359 17.0811L13.3922 13.6373M15.2526 9.16439C15.2526 12.6622 12.4171 15.4977 8.91927 15.4977C5.42147 15.4977 2.58594 12.6622 2.58594 9.16439C2.58594 5.66658 5.42147 2.83105 8.91927 2.83105C12.4171 2.83105 15.2526 5.66658 15.2526 9.16439Z"
                      stroke="#7CB09D"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_69_42">
                      <rect
                        width="19"
                        height="19"
                        fill="white"
                        transform="translate(0.210938 0.456055)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            {/* left nav wrapper */}
            <div className="flex items-center  gap-4">
              {/* current attendance */}
              {/* <button
                onClick={() => dispatch(toggleCurrentAttendance())}
                className="text-base items-center gap-2 bg-white p-2 rounded drop-shadow-sm h-10 cursor-pointer hidden md:flex"
              >
                الحضور الحالي
              </button> */}
              {/* attendance */}
              <CheckIn />
              {/* user */}
              <div
                // href="/hr/1"
                onClick={() => setProfileMenu(!profileMenu)}
                className="hidden lg:flex items-center  gap-2 bg-white p-2 rounded h-10 drop-shadow-sm relative cursor-pointer"
              >
                <div className="text-[#048D5A] text-base flex gap-1">
                  <p>مرحبا /</p>
                  <p>ابراهيم</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="gray"
                    d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1s1-4 6-4s6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                  />
                </svg>
                <div
                  className={`${
                    profileMenu ? "!max-h-96 " : " "
                  } flex flex-col gap-4 max-h-0 bg-white absolute left-0 top-full cursor-default translate-y-2 z-50 drop-shadow overflow-hidden  transition-all`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ul className="">
                    <li>
                      <Link
                        href={"/hr/1"}
                        className="text-base  border-b hover:bg-[#008f5b0f] transition-all p-4 hover:scale-110 inline-block w-full"
                      >
                        <div className="flex gap-4 items-center justify-between w-full rounded-xl">
                          <p className="text-xs whitespace-nowrap">
                            الصفحة الشخصية
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          dispatch(toggleAddRecordPopup("requestVacation"))
                        }
                        href={"/hr/1"}
                        className="text-base border-b hover:bg-[#008f5b0f] transition-all p-4 hover:scale-110 inline-block w-full"
                      >
                        <div className="flex gap-4 justify-between w-full items-center rounded-xl">
                          <p className="text-xs whitespace-nowrap">طلب اجازة</p>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="flex gap-4 items-center">
                {/* notifications */}
                <li
                  className="drop-shadow-sm flex items-center justify-center w-10 h-10 rounded cursor-pointer bg-white"
                  onClick={() => setNotificationsState(!notificationsState)}
                >
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {/* notification drop down */}
                  <div
                    className={`${
                      notificationsState ? "!max-h-96 p-4 " : " "
                    } flex flex-col gap-4 max-h-0 bg-white absolute left-0 top-full cursor-default translate-y-2 z-50 drop-shadow overflow-hidden  transition-all`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h4 className="text-base">الاشعارات</h4>
                    <ul className="bg-[#008f5b0f] p-4">
                      <li className="text-base">
                        <Link href={"/issues/1"}>
                          <div className="flex gap-4 items-center">
                            <svg
                              className="text-gray-800 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                            <p className="text-xs whitespace-nowrap">
                              2024/09/15 11:53 AM
                            </p>
                            <div className="relative aspect-square w-fit hover:animate-none">
                              <svg
                                className="w-4 h-4 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                              <span className="absolute -z-10 top-0 right-0 w-full h-full animate-ping bg-green-300 rounded-full"></span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* log out */}
                <li
                  className="drop-shadow-sm hidden md:flex items-center justify-center w-10 h-10 rounded cursor-pointer bg-white"
                  onClick={() => handleLogout(router)}
                >
                  <svg
                    width="38"
                    height="39"
                    viewBox="0 0 38 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1474 19.0584C10.0633 19.1406 10.0139 19.2519 10.0094 19.3694C10.0107 19.3834 10.0087 19.3977 10.0034 19.4124C9.99537 19.4344 10.0034 19.4394 10.0094 19.4534C10.0137 19.5712 10.0631 19.6829 10.1474 19.7654L13.8164 23.4344C13.9107 23.5255 14.037 23.5759 14.1681 23.5747C14.2992 23.5736 14.4246 23.521 14.5173 23.4283C14.61 23.3356 14.6626 23.2102 14.6637 23.0791C14.6648 22.948 14.6144 22.8217 14.5234 22.7274L11.7084 19.9114H22.4504C22.583 19.9114 22.7102 19.8587 22.8039 19.765C22.8977 19.6712 22.9504 19.544 22.9504 19.4114C22.9504 19.2788 22.8977 19.1516 22.8039 19.0578C22.7102 18.9641 22.583 18.9114 22.4504 18.9114H11.7084L14.5234 16.0954C14.6144 16.0011 14.6648 15.8748 14.6637 15.7437C14.6626 15.6126 14.61 15.4872 14.5173 15.3945C14.4246 15.3018 14.2992 15.2492 14.1681 15.2481C14.037 15.2469 13.9107 15.2973 13.8164 15.3884L10.1474 19.0584Z"
                      fill="#D00000"
                    />
                    <path
                      d="M32.6392 25.8618C32.6295 26.207 32.5505 26.5467 32.407 26.8607C32.2634 27.1748 32.0583 27.4568 31.8036 27.69C31.549 27.9231 31.25 28.1028 30.9246 28.2182C30.5992 28.3336 30.2539 28.3825 29.9092 28.3618C27.7562 28.3738 25.6032 28.3618 23.4502 28.3618C23.3176 28.3618 23.1904 28.3092 23.0966 28.2154C23.0029 28.1216 22.9502 27.9944 22.9502 27.8618C22.9502 27.7292 23.0029 27.602 23.0966 27.5083C23.1904 27.4145 23.3176 27.3618 23.4502 27.3618C25.6502 27.3618 27.8502 27.3938 30.0502 27.3618C31.1572 27.3458 31.6392 26.5138 31.6392 25.5238V13.0608C31.6464 12.7462 31.5576 12.4369 31.3847 12.1739C31.2118 11.911 30.9629 11.7069 30.6712 11.5888C30.326 11.4941 29.9667 11.462 29.6102 11.4938H23.4502C23.3176 11.4938 23.1904 11.4412 23.0966 11.3474C23.0029 11.2536 22.9502 11.1264 22.9502 10.9938C22.9502 10.8612 23.0029 10.734 23.0966 10.6403C23.1904 10.5465 23.3176 10.4938 23.4502 10.4938C25.6742 10.4938 27.9152 10.4088 30.1372 10.4938C30.4775 10.5024 30.8126 10.5786 31.1232 10.718C31.4337 10.8573 31.7135 11.057 31.9461 11.3055C32.1788 11.554 32.3597 11.8462 32.4783 12.1653C32.597 12.4843 32.651 12.8237 32.6372 13.1638L32.6392 25.8618Z"
                      fill="#D00000"
                    />
                  </svg>
                </li>
                {/* small screen logo */}
                <li className="drop-shadow-sm flex md:hidden items-center justify-center w-10 h-10 rounded cursor-pointer bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </section>
        </ScreenWrapper>
      </header>
      {/* mid header and adv */}
      <div className="sticky top-0 z-50 drop-shadow">
        {/* mid header nav */}
        <div className="bg-white drop-shadow relative z-40 ">
          <ScreenWrapper className="">
            <section className="">
              <nav>
                <ul className="hidden  md:flex w-full justify-center">
                  <NavItem to={"/"} hasSubList={false} title="لوحة المعلومات">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-icon"
                      width={24}
                      height={24}
                      fill="#7CB09D"
                      // style="vertical-align: middle;fill: currentColor;overflow: hidden;"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                    >
                      <path d="M586.3424 385.536H742.4V281.6h-156.0576v103.936z m-25.6-155.136H768a25.6 25.6 0 0 1 25.6 25.6v155.136a25.6 25.6 0 0 1-25.6 25.6h-207.2576a25.6 25.6 0 0 1-25.6-25.6V256a25.6 25.6 0 0 1 25.6-25.6z m181.6576 512v-206.9504h-156.0576V742.4H742.4z m-207.2576 25.6V509.8496a25.6 25.6 0 0 1 25.6-25.6H768a25.6 25.6 0 0 1 25.6 25.6V768a25.6 25.6 0 0 1-25.6 25.6h-207.2576a25.6 25.6 0 0 1-25.6-25.6z m-97.4848-25.6v-103.936H281.6v103.936h156.0576zM230.4 768v-155.136a25.6 25.6 0 0 1 25.6-25.6h207.2576a25.6 25.6 0 0 1 25.6 25.6V768a25.6 25.6 0 0 1-25.6 25.6H256a25.6 25.6 0 0 1-25.6-25.6z m207.2576-279.4496V281.6H281.6v206.9504h156.0576z m-207.2576 25.6V256a25.6 25.6 0 0 1 25.6-25.6h207.2576a25.6 25.6 0 0 1 25.6 25.6v258.1504a25.6 25.6 0 0 1-25.6 25.6H256a25.6 25.6 0 0 1-25.6-25.6z" />
                    </svg>
                  </NavItem>
                  <NavItem
                    to="/contracts"
                    // subList={[
                    //   { title: "إصدار العقود", to: "/contracts?action=create" },
                    //   { title: "قائمة العقود", to: "/contracts" },
                    //   { title: "العقود المفتوحة", to: "/contracts?filter=open" },
                    // ]}
                    title="العقود"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 22C5.16667 22 4.45833 21.7083 3.875 21.125C3.29167 20.5417 3 19.8333 3 19V16H6V2H21V19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22H6ZM18 20C18.2833 20 18.521 19.904 18.713 19.712C18.905 19.52 19.0007 19.2827 19 19V4H8V16H17V19C17 19.2833 17.096 19.521 17.288 19.713C17.48 19.905 17.7173 20.0007 18 20ZM9 9V7H18V9H9ZM9 12V10H18V12H9ZM6 20H15V18H5V19C5 19.2833 5.096 19.521 5.288 19.713C5.48 19.905 5.71733 20.0007 6 20ZM6 20H5H15H6Z"
                        fill="#7CB09D"
                      />
                    </svg>
                  </NavItem>
                  <NavItem
                    subList={[
                      { title: "جميع القضايا", to: "/issues" },
                      // {
                      //   title: "قضايا الدرجة الأولى",
                      //   to: "/firstDegreeIssues",
                      // },
                      // { title: "قضايا التنفيذ", to: "/executiveIssues" },
                      { title: "البنود", to: "/statements" },
                      { title: "الوكالات", to: "/agencies" },
                    ]}
                    // to="/issues"
                    title="القضايا"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0002 3C10.7302 3 9.60018 3.8 9.18018 5H3.00018V7H4.95018L2.00018 14C1.53018 16 3.00018 17 5.50018 17C8.00018 17 9.56018 16 9.00018 14L6.05018 7H9.17018C9.50018 7.85 10.1502 8.5 11.0002 8.83V20H2.00018V22H22.0002V20H13.0002V8.82C13.8502 8.5 14.5002 7.85 14.8202 7H17.9502L15.0002 14C14.5302 16 16.0002 17 18.5002 17C21.0002 17 22.5602 16 22.0002 14L19.0502 7H21.0002V5H14.8302C14.4002 3.8 13.2702 3 12.0002 3ZM12.0002 5C12.2654 5 12.5197 5.10536 12.7073 5.29289C12.8948 5.48043 13.0002 5.73478 13.0002 6C13.0002 6.26522 12.8948 6.51957 12.7073 6.70711C12.5197 6.89464 12.2654 7 12.0002 7C11.735 7 11.4806 6.89464 11.2931 6.70711C11.1055 6.51957 11.0002 6.26522 11.0002 6C11.0002 5.73478 11.1055 5.48043 11.2931 5.29289C11.4806 5.10536 11.735 5 12.0002 5ZM5.50018 10.25L7.00018 14H4.00018L5.50018 10.25ZM18.5002 10.25L20.0002 14H17.0002L18.5002 10.25Z"
                        fill="#7CB09D"
                      />
                    </svg>
                  </NavItem>
                  <NavItem to="/hr" title="الموارد البشرية">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 9C5.53043 9 6.03914 8.78929 6.41421 8.41421C6.78929 8.03914 7 7.53043 7 7C7 6.46957 6.78929 5.96086 6.41421 5.58579C6.03914 5.21071 5.53043 5 5 5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7C3 7.53043 3.21071 8.03914 3.58579 8.41421C3.96086 8.78929 4.46957 9 5 9ZM5 10C5.39397 10 5.78407 9.9224 6.14805 9.77164C6.51203 9.62087 6.84274 9.3999 7.12132 9.12132C7.3999 8.84274 7.62087 8.51203 7.77164 8.14805C7.9224 7.78407 8 7.39397 8 7C8 6.60603 7.9224 6.21593 7.77164 5.85195C7.62087 5.48797 7.3999 5.15726 7.12132 4.87868C6.84274 4.6001 6.51203 4.37913 6.14805 4.22836C5.78407 4.0776 5.39397 4 5 4C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7C2 7.79565 2.31607 8.55871 2.87868 9.12132C3.44129 9.68393 4.20435 10 5 10Z"
                        fill="#7CB09D"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.854 8.89611C3.90056 8.94256 3.93751 8.99773 3.96271 9.05848C3.98792 9.11922 4.00089 9.18435 4.00089 9.25011C4.00089 9.31588 3.98792 9.381 3.96271 9.44175C3.93751 9.50249 3.90056 9.55767 3.854 9.60411L3.516 9.94111C2.86554 10.5918 2.50009 11.4741 2.5 12.3941V14.2501C2.5 14.3827 2.44732 14.5099 2.35355 14.6037C2.25979 14.6974 2.13261 14.7501 2 14.7501C1.86739 14.7501 1.74021 14.6974 1.64645 14.6037C1.55268 14.5099 1.5 14.3827 1.5 14.2501V12.3941C1.50014 11.2089 1.97099 10.0723 2.809 9.23411L3.146 8.89611C3.19245 8.84955 3.24762 8.81261 3.30837 8.7874C3.36911 8.76219 3.43423 8.74922 3.5 8.74922C3.56577 8.74922 3.63089 8.76219 3.69163 8.7874C3.75238 8.81261 3.80755 8.84955 3.854 8.89611ZM15.646 8.59611C15.5994 8.64256 15.5625 8.69773 15.5373 8.75848C15.5121 8.81922 15.4991 8.88435 15.4991 8.95011C15.4991 9.01588 15.5121 9.081 15.5373 9.14175C15.5625 9.20249 15.5994 9.25767 15.646 9.30411L15.984 9.64111C16.6345 10.2918 16.9999 11.1741 17 12.0941V14.2501C17 14.3827 17.0527 14.5099 17.1464 14.6037C17.2402 14.6974 17.3674 14.7501 17.5 14.7501C17.6326 14.7501 17.7598 14.6974 17.8536 14.6037C17.9473 14.5099 18 14.3827 18 14.2501V12.0941C17.9999 10.9089 17.529 9.77225 16.691 8.93411L16.354 8.59611C16.3076 8.54955 16.2524 8.51261 16.1916 8.4874C16.1309 8.46219 16.0658 8.44922 16 8.44922C15.9342 8.44922 15.8691 8.46219 15.8084 8.4874C15.7476 8.51261 15.6924 8.54955 15.646 8.59611Z"
                        fill="#7CB09D"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 9C13.4696 9 12.9609 8.78929 12.5858 8.41421C12.2107 8.03914 12 7.53043 12 7C12 6.46957 12.2107 5.96086 12.5858 5.58579C12.9609 5.21071 13.4696 5 14 5C14.5304 5 15.0391 5.21071 15.4142 5.58579C15.7893 5.96086 16 6.46957 16 7C16 7.53043 15.7893 8.03914 15.4142 8.41421C15.0391 8.78929 14.5304 9 14 9ZM14 10C13.606 10 13.2159 9.9224 12.8519 9.77164C12.488 9.62087 12.1573 9.3999 11.8787 9.12132C11.6001 8.84274 11.3791 8.51203 11.2284 8.14805C11.0776 7.78407 11 7.39397 11 7C11 6.60603 11.0776 6.21593 11.2284 5.85195C11.3791 5.48797 11.6001 5.15726 11.8787 4.87868C12.1573 4.6001 12.488 4.37913 12.8519 4.22836C13.2159 4.0776 13.606 4 14 4C14.7956 4 15.5587 4.31607 16.1213 4.87868C16.6839 5.44129 17 6.20435 17 7C17 7.79565 16.6839 8.55871 16.1213 9.12132C15.5587 9.68393 14.7956 10 14 10ZM9.5 13.25C8.83696 13.25 8.20107 13.5134 7.73223 13.9822C7.26339 14.4511 7 15.087 7 15.75V17.05C7 17.1826 6.94732 17.3098 6.85355 17.4036C6.75979 17.4973 6.63261 17.55 6.5 17.55C6.36739 17.55 6.24021 17.4973 6.14645 17.4036C6.05268 17.3098 6 17.1826 6 17.05V15.75C6 14.8217 6.36875 13.9315 7.02513 13.2751C7.6815 12.6187 8.57174 12.25 9.5 12.25C10.4283 12.25 11.3185 12.6187 11.9749 13.2751C12.6313 13.9315 13 14.8217 13 15.75V17.05C13 17.1826 12.9473 17.3098 12.8536 17.4036C12.7598 17.4973 12.6326 17.55 12.5 17.55C12.3674 17.55 12.2402 17.4973 12.1464 17.4036C12.0527 17.3098 12 17.1826 12 17.05V15.75C12 15.4217 11.9353 15.0966 11.8097 14.7933C11.6841 14.49 11.4999 14.2144 11.2678 13.9822C11.0356 13.7501 10.76 13.5659 10.4567 13.4403C10.1534 13.3147 9.8283 13.25 9.5 13.25Z"
                        fill="#7CB09D"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.5 11.75C10.0304 11.75 10.5391 11.5393 10.9142 11.1642C11.2893 10.7891 11.5 10.2804 11.5 9.75C11.5 9.21957 11.2893 8.71086 10.9142 8.33579C10.5391 7.96071 10.0304 7.75 9.5 7.75C8.96957 7.75 8.46086 7.96071 8.08579 8.33579C7.71071 8.71086 7.5 9.21957 7.5 9.75C7.5 10.2804 7.71071 10.7891 8.08579 11.1642C8.46086 11.5393 8.96957 11.75 9.5 11.75ZM9.5 12.75C10.2956 12.75 11.0587 12.4339 11.6213 11.8713C12.1839 11.3087 12.5 10.5456 12.5 9.75C12.5 8.95435 12.1839 8.19129 11.6213 7.62868C11.0587 7.06607 10.2956 6.75 9.5 6.75C8.70435 6.75 7.94129 7.06607 7.37868 7.62868C6.81607 8.19129 6.5 8.95435 6.5 9.75C6.5 10.5456 6.81607 11.3087 7.37868 11.8713C7.94129 12.4339 8.70435 12.75 9.5 12.75Z"
                        fill="#7CB09D"
                      />
                    </svg>
                  </NavItem>
                  <NavItem to="/clients" title="العملاء">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                    >
                      <g fill="#7CB09D" fillRule="evenodd" clipRule="evenodd">
                        <path d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path>
                        <path d="M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.47 3.47 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0"></path>
                        <path d="M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5"></path>
                        <path d="M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path>
                      </g>
                    </svg>
                  </NavItem>
                  <NavItem to="/statistics" title="الإحصائيات">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="#7CB09D"
                        d="M904 747H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M165.7 621.8l39.7 39.5c3.1 3.1 8.2 3.1 11.3 0l234.7-233.9l97.6 97.3a32.11 32.11 0 0 0 45.2 0l264.2-263.2c3.1-3.1 3.1-8.2 0-11.3l-39.7-39.6a8.03 8.03 0 0 0-11.3 0l-235.7 235l-97.7-97.3a32.11 32.11 0 0 0-45.2 0L165.7 610.5a7.94 7.94 0 0 0 0 11.3"
                      />
                    </svg>
                  </NavItem>
                  <NavItem title="المالية" to="/finance">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="#7CB09D"
                          d="M12.406 6.414C15.491 5.043 18.61 5.463 20 5.77v10.96c-1.741-.33-5.06-.631-8.406.856c-3.085 1.37-6.203.95-7.594.643V7.27c1.741.33 5.06.631 8.406-.856M20.53 3.84c-1.517-.348-5.21-.91-8.936.746c-3.167 1.408-6.37.927-7.7.619C2.975 4.992 2 5.667 2 6.694v11.585c0 .85.552 1.67 1.47 1.88c1.517.348 5.21.911 8.936-.745c3.167-1.408 6.37-.927 7.7-.619c.918.212 1.894-.462 1.894-1.489V5.721c0-.85-.552-1.67-1.47-1.88M10 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8"
                        />
                      </g>
                    </svg>
                  </NavItem>
                  <NavItem
                    subList={[
                      { title: "جميع الجلسات", to: "/sessions" },
                      { title: "المهام", to: "/tasks" },
                      { title: "اخر التحديثات", to: "/updates" },
                    ]}
                    title="مركز المعلومات"
                    // to="/finance"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#7CB09D"
                        strokeWidth={2}
                        d="M1 19h22V1H1zm4 4h14zm3 0h8v-4H8zM7.757 5.757l2.122 2.122zM9 10H6zm.879 2.121l-2.122 2.122zM12 13v3zm2.121-.879l2.122 2.122zM18 10h-3zm-1.757-4.243l-2.122 2.122zM12 7V4zm0 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
                      ></path>
                    </svg>
                  </NavItem>
                </ul>
              </nav>
            </section>
          </ScreenWrapper>
        </div>
        {/* advertisment */}
        <div className="notification-bar relative flex z-30">
          <div className="notification-content font-medium notification-content-1">
            هنا تعرض الاعلانات هنا تعرض الاعلانات هنا تعرض الاعلانات هنا تعرض
            الاعلانات هنا تعرض الاعلانات هنا تعرض الاعلانات هنا تعرض الاعلانات
          </div>
          <div className="notification-content font-medium notification-content-2 hidden lg:block">
            هنا تعرض الاعلانات هنا تعرض الاعلانات هنا تعرض الاعلانات هنا تعرض
            الاعلانات هنا تعرض الاعلانات هنا تعرض الاعلانات هنا تعرض الاعلانات
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
