import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  // Variants pour le texte de gauche
  const textVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const textChildVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variants pour l'image de droite
  const imageVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  // Variants pour le badge "DISPONIBLE MAINTENANT"
  const badgeVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.6,
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      ref={sectionRef}
      className='py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Colonne Gauche - Texte */}
      <motion.div 
        className=''
        variants={textVariants}
      >
        <motion.div 
          className='font-roboto mb-4 font-semibold flex items-center gap-2 text-primary'
          variants={textChildVariants}
        >
          <p  className="w-8 h-1 bg-primary"></p> A PROPOS DE MOI
        </motion.div>
        
        <motion.h1 
          className='text-4xl md:text-5xl mb-12 font-bold'
          variants={textChildVariants}
        >
          IMAGINER,<br/>
          CONSTRUIRE,<br/>
          <motion.span 
            className='inline-block md:mt-1 md:py-2 bg-gradient-to-r from-black to-Tersary bg-clip-text text-transparent'
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
          >
            PERFECTIONNER.
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className='md:w-[32rem] text-md font-arimo leading-relaxed text-gray-700'
          variants={textChildVariants}
        >
          Je suis NGEHO ANDRIANINA Antonio Claret,
          développeur passionné par la conception et le développement 
          d'applications web et mobiles modernes.<br/> Je crée des solutions 
          numériques sur mesure
          permettant aux entreprises, organisations et particuliers de 
          concrétiser leurs idées en produits performants, fiables et évolutifs.
        </motion.p>
         <motion.div
          className="mt-8 w-20 h-1 bg-primary"
          variants={itemVariants}
        />
      </motion.div>

      {/* Colonne Droite - Image */}
      <motion.div 
        className='relative flex items-center justify-center'
        variants={imageVariants}
      >
        <motion.div
          whileHover={{
            scale: 1.02,
            rotate: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          <Image 
            src={'/svg/browser-ui.svg'} 
            width={420} 
            height={600} 
            alt='browser ui'
            className='drop-shadow-2xl'
          />
        </motion.div>

        <motion.div
          className='border p-4 absolute text-sm rounded-xl bg-secondary bottom-4 left-12 shadow-xl'
          variants={badgeVariants}
          animate={isInView ? ["visible", "pulse"] : "hidden"}
        >
          <span className="flex items-center gap-2 text-black font-semibold">
            <motion.span 
              className="w-2 h-2 rounded-full bg-green-500 inline-block"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            DISPONIBLE MAINTENANT
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;