import Image from 'next/image'
import React from 'react'
import ProgessBar from './Pieces/Progress'
import SkillsContainer from './Container/SkillsContainer'

const SkillsSection = () => {
  return (
    <div className='space-y-8'>
      <h1 className='text-center text-4xl font-bold text-white mt-4 '>My Skills</h1>
      <div>
      <h1 className='text-2xl mb-4'>Web Technologies</h1>
      <div className='flex flex-col md:flex-row gap-4'>
          <SkillsContainer src={'/logo/html.png'} value={95} Title={"HTML"}/>
          <SkillsContainer src={'/logo/css.png'} value={80} Title={'CSS'}/>
          <SkillsContainer src={'/logo/js.png'} value={85} Title={'JAVASCRIPT'}/>
      </div>
      </div>
      <div>
      <h1 className='text-2xl mb-4'>Programming Languages</h1>
      <div className='flex flex-col md:flex-row gap-4'>
          <SkillsContainer src={'/logo/js.png'} value={85} Title={'JAVASCRIPT'}/>
          <SkillsContainer src={'/logo/python.png'} value={95} Title={"PYTHON"}/>
          <SkillsContainer src={'/logo/php.png'} value={80} Title={'PHP'}/>
          <SkillsContainer src={'/logo/java.png'} value={80} Title={'JAVA'}/>
          
      </div>
      </div>
      <div>
      <h1 className='text-2xl mb-4'>Front-end Technologies</h1>
      <div className='flex flex-col flex-wrap md:flex-row gap-4'>
          <SkillsContainer src={'/logo/reactjs.png'} value={95} Title={"REACT JS"}/>
          <SkillsContainer src={'/logo/nextjs.png'} value={80} Title={'NEXT JS'}/>
          <SkillsContainer src={'/logo/vuejs.png'} value={85} Title={'VUE JS'}/>
          <SkillsContainer src={'/logo/reactnative.png'} value={85} Title={'REACT NATIVE'}/>
          <SkillsContainer src={'/logo/shadcn.png'} value={85} Title={'SHADCN UI'}/>
          <SkillsContainer src={'/logo/materialui.png'} value={85} Title={'MATERIAL UI'}/>
          <SkillsContainer src={'/logo/tailwindcss.jpg'} value={85} Title={'TAILWIND CSS'}/>
          <SkillsContainer src={'/logo/bootstrap.jpg'} value={85} Title={'BOOTSTRAP'}/>
      </div>
      </div>
      <div>
        <h1 className='text-2xl mb-4'>Backend Technologies</h1>
        <div className='flex flex-col flex-wrap md:flex-row gap-4'>
            <SkillsContainer src={'/logo/nestjs.jpg'} value={95} Title={"NEST JS "}/>
            <SkillsContainer src={'/logo/expressjs.jpg'} value={80} Title={'EXPRESS'}/>
            <SkillsContainer src={'/logo/django.png'} value={85} Title={'DJANGO'}/>
            <SkillsContainer src={'/logo/fastapi.jpg'} value={85} Title={'FAST API'}/>
            <SkillsContainer src={'/logo/springboot.jpg'} value={85} Title={'SPRING BOOT'}/>
            <SkillsContainer src={'/logo/laravel.jpg'} value={85} Title={'LARAVEL'}/>
        </div>
      </div>
      <div>
        <h1 className='text-2xl mb-4'>DBMS</h1>
        <div className='flex flex-col flex-wrap md:flex-row gap-4'>
            <SkillsContainer src={'/logo/mysql.png'} value={95} Title={"MYSQL "}/>
            <SkillsContainer src={'/logo/postgresql.png'} value={80} Title={'POSTGRESQL'}/>
        </div>
      </div>

      <div>
        <h1 className='text-2xl mb-4'>Development Tools</h1>
        <div className='flex flex-col flex-wrap md:flex-row gap-4'>
            <SkillsContainer src={'/logo/git.png'} value={95} Title={"GIT "}/>
            <SkillsContainer src={'/logo/github.png'} value={95} Title={"GITHUB "}/>
            <SkillsContainer src={'/logo/git.png'} value={80} Title={'GIT FLOW'}/>
            <SkillsContainer src={'/logo/figma.png'} value={80} Title={'FIGMA'}/>
            <SkillsContainer src={'/logo/jest.jpg'} value={80} Title={'JEST'}/>
            <SkillsContainer src={'/logo/postman.png'} value={80} Title={'POSTMAN'}/>
            <SkillsContainer src={'/logo/insomnia.jpg'} value={80} Title={'INSOMNIA'}/>
            <SkillsContainer src={'/logo/docker.png'} value={80} Title={'DOCKER'}/>
        </div>
      </div>
      
    </div>
  )
}

export default SkillsSection