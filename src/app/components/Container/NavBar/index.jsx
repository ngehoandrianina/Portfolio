"use client";
import react, { useState } from "react";
import Link from "next/link";
import NavLink from "../NavLink";
import { ArrowUpRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../MenuOverLay";
import AboutSection from "../../Sections/Service";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
const navLink = [
  {
    title: "Accueil",
    href: "#Home",
  },
  {
    title: "A propos",
    href: "#about",
  },
  {
    title: "Expertise",
    href: "#Expertise",
  },
  {
    title: "Projets",
    href: "#Projects",
  },
  {
    title: "Services",
    href: "#Service",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
const Navbar = ({ heroVisible }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  //px-32 pt-6
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm bg-opacity-90 lg:px-24 lg:pt-8 "
    >
      <motion.div  
      className="flex flex-wrap items-center justify-between mx-auto p-1 px-12 lg:rounded-full bg-dark"> 
         <motion.div
        id="scroll-indication"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          backgroundColor: "#DFD3C3",
        }}
      /> 
        <Link href={"/"} className="" style={{ fontFamily: "fantasy" }}>
          <Image
            src="/image/logoNG.png"
            alt="iah"
            className="rounded-xl"
            width={50}
            height={150}
          />{" "}
        </Link>
        <div className="mobil-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex justify-center items-center p-4 md:p-0 flex-col md:flex-row md:space-x-8 mt-0 gap-4 ">
            {navLink.map((link, index) => (
              <li key={index}>
                <NavLink
                  onClick={() => setNavbarOpen(false)}
                  href={link.href}
                  title={link.title}
                />
              </li>
            ))}
           
          </ul>
        </div>
         <motion.button
              className=" hidden md:block cursor-pointer px-6 py-2 w-22 sm:w-fit rounded-full bg-gradient-to-br from-primary via-secondary to-Tersary hover:bg-slate-800 text-dark font-bold whitespace-nowrap"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <Link href="#contact" className="flex gap-4 ">Lets' talk </Link>
        </motion.button>
      </motion.div>
      {navbarOpen ? (
        <MenuOverlay links={navLink} Setnave={setNavbarOpen} />
      ) : null}
    </motion.nav>
  );
};
export default Navbar;
