import Image from "next/image";
import React from "react";
import NavItem from "./navItem/NavItem";
import ScreenWrapper from "../shared/screenWrapper/Wrapper";

const Header = () => {
  return (
    <header className="bg-bgGreen text-3xl ">
      <ScreenWrapper>
        <section className="flex items-center py-4 justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={"/images/logos/saudi-logo.png"}
              alt="saudi logo"
              width={120}
              height={0}
            />
            <div className="relative w-fit rounded">
              <input
                type="text"
                className="text-base p-3 md:min-w-[400px]"
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
                <g clip-path="url(#clip0_69_42)">
                  <path
                    d="M16.8359 17.0811L13.3922 13.6373M15.2526 9.16439C15.2526 12.6622 12.4171 15.4977 8.91927 15.4977C5.42147 15.4977 2.58594 12.6622 2.58594 9.16439C2.58594 5.66658 5.42147 2.83105 8.91927 2.83105C12.4171 2.83105 15.2526 5.66658 15.2526 9.16439Z"
                    stroke="#7CB09D"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
          <div>
            <ul className="flex gap-4 items-center">
              <li className="flex items-center justify-center w-10 h-10 rounded cursor-pointer bg-white">
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
              </li>
              <li className="flex items-center justify-center w-10 h-10 rounded cursor-pointer bg-white">
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
            </ul>
          </div>
        </section>
      </ScreenWrapper>
      <div className="bg-white drop-shadow">
        <ScreenWrapper className="">
          <section className="flex items-center py-4">
            <nav>
              <ul className="flex gap-4">
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
              </ul>
            </nav>
          </section>
        </ScreenWrapper>
      </div>
    </header>
  );
};

export default Header;
