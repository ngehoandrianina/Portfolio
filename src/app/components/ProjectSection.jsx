"use client"
import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTags from './ProjectTags';
import projectsData from '@/data/Projects.json';
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
      <h2 className='text-center text-4xl font-bold text-white mt-4 '>My Project
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
       <ProjectTags onClick={handelTagChange} name="All" isSelected={tag  === "All"} />
       <ProjectTags onClick={handelTagChange} name="Web" isSelected={tag  === "Web"} />
       <ProjectTags onClick={handelTagChange} name="Mobil" isSelected={tag  === "Mobil"} />
      </div>
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
