import React from 'react'
import ExpericenCard from '../../Container/ExperienceCard'
import experienceData from '@/data/Experience.json'
import { motion } from 'framer-motion'
const ExperienceSection = () => {
  return (
    <section className='flex flex-col items-center'>
        <motion.h1 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}}  className='text-4xl font-bold text-white mb-4 '>My Experience</motion.h1>
        {
            experienceData && experienceData.map((data)=>(
                <ExpericenCard Title={data.Title} variant={data.id % 2 !== 0 ? "left":"rigth"} Date={data.Date} Address={data.Address} key={data.id}/>
            ))
        }
    </section>
  )
}

export default ExperienceSection