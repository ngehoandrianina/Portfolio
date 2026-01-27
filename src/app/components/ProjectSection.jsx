"use client"
import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTags from './ProjectTags';
import projectsData from '@/data/Projects.json';
import { motion } from 'framer-motion';
const ProjectSection = () => {

    const [tag,setTag] = useState("All")
    const [Show,setShow] = useState(false)
    const handelTagChange = (newTag) =>{
        setTag(newTag)
    }
    
    const filteredProject = projectsData.filter((project) =>
        project.tag.includes(tag)
    )
  return (
    <>
      <motion.h2 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} viewport={{margin:"-100px"}} className='text-center text-4xl font-bold text-white mt-12 '>My Project
      </motion.h2>
      <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} viewport={{margin:"-100px"}} className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
       <ProjectTags onClick={handelTagChange} name="All" isSelected={tag  === "All"} />
       <ProjectTags onClick={handelTagChange} name="Web" isSelected={tag  === "Web"} />
       <ProjectTags onClick={handelTagChange} name="Mobil" isSelected={tag  === "Mobil"} />
      </motion.div>
      <div className='grid md:grid-cols-3 gap-8  md:gap-12'>
            {
                filteredProject.map((project) =><ProjectCard key={project.id} outil={project.outils}   title={project.title} decription={project.description} imgUrl={project.image }
                gitUrl={project.gitUtl} previewUrl={setShow} />
                )
            }
      </div>
      
    </>
  )
}

export default ProjectSection
