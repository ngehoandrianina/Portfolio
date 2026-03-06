"use client";
import HeroSection from "./components/Sections/HeroSection";
import Navbar from "./components/Container/NavBar";
import AboutSection from "./components/Sections/Service";
import ProjectSection from "./components/Sections/ProjectSection";
import EmailSection from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer/Footer";
import AcrhivementSection from "./components/Sections/Archivement";
import { useState } from "react";
import { motion } from "framer-motion";
import SkillsSection from "./components/Sections/Skills";
import ExperienceSection from "./components/Sections/Experience";
import ParticlesBackground from "./components/Container/Partialjs";
export default function Home() {
  const [islight, SetLight] = useState(false);
  return (
    <>
      <ParticlesBackground />
      <main className=" overflow-hidden  flex min-h-screen flex-col dark:bg-[#150404] bg-dark scroll-smooth">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <div>
            <HeroSection id="Home" />
          </div>
          {/* <div>
      <AcrhivementSection />
    </div> */}
          <motion.div id="about">
            <AboutSection />
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
            <EmailSection />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
