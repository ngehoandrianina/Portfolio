"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import githubIcon from "../../../../../public/image/github.png";
import FacebookIcon from "../../../../../public/image/icons8_facebook.png";
import LinkDIncon from "../../../../../public/image/icons8_linkedin.png";
import WhatsappIcon from "../../../../../public/image/whatsapp.png";
import Gmail from "../../../../../public/image/icons8_gmail.png";
import ParticlesBackground from "../../Container/Partialjs";
import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";

const HeroSection = ({setHero}) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(()=>{
    if(window.innerWidth > 768){
      setHero(isInView)
    }
  },[isInView])
  return (
    <section className="" ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="absolute w-32 h-32 bg-gradient-to-t from-primary to-secondary rounded-full blur-2xl bottom-12 left-12"></div>
       
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <motion.h1
            className="text-white mb-4 text-4xl lg:text-6xl lg:leading-normal font-extrabold"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-Tersary">
              Hi, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Antonio Claret",
                3000,
                "FullStack",
                1000,
                "Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>
          <div className="my-8 w-md">
            <p>
              I am a Full-Stack Developer focused on building modern and
              efficient web applications. <br />I work with both front-end and
              back-end technologies to create user-friendly, reliable, and
              scalable solutions.{" "}
            </p>
          </div>
          <div>
            <motion.button
              className="px-6 py-3 w-full sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-primary via-secondary to-Tersary hover:bg-gradient-to-tr hover:shadow-primary shadow-lg text-white"
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

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="socials flex flex-row items-center justify-center md:justify-start gap-2 mt-6 lg:mt-16"
            >
              <Link href="https://github.com/ngehoandrianina" target="_blank">
                <Image src={githubIcon} alt="github" width={50} height={50} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/antonio-claret-baa78930b/"
                target="_blank"
              >
                <Image src={LinkDIncon} alt="Linkedin" width={50} height={50} />
              </Link>
              <Link
                href="https://www.facebook.com/claretanthoonio/"
                target="_blank"
              >
                <Image
                  src={FacebookIcon}
                  alt="Facebook"
                  width={50}
                  height={50}
                />
              </Link>
              <Link href="https://wa.me/261340760917" target="_blank">
                <Image
                  src={WhatsappIcon}
                  alt="Watsapp"
                  width={50}
                  height={50}
                />
              </Link>
              <Link href="mailto:antonioclaret2004@gmail.com" target="_blank">
                <Image src={Gmail} alt="Watsapp" width={50} height={50} />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ml-4 ">
          <motion.div
            className="outline outline-4 outline-offset-4 outline-Tersary  rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative mt-9 lg:mt-0 mb-4 lg:mb-0  overflow-hidden"
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/image/CEO.png"
              alt="hero"
              width={500}
              height={500}
              priority
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-3xl"
            />
          </motion.div>
        </div>
        
      </div>
      <div className="flex items-center justify-center mt-16">
        <Link href={'#about'}>
        <motion.div initial={{y:-20}} animate={{y:0}} transition={{repeat:Infinity,duration:1,ease:"linear"}}  className="w-12">
          <ArrowDownCircleIcon className="hover:scale-105 cursor-pointer" />
        </motion.div>
        </Link>
      </div>
    </section>
  );
};
export default HeroSection;
