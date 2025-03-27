"use client"
import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTags from './ProjectTags';
const ProjectSection = () => {

    const PROJECT_DATA = [
        {
            id: 1,
            title: 'Projet1',
            description :'projet 1 description',
            image : '/image/Projects/image1.png',
            tag : ["All","Mobil"],
            gitUtl:"/",
            previewUrl:"/",
        },
        {
            id: 2,
            title: 'Projet2',
            description : 'projet 2 description',
            image : '/image/Projects/image2.png',
            tag : ["All","Web"],
            gitUtl:"/",
            previewUrl:"/",
        },
        {
            id: 3,
            title: 'Projet3',
            description :'projet 3 description',
            image : '/image/Projects/image3.png',
            tag : ["All","Web"],
            gitUtl:"/",
            previewUrl:"/",
        },
        {
            id: 4,
            title: 'Projet4',
            description: 'projet 4 description',
            image : '/image/Projects/image4.png',
            tag : ["All","Mobil"],
            gitUtl:"/",
            previewUrl:"/",
        },
    ];
    const [tag,setTag] = useState("All")
    const handelTagChange = (newTag) =>{
        setTag(newTag)
    }
    const filteredProject = PROJECT_DATA.filter((project) =>
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
                filteredProject.map((project) => <ProjectCard key={project.id} title={project.title} decription={project.description} imgUrl={project.image }
                gitUrl={project.gitUtl} previewUrl={project.previewUrl} />)
            }
      </div>
    </>
  )
}

export default ProjectSection
