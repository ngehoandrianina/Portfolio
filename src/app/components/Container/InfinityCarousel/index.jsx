"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const InfiniteCarouselWithPause = ({ 
  items, 
  speed = 30,
  direction = "left",
  className = "",
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div 
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex "
        animate={{
          x: direction === "left" 
            ? ["0%", "-33.33%"] 
            : ["-33.33%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id || index}-${index}`}
            className="flex-shrink-0 text-white"
            style={{ 
              marginRight: 20,
              width: item.width || "200px",
              minWidth: item.minWidth || "200px",
            }}
          >
            {item.content}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarouselWithPause;