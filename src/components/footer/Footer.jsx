import React from "react";
import ScreenWrapper from "../shared/screenWrapper/Wrapper";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-bgGreen py-4">
      <ScreenWrapper className="flex items-center justify-between">
        <Image
          src={"/images/logos/saudi-logo.png"}
          alt="saudi logo"
          width={120}
          height={0}
        />
        <ul className="flex items-center gap-6 [&>li]:cursor-pointer">
          <li>الشروط والأحكام</li>
          <li>سياسة الخصوصية</li>
          <li>تواصل معنا</li>
          <li>من نحن</li>
          <li>الاسألة المتكررة</li>
        </ul>
      </ScreenWrapper>
    </footer>
  );
};

export default Footer;
