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
      className=" border border-gray-400 h-32 md:h-40 md:w-96 rounded-xl relative px-6 py-4 flex flex-col justify-evenly "
    >
      <div className="w-2 h-20 bg-secondary absolute -left-1 top-4 rounded"></div>
      <div className="flex items-center gap-2">
        <Image src={src} width={60} height={60} alt="logo" />
        <p className="text-gray-300 font-bold">{Title}</p>
      </div>
      <ProgessBar value={value} />
    </motion.div>
  );
};

export default SkillsContainer;
