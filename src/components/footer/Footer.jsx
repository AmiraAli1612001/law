import React from "react";
import ScreenWrapper from "../shared/screenWrapper/Wrapper";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const listItemStyles ="sm:w-full my-1"
  const listItemInline={width:"calc(50% - 8px)"}
  const linkStyles = "text-[#a6b8bb] hover:text-[#008f5b] transition-all block whitespace-nowrap";
  return (
    <footer className="bg-bgGreen py-4">
      <ScreenWrapper className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src={"/images/logos/صقور الشعار.png"}
          alt="saudi logo"
          width={160}
          height={0}
        />
        <ul className="flex flex-wrap md:flex-nowrap items-center gap-2 sm:gap-6 [&>li]:cursor-pointer">
          <li style={listItemInline} className={listItemStyles}><Link className={linkStyles} href={`/`}>الشروط والأحكام</Link></li>
          <li style={listItemInline} className={listItemStyles}><Link className={linkStyles} href={`/`}>سياسة الخصوصية</Link></li>
          <li style={listItemInline} className={listItemStyles}><Link className={linkStyles} href={`/`}>تواصل معنا</Link></li>
          <li style={listItemInline} className={listItemStyles}><Link className={linkStyles} href={`/`}>من نحن</Link></li>
          <li style={listItemInline} className={listItemStyles}><Link className={linkStyles} href={`/`}>الاسألة المتكررة</Link></li>
        </ul>
      </ScreenWrapper>
    </footer>
  );
};

export default Footer;
