import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import ChooseContainer from '../../Container/ChooseContainer';
import { RiTargetFill, RiTimeLine } from 'react-icons/ri';
import { FaBriefcase } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const WhatChooseMe = () => {
  const sectionRef = useRef(null);
   const { ref, inView } = useInView({
    triggerOnce: true, // ✅ Correct avec react-intersection-observer
    threshold: 0.2,
  });

  // Variants individuels pour chaque carte
  const leftCardVariants = {
    hidden: { x: -120, opacity: 0, y: 0 },
    visible: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.8,
      },
    },
  };

  const bottomCardVariants = {
    hidden: { x: 0, opacity: 0, y: 80 },
    visible: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.8,
      
      },
    },
  };

  const rightCardVariants = {
    hidden: { x: 120, opacity: 0, y: 0 },
    visible: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.8,
       
      },
    },
  };

  return (
    <div ref={ref} className='mt-12 h-dvh overflow-hidden px-4'>
      <motion.h1 
        className='text-4xl mt-4 text-center font-bold mb-12 text-white'
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        POURQUOI ME CHOISIR ?
      </motion.h1>

      <div className='flex items-start py-32 justify-evenly flex-wrap gap-8 h-full'>
        {/* Carte Gauche */}
        <motion.div
          variants={leftCardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="transform transition-all duration-300"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <ChooseContainer 
            number={'01'} 
            icon={<RiTargetFill size={74} />} 
            text={'Je conçois chaque projet en plaçant les objectifs et les besoins du client au centre de ma démarche afin de fournir des solutions efficaces et adaptées.'} 
          />
        </motion.div>

        {/* Carte Milieu - décalée vers le bas */}
        <motion.div
          variants={bottomCardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="transform transition-all duration-300 mt-8 md:mt-12 lg:mt-20"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <ChooseContainer 
            number={'02'} 
            icon={<RiTimeLine size={74}/>} 
            text={`Je m'engage à livrer chaque projet dans les délais convenus grâce à une organisation rigoureuse et un suivi constant de l'avancement.`}
          />
        </motion.div>

        {/* Carte Droite */}
        <motion.div
          variants={rightCardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="transform transition-all duration-300"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <ChooseContainer 
            number={'03'} 
            icon={<FaBriefcase size={74}/>} 
            text={`J'accorde une attention particulière à la qualité du travail, à la communication et aux bonnes pratiques de développement pour garantir un résultat fiable et durable.`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhatChooseMe;