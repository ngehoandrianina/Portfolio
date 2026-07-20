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
    <section className="h-dvh relative " ref={ref}>
      {/* <h1 className=" text-secondary sm:text-6xl md:text-7xl lg:text-9xl absolute left-1/2 -translate-x-1/2 top-[17%] w-full text-center ">Antonio Claret</h1>
      <h1 className=" text-dark sm:text-6xl md:text-7xl lg:text-9xl absolute left-1/2 -translate-x-1/2 top-[16%] w-full text-center ">Antonio Claret</h1> */}
      <div className="flex h-full justify-between">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start ">
          <motion.h1
            className=" mb-4 text-4xl lg:text-2xl lg:leading-normal font-extrabold"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <span className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-primary via-primary to-Tersary">
              I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "FullStack",
                1000,
                "Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white text-6xl"
            />
          </motion.h1>
           <div className="md:w-[400px]">
            <p className="font-arimo text-lg">
              Je conçois des solutions numériques modernes, 
              performantes et évolutives pour
               transformer les idées en réalités.{" "}
            </p>
          </div>
          <div>
            <motion.button
              className="px-6 py-3 w-full text-dark sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary via-secondary to-Tersary hover:bg-gradient-to-tr hover:shadow-primary shadow-lg font-bold"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <Link href={"#Projects"}> View Project </Link>
            </motion.button>
            <motion.button
              className="px-1 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br
             from-primary via-secondary to-Tersary hover:bg-slate-800 mt-5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <span className="text-white bg-[#121212] hover:bg-slate-800 rounded-full px-20  lg:px-5 py-3 ">
                <a href="/CVAntonioClaret.pdf" download>
                  Download CV
                </a>
              </span>
            </motion.button>

            {/* <SocialMediaContact /> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-20 relative ">
               <SocialMediaContact />
              <div className="flex w-full justify-evenly">
                  <ArchivementText Text={'+3'} Under={'Years'}/>
                  <ArchivementText Text={'+20'} Under={'Projects'}/>
              </div>
              <svg viewBox="0 0 1100 800" className="absolute top-0 right-0">
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
            <Image
              src="/image/CEO-sbg.png"
              alt="hero"
              width={450}
              height={400}
              priority
             className="absolute  -translate-x-1/2 left-1/2 bottom-0"
            />
       
      </div>
    </section>
  );
};
export default HeroSection;
