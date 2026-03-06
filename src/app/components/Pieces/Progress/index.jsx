import React from "react";

const ProgessBar = ({ value }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden ">
      <div
        className="bg-gradient-to-r from-primary to-primary h-full rounded-full "
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgessBar;
