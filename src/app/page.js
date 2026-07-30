"use client";
import HeroSection from "./components/Sections/HeroSection";
import Navbar from "./components/Container/NavBar";
import ProjectSection from "./components/Sections/ProjectSection";
import EmailSection from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer/Footer";
import AcrhivementSection from "./components/Sections/Archivement";
import { useState } from "react";
import { motion } from "framer-motion";
import SkillsSection from "./components/Sections/Skills";
import ExperienceSection from "./components/Sections/Experience";
import ParticlesBackground from "./components/Container/Partialjs";
import BackGound from "./components/Container/Partialjs";
import Myskills from "./components/Sections/Skills2";
import AboutSection from "./components/Sections/About";
import WhatChooseMe from "./components/Sections/WhatShooseMe";
export default function Home() {
  const [islight, SetLight] = useState(false);
  const [hero,sethero] = useState(true)
  const styleglobale = 'mx-auto px-2 lg:px-32 py-4 '
  return (
    <>
      <main  className=" overflow-hidden  flex min-h-screen flex-col scroll-smooth">
        <Navbar heroVisible={hero} />
        <div style={{backgroundImage:"url('/svg/gggrain2.svg')", backgroundRepeat:'repeat',backgroundSize:'contain' }} className="px-2 lg:px-32 relative">
            <HeroSection id="Home" setHero={sethero} />
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute  bottom-0  left-0">
              <path fill="#F1F5F9" d="M0,56 C240,0 480,120 720,88 C960,56 1200,0 1440,56 L1440,120 L0,120 Z"></path>
            </svg>
        </div>
        <div className="container bg-slate-100 " style={{backgroundImage:"url('/svg/ooorganiz.svg')"}} >
          <motion.div id="about" className={styleglobale} >
            <AboutSection/>
          </motion.div>
          <div id="Expertise" className={styleglobale} >
            <Myskills />
          </div>
          <div id="Projects" className={styleglobale}  style={{backgroundImage:"url('/svg/ooorganize.svg')"}}>
            <ProjectSection />
          </div>
          <div id="Service" className={`${styleglobale} bg-gradient-to-b from-black to-Tersary`} >
            <WhatChooseMe />
          </div>
          <div id="contact" className={styleglobale} >
            <EmailSection />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
