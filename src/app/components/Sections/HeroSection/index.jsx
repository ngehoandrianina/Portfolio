"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";
import SocialMediaContact from "../../Container/SocialMedia";
import AchievementSection from "../Archivement";
import ArchivementText from '../../Pieces/archivementText'
const HeroSection = ({setHero}) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(()=>{
    if(window.innerWidth > 768){
      setHero(isInView)
    }
  },[isInView])
  return (
    <section className="md:h-dvh relative" ref={ref}>
      {/* <h1 className=" text-secondary sm:text-6xl md:text-7xl lg:text-9xl absolute left-1/2 -translate-x-1/2 top-[17%] w-full text-center ">Antonio Claret</h1>
      <h1 className=" text-dark sm:text-6xl md:text-7xl lg:text-9xl absolute left-1/2 -translate-x-1/2 top-[16%] w-full text-center ">Antonio Claret</h1> */}
      <div className="flex flex-col lg:flex-row h-full justify-between ">
        <div className="col-span-7 mt-28 md:mt-0 lg:place-self-center space-y-8 lg:space-y-0 text-center sm:text-left justify-self-start ">
          <motion.h1
            className="mb-4 text-5xl lg:text-2xl lg:leading-normal font-extrabold"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <span className="text-transparent text-4xl lg:text-7xl bg-clip-text bg-gradient-to-r from-black  to-Tersary">
              Je suis{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Full-Stack",
                1000,
                "Développeur",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white lg:text-6xl"
            />
          </motion.h1>
           <div className="md:w-[400px]">
            <motion.p  initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 } }
        transition={{ duration: 0.6 }} className="font-arimo text-lg">
              Je conçois des solutions numériques modernes, 
              performantes et évolutives pour
               transformer les idées en réalités.{" "}
            </motion.p>
          </div>
        
         
          <div >
            <motion.button
              className="px-6 py-3 w-52 text-dark sm:w-fit rounded-full md:mr-4 bg-gradient-to-br from-primary via-secondary to-Tersary hover:bg-gradient-to-tr hover:shadow-primary shadow-lg font-bold"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <Link href={"#Projects"}> Voire mes projets </Link>
            </motion.button>
            <motion.button
              className="px-1 py-4 lg:py-3 w-52 sm:w-fit rounded-full bg-gradient-to-br
             from-primary via-secondary to-Tersary hover:bg-slate-800 mt-5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <span className="text-white bg-[#121212] hover:bg-slate-800 rounded-full px-6 lg:px-5 py-3 ">
                <a href="/CVAntonioClaret.pdf" download>
                  Télécharger mon CV
                </a>
              </span>
            </motion.button>
          </div>
        </div>
         
        <div className="flex flex-col items-center justify-center mt-12 md:mt-0 gap-8 lg:gap-20 relative ">
               <SocialMediaContact />
                <motion.div 
  className="flex w-full justify-evenly"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 25,
    duration: 0.6,
    delay: 0.3,
  }}
>
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 25,
      duration: 0.5,
      delay: 0.4,
    }}
  >
    <ArchivementText Text={'+3'} Under={'Years'} />
  </motion.div>
  
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 25,
      duration: 0.5,
      delay: 0.5,
    }}
  >
    <ArchivementText Text={'+20'} Under={'Projects'} />
  </motion.div>
</motion.div>
              <svg viewBox="0 0 1100 800" className="md:absolute top-0 right-0 hidden ">
              <g strokeWidth="6" stroke="#F1F5F9" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5.5 0" transform="matrix(0.12186934340514749,0.992546151641322,-0.992546151641322,0.12186934340514749,752.2707232944698,-33.76619801858783)">
              <path d="M212 216.97345733642578Q625 -4.026542663574219 400 404.9734573364258Q215 791.9734573364258 588 592.9734573364258 " markerEnd="url(#SvgjsMarker3624)">
                </path>
                </g>
                <defs>
                <marker markerWidth="10" markerHeight="10" refX="5" refY="5" viewBox="0 0 10 10" orient="auto" id="SvgjsMarker3624">
                <polygon points="0,10 5,5 0,0 10,5" fill="#F1F5F9">
                </polygon>
                </marker>
                </defs>
              </svg>
        </div>
      </div>
         <motion.div 
  className="hidden md:block"
  initial={{ opacity: 0, scale: 0.8, y: 50 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 25,
    duration: 0.8,
    delay: 0.2,
  }}
>
  <Image
    src="/image/CEO-sbg.png"
    alt="hero"
    width={450}
    height={400}
    priority
    className="lg:absolute lg:-translate-x-1/2 lg:left-1/2 lg:bottom-0"
  />
</motion.div>
            <div className="md:hidden  bottom-0 flex justify-center ">
              <Image
              src="/image/CEO-sbg.png"
              alt="hero"
              width={300}
              height={200}
              priority
             className=""
            />
          </div>
    </section>
  );
};
export default HeroSection;
