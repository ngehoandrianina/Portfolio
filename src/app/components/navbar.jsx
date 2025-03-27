"use client"
import react, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import AboutSection from "./AboutSection";
import {motion, useScroll,useSpring } from "framer-motion";
const navLink = [
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Projects",
        href: "#Projects",
    },
    {
        title: "Contact",
        href: "#contact",
    },
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen]  = useState(false); 
    const {scrollYProgress} = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <motion.div id="scroll-indication" style={{scaleX,position:"fixed",top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",}}/>
        <div className="flex flex-wrap items-center  justify-between mx-auto p-3">
            <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">LOGO</Link>
            <div className="mobil-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
                        <Bars3Icon className="w-5 h-5"/>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
                        <XMarkIcon className="w-5 h-5"/>
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 flex-col md:flex-row md:space-x-8 mt-0 ">
                    {
                        navLink.map((link, index) => ( 
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {
            navbarOpen ? <MenuOverlay links={navLink}/> : null
        }
    </nav>
   );
  }
  export default Navbar;