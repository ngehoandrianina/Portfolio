import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TechUSe from '../../Pieces/Tech';
import { 
  SiReact, 
  SiNextdotjs, 
  SiSpringboot, 
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiStripe,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiRedis,
  SiElasticsearch,
  SiRabbitmq,
  SiApollographql,
  SiPrisma,
  SiSupabase,
  SiFirebase,
  SiVercel,
  SiAws,
  SiAzure,
  SiGooglecloud,
} from "react-icons/si";
import { FaJava, FaPython, FaPhp, FaRust } from "react-icons/fa";
import InfiniteCarouselWithPause from '../../Container/InfinityCarousel';

const Myskills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Rust", icon: FaRust, color: "#000000" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
  ];

  // Créer les items du carousel
  const techItems = technologies.map((tech) => ({
    id: tech.name,
    content: (
      <motion.div 
        className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
        whileHover={{
          scale: 1.15,
          rotate: 5,
          transition: { type: "spring", stiffness: 400, damping: 17 }
        }}
      >
        <span className="text-xs font-medium text-gray-700 text-center">
          <tech.icon 
            className="text-3xl mb-2" 
            style={{ color: tech.color }}
          />
        </span>
      </motion.div>
    ),
    width: "80px",
    minWidth: "80px",
  }));

  // Liste des technologies pour la grille
  const techList = [
    { name: 'Next JS', img: '/svg/NextJs.svg' },
    { name: 'React JS', img: '/image/ReactJs.jpeg' },
    { name: 'Node JS', img: '/logo/NodeJs.png' },
    { name: 'Nest JS', img: '/logo/NestJs.png' },
    { name: 'Django', img: '/logo/Djangol.png' },
    { name: 'Javascripts', img: '/logo/Javascript.png' },
    { name: 'Python', img: '/logo/Python-logo.png' },
    { name: 'Mysql', img: '/logo/mysql.svg' },
    { name: 'Postgresql', img: '/logo/postgresql.svg' },
    { name: 'EXPO', img: '/logo/expo.svg' },
  ];

  // Variants pour le conteneur
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Variants pour les éléments
  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.6,
      },
    },
  };

  // Variants pour le titre
  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Variants pour le carousel
  const carouselVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  // Composant pour chaque carte avec son propre observer
  const TechCard = ({ tech, index }) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, {
      once: true,
      amount: 0.3,
      threshold: 0.3,
    });

    return (
      <motion.div
        ref={cardRef}
        initial={{ y: 50, opacity: 0, scale: 0.8 }}
        animate={isCardInView ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.8 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.6,
          delay: index * 0.05,
        }}
        whileHover={{
          y: -10,
          scale: 1.05,
          transition: { type: "spring", stiffness: 400, damping: 17 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <TechUSe Url={tech.img} Text={tech.name} />
      </motion.div>
    );
  };

  return (
    <motion.div 
      ref={sectionRef}
      className='flex flex-col items-start mt-12 overflow-hidden px-4'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Badge -- EXPERTISE */}
      <motion.p 
        className='font-arimo font-semibold mb-4 text-primary tracking-wider'
        variants={itemVariants}
      >
        -- EXPERTISE
      </motion.p>

      {/* En-tête */}
      <motion.div 
        className='flex justify-between w-full mb-24 flex-wrap gap-4'
        variants={itemVariants}
      >
        <motion.h1 
          className='text-5xl text-center font-bold'
          variants={titleVariants}
        >
          CE QUE JE{' '}
          <motion.span 
            className='bg-gradient-to-r from-black to-Tersary bg-clip-text text-transparent inline-block'
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
          >
            MAITRISE
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className='w-[28rem] text-sm text-right text-gray-600 leading-relaxed'
          variants={titleVariants}
          whileHover={{
            x: 5,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          Création de solutions numériques innovantes,
          pensées pour répondre aux besoins 
          actuels tout en garantissant performance, flexibilité et évolution à long terme.
        </motion.p>
      </motion.div>

      {/* Grille des technologies avec animation individuelle */}
      <div className='flex gap-4 flex-wrap'>
        {techList.map((tech, index) => (
          <TechCard key={index} tech={tech} index={index} />
        ))}
      </div>

      {/* Carousel infini */}
      <motion.div 
        className="relative w-full"
        variants={carouselVariants}
      >
        {/* Décoration de fond */}
        <motion.div
          className="absolute -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        <InfiniteCarouselWithPause 
          items={techItems}
          speed={60}
          direction="left"
          pauseOnHover={true}
          className="mt-8 py-4"
        />
      </motion.div>
    </motion.div>
  );
};

export default Myskills;