"use client"
import { toggleAttendancePopup } from "@/globalState/Features/smallPopupsSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckIn = () => {
  const { attendanceId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        attendanceId > 0 ? "text-[#D00000]" : "text-textGreen"
      } items-center gap-2 bg-white p-2 rounded drop-shadow-sm h-10 cursor-pointer hidden md:flex`}
      onClick={() => dispatch(toggleAttendancePopup())}
    >
      <p className="text-base">
        {attendanceId > 0 ? "تسجيل الانصراف" : "تسجيل الحضور"}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="svg-icon"
        width={24}
        height={24}
        // style="vertical-align: middle;fill: currentColor;overflow: hidden;"
        viewBox="0 0 1024 1024"
        version="1.1"
        fill="currentColor"
      >
        <path d="M868.215446 675.381068c0 0-34.121122-3.323699-79.70532-5.907547-2.863211 139.762137-25.734104 229.17147-73.224722 252.895801L715.285404 774.186398c10.866489-1.497097 19.332301-10.399861 19.332301-21.680788l0-22.044062c0-12.310374-9.911744-22.274306-22.223141-22.274306l-48.732911 0c-12.310374 0-22.222117 9.991562-22.222117 22.274306l0 22.044062c0 11.279904 8.468882 20.183691 19.332301 21.680788l0 148.182924c-47.490617-23.724331-70.385047-113.133663-73.224722-252.895801-45.579081 2.603291-79.704296 5.907547-79.704296 5.907547-50.605561 0-91.644233 41.019229-91.644233 91.607394l0 116.067482c0 50.639331 141.979642 73.330122 274.903024 73.330122 132.872217 0 268.766256-22.690792 268.766256-73.330122L959.867866 766.988462C959.84126 716.400297 918.829194 675.381068 868.215446 675.381068L868.215446 675.381068 868.215446 675.381068zM687.980525 674.482605c64.936965 0 164.930353-84.868923 164.930353-197.683315 0-109.00053-74.000388-197.658755-164.930353-197.658755-90.88187 0-164.877141 88.685855-164.877141 197.658755C523.102361 589.614705 623.116215 674.482605 687.980525 674.482605L687.980525 674.482605 687.980525 674.482605zM564.73148 432.6907c4.285606-7.17747 9.036817-14.32731 13.577227-20.572548 13.06148-17.937534 23.747867-35.951817 50.537 0 25.13854 33.789571 119.812783 52.733015 187.024557 54.874795 0.153496 3.276626 0.38681 6.529717 0.38681 9.807367 0 87.341231-78.773088 161.107281-128.302131 161.107281-49.480948 0-128.255059-73.766051-128.255059-161.107281C559.726489 461.494723 561.581744 446.733531 564.73148 432.6907L564.73148 432.6907 564.73148 432.6907zM307.02307 568.477292l-57.661258-42.429345 118.058836-118.031207L367.420649 216.629829l75.237565 0 0 216.216413L307.02307 568.477292zM672.235936 200.083991C595.656817 98.260931 464.363562 44.36851 331.593675 72.888054 149.420613 112.01826 33.455461 291.379277 72.585667 473.573829c29.937846 139.39784 142.035924 240.060471 274.700409 262.076904l52.190663-74.770937c-117.981065-1.216711-223.62515-83.733053-249.436002-203.928552-29.936823-139.376351 58.798151-276.661064 198.202131-306.577421 92.864014-19.952424 184.791703 12.803607 244.651023 78.102822L672.235936 200.083991 672.235936 200.083991 672.235936 200.083991zM672.235936 200.083991" />
      </svg>
    </div>
  );
};

export default CheckIn;
