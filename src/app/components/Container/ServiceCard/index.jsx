import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const ServiceCard = ({ image, title, Description }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ margin: "-100px" }}
      className=" hover: cursor-pointer flex flex-col items-center justify-end border w-80 h-96 rounded-xl overflow-hidden mt-8"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-[50%] flex flex-col justify-center backdrop-blur-sm px-4">
        <h1 className="font-bold mb-2 text-xl">{title}</h1>
        <p className="text-md">{Description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
