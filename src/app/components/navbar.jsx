"use client"
import react, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import AboutSection from "./AboutSection";
import Image from "next/image";
import {motion, useScroll,useSpring } from "framer-motion";
const navLink = [
    {
        title: "Home",
        href: "#Home",},
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
                    backgroundColor: "#179BB0",}}/>
        <div className="flex flex-wrap items-center  justify-between mx-auto p-3">
            <Link href={"/"} className=" ml-10" style={{fontFamily:'fantasy'}}><Image src='/image/logoNG.png' alt="iah" className="rounded-xl"  width={50} height={150} /> </Link>
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
            <div className="menu hidden md:block md:w-auto mr-12" id="navbar">
                <ul className="flex justify-center items-center p-4 md:p-0 flex-col md:flex-row md:space-x-8 mt-0 ">
                    {
                        navLink.map((link, index) => ( 
                            <li key={index} >
                                <NavLink onClick={()=>setNavbarOpen(false)} href={link.href} title={link.title} />
                            </li>
                        ))
                    }
                    <motion.ul className=' cursor-pointer px-6 py-2 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary via-secondary to-Tersary hover:bg-slate-800 text-white'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            ><Link href='#contact'>Lets' talk</Link></motion.ul>
                </ul>
                
            </div>
            
        </div>
        {
            navbarOpen ? <MenuOverlay  links={navLink} Setnave={setNavbarOpen}/> : null
        }
    </nav>
   );
  }
  export default Navbar;