"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AcrhivementSection from "./components/AcrhivementSection";
import { useState } from "react";
import { motion } from "framer-motion";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/Sections/Experience";
export default function Home() {
  const [islight,SetLight] = useState(false)
  return (
    <>
    <main className=" overflow-hidden  flex min-h-screen flex-col dark:bg-[#150404] bg-dark scroll-smooth" >
    <Navbar/>
    <div className="container mt-24 mx-auto px-12 py-4">
    <div>
      <HeroSection id="Home" />
    </div>
    <div>
      <AcrhivementSection />
    </div>
    <motion.div  id="about">
      <AboutSection/>
    </motion.div>
    <div id="Experience">
      <ExperienceSection />
    </div>
    <div id="Skills">
      <SkillsSection />
    </div>
    <div id="Projects">

      <ProjectSection />
    </div>
    <div id="contact">

      <EmailSection/>
    </div>
    </div>
    <Footer />
    
    </main>
    </>
  );
}
