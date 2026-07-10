"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";
import SocialMediaContact from "../../Container/SocialMedia";
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
      <h1 className=" text-secondary sm:text-6xl md:text-7xl lg:text-9xl absolute left-1/2 -translate-x-1/2 top-[17%] w-full text-center ">Antonio Claret</h1>
      <h1 className=" text-dark sm:text-6xl md:text-7xl lg:text-9xl absolute left-1/2 -translate-x-1/2 top-[16%] w-full text-center ">Antonio Claret</h1>
      <div className="flex h-full pb-20 justify-between">
        <div className="col-span-7 space-y-8 place-self-end text-center sm:text-left justify-self-start ">
          <motion.h1
            className=" mb-4 text-4xl lg:text-2xl lg:leading-normal font-extrabold"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-primary via-secondary to-Tersary">
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
              className="text-white"
            />
          </motion.h1>
           <div className="md:w-[400px]">
            <p className="font-caveat text-2xl ">
              I am a Full-Stack Developer focused on building modern and
              efficient web applications. <br />I work with both front-end and
              back-end technologies to create user-friendly, reliable, and
              scalable solutions.{" "}
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
        <div className="flex items-end justify-end  ">
               <SocialMediaContact />
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
