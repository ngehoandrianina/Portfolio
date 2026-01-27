import Image from 'next/image'
import React from 'react'
import ProgessBar from './Pieces/Progress'
import SkillsContainer from './Container/SkillsContainer'
import SkillsData from '@/data/Skills.json'
import { motion } from 'framer-motion'
const SkillsSection = () => {
  return (
    <div className='space-y-8'>
      <motion.h1 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} viewport={{margin:"-100px"}} className='text-center text-4xl font-bold text-white mt-4 '>My Skills</motion.h1>
      <div>
      <motion.h1 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} viewport={{margin:"-100px"}} className='text-2xl mb-4'>Web Technologies</motion.h1>
      <div className='flex flex-col md:flex-row gap-4'>
          <SkillsContainer src={'/logo/html.png'} value={95} Title={"HTML"}/>
          <SkillsContainer src={'/logo/css.png'} value={80} Title={'CSS'}/>
          <SkillsContainer src={'/logo/js.png'} value={85} Title={'JAVASCRIPT'}/>
      </div>
      </div>
      <div>
      <motion.h1 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} viewport={{margin:"-100px"}} className='text-2xl mb-4'>Programming Languages</motion.h1>
      <div className='flex flex-col md:flex-row gap-4'>
          <SkillsContainer src={'/logo/js.png'} value={80} Title={'JAVASCRIPT'}/>
          <SkillsContainer src={'/logo/python.png'} value={70} Title={"PYTHON"}/>
          <SkillsContainer src={'/logo/php.png'} value={50} Title={'PHP'}/>
          <SkillsContainer src={'/logo/java.png'} value={50} Title={'JAVA'}/>

      </div>
      </div>
      <div>
      <motion.h1 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} viewport={{margin:"-100px"}} className='text-2xl mb-4'>Front-end Technologies</motion.h1>
      <div className='flex flex-col flex-wrap md:flex-row gap-4'>
          <SkillsContainer src={'/logo/reactjs.png'} value={90} Title={"REACT JS"}/>
          <SkillsContainer src={'/logo/nextjs.png'} value={80} Title={'NEXT JS'}/>
          <SkillsContainer src={'/logo/vuejs.png'} value={75} Title={'VUE JS'}/>
          <SkillsContainer src={'/logo/reactnative.png'} value={75} Title={'REACT NATIVE'}/>
          <SkillsContainer src={'/logo/shadcn.png'} value={60} Title={'SHADCN UI'}/>
          <SkillsContainer src={'/logo/materialui.png'} value={60} Title={'MATERIAL UI'}/>
          <SkillsContainer src={'/logo/tailwindcss.jpg'} value={80} Title={'TAILWIND CSS'}/>
          <SkillsContainer src={'/logo/bootstrap.jpg'} value={70} Title={'BOOTSTRAP'}/>
      </div>
      </div>
      <div>
        <motion.h1 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} viewport={{margin:"-100px"}} className='text-2xl mb-4'>Backend Technologies</motion.h1>
        <div className='flex flex-col flex-wrap md:flex-row gap-4'>
            <SkillsContainer src={'/logo/nestjs.jpg'} value={75} Title={"NEST JS "}/>
            <SkillsContainer src={'/logo/expressjs.jpg'} value={75} Title={'EXPRESS'}/>
            <SkillsContainer src={'/logo/django.png'} value={75} Title={'DJANGO'}/>
            <SkillsContainer src={'/logo/fastapi.jpg'} value={50} Title={'FAST API'}/>
            <SkillsContainer src={'/logo/springboot.jpg'} value={40} Title={'SPRING BOOT'}/>
            <SkillsContainer src={'/logo/laravel.jpg'} value={40} Title={'LARAVEL'}/>
        </div>
      </div>
      <div>
        <motion.h1 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} viewport={{margin:"-100px"}} className='text-2xl mb-4'>DBMS</motion.h1>
        <div className='flex flex-col flex-wrap md:flex-row gap-4'>
            <SkillsContainer src={'/logo/mysql.png'} value={80} Title={"MYSQL "}/>
            <SkillsContainer src={'/logo/postgresql.png'} value={75} Title={'POSTGRESQL'}/>
        </div>
      </div>

      <div>
        <motion.h1 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} viewport={{margin:"-100px"}} className='text-2xl mb-4'>Development Tools</motion.h1>
        <div className='flex flex-col flex-wrap md:flex-row gap-4'>
            <SkillsContainer src={'/logo/git.png'} value={80} Title={"GIT "}/>
            <SkillsContainer src={'/logo/github.png'} value={80} Title={"GITHUB "}/>
            <SkillsContainer src={'/logo/git.png'} value={80} Title={'GIT FLOW'}/>
            <SkillsContainer src={'/logo/figma.png'} value={70} Title={'FIGMA'}/>
            <SkillsContainer src={'/logo/jest.jpg'} value={75} Title={'JEST'}/>
            <SkillsContainer src={'/logo/postman.png'} value={80} Title={'POSTMAN'}/>
            <SkillsContainer src={'/logo/insomnia.jpg'} value={80} Title={'INSOMNIA'}/>
            <SkillsContainer src={'/logo/docker.png'} value={70} Title={'DOCKER'}/>
        </div>
      </div>
      
    </div>
  )
}

export default SkillsSection