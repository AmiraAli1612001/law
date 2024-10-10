import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  // Convert the targetDate to a Date object and set the time to midnight
  const calculateTimeLeft = () => {
    const endOfDay = new Date(targetDate + "T00:00:00");
    const difference = +endOfDay - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clean up interval on component unmount
  }, [targetDate]);

  return (
    <div className="text-red-500 flex items-center gap-1">
      <span className="text-lg font-semibold">{timeLeft.days}</span>
      <span className="text-xs font-bold text-gray-800">يوم</span>
      <span className="text-lg font-semibold">{timeLeft.hours}</span>
      <span className="text-xs font-bold text-gray-800">ساعة</span>
      <span className="text-lg font-semibold">{timeLeft.minutes}</span>
      <span className="text-xs font-bold text-gray-800">دقيقة</span>
      <span className="text-lg font-semibold">{timeLeft.seconds}</span>
      <span className="text-xs font-bold text-gray-800">ثانية</span>
    </div>
  );
};

export default Countdown;
