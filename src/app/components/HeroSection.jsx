"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useEffect,useState } from 'react';
import { motion } from 'framer-motion';

 const HeroSection = () => {

    return (
    <section  className=''>
    <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left justify-self-start'> 
        <motion.h1 className='tex-white mb-4 text-4xl lg:text-6xl lg:leading-normal font-extrabold'
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:1}}
        > <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#053545] via-[#179BB0] to-[#86Cdd9]'>Hi, I'm {" "}</span>
        <br/>
        <TypeAnimation
      sequence={[
        'Antonio Claret',
        3000, 
        'FullStack',
        1000,
        'Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /> </motion.h1>
        <div >
            
            <motion.button className='px-6 py-3 w-full sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-[#053545] via-[#179BB0] to-[#86Cdd9] hover:text-black text-white'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            >Hire Me</motion.button>
            <motion.button className='px-1 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br
             from-[#053545] via-[#179BB0] to-[#86Cdd9] hover:bg-slate-800 mt-5'
             initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
             >
            <span className='text-white bg-[#121212] hover:bg-slate-800 rounded-full px-20  lg:px-5 py-3 '>Download CV</span></motion.button>
        </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0 ml-4 ' >
            <motion.div className='outline outline-4 outline-offset-4 outline-[#179bb0]  rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative mt-9 lg:mt-0 mb-4 lg:mb-0  overflow-hidden'
            initial={{x:150 ,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1}}
            >
            <Image src='/image/iah3.jpg' alt='hero'
             width={500} height={500} priority
             className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-3xl'  />
            </motion.div>
        </div>
        </div>
       
    </section>
    )
    }
    export default HeroSection; 