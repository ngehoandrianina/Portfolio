"use client"; // Indique que ce composant est côté client
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Données des réalisations
const AchievementList = [
  { id: 1, metric: "Developer", value: 'Web'},
  { id: 2, metric: "Developer", value: 'Mobil'},
  { id: 3, metric: "Administrator", value: 'System ' },
  { id: 4, metric: "Administrator", value: 'Network ' },
  { id: 5, metric: "Years", value: 3 },
];

// Composant pour animer un nombre
const AnimatedNumber = ({ value }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true }); // Déclenche l'animation une seule fois

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1.5 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      className='text-white text-lg lg:text-4xl font-bold'
    >
      {value}
    </motion.span>
  );
};

const AchievementSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:py-16 '>
      <div className='border-[#33353f] border rounded-md py-8 px-17 grid grid-cols-2 sm:grid-cols-3 gap-4 lg:flex flex-row items-center justify-between '>
        {AchievementList.map((achievement) => (
          <div key={achievement.id} className='flex flex-col items-center justify-center mx-4'>
            <h2 className='text-white lg:text-xl font-bold text-[10px]'>
              {achievement.prefix}{' '}
              <AnimatedNumber value={achievement.value} />
              {achievement.prefix}
            </h2>
            <p className='text-[#adb7be6c] lg:text-base text-sm'>{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;