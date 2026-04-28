import React from "react";
import ProgessBar from "../../Pieces/Progress";
import Image from "next/image";
import { motion } from "framer-motion";
const SkillsContainer = ({ src, value, Title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ margin: "-100px" }}
      className=" h-8 md:h-12 md:w-[100%] rounded-xl relative flex flex-col justify-evenly space-y-2 "
    >
   
      <div className="flex items-center gap-2">
        <Image src={src} width={28} height={12} alt="logo" />
        <p className="text-gray-300 font-bold">{Title}</p>
      </div>
      <ProgessBar value={value} />
    </motion.div>
  );
};

export default SkillsContainer;
