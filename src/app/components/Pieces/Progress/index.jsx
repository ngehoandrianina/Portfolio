import React from "react";

const ProgessBar = ({ value }) => {
  return (
    <div className="w-full flex items-end  bg-gray-300 rounded-full h-1  ">
      <div
        className="bg-gradient-to-r from-primary to-primary h-full rounded-full "
        style={{ width: `${value}%` }}
      >
        
      </div>
      <p  className="text-sm font-thin mb-2">{value}%</p>
    </div>
  );
};

export default ProgessBar;
