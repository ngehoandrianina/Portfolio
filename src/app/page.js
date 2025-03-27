import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AcrhivementSection from "./components/AcrhivementSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-[#150404] scroll-smooth" >
    <Navbar/>
    <div className="container mt-24 mx-auto px-12 py-4">
    <div>
      <HeroSection />
    </div>
    <div>
      <AcrhivementSection />
    </div>
    <div id="about">
      <AboutSection/>
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
  );
}
