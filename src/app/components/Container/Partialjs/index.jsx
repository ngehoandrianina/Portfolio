import React from "react";

const BackGound = ({ children }) => {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/image/service/Background.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </div>
  );
};

export default BackGound;