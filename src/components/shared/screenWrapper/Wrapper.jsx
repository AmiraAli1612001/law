import React from "react";

const ScreenWrapper = ({ children, className }) => {
  return (
    <div className={`${className || " "} wrapper max-w-screen-2xl mx-auto px-4`}>
      {children}
    </div>
  );
};

export default ScreenWrapper;
