"use client";
import React, { useState } from "react";
import ProjectCard from "../../Container/ProjectCard/ProjectCard";
import ProjectTags from "../../Container/ProjectTags";
import projectsData from "../../../../data/Projects.json";
import { motion } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const [Show, setShow] = useState(false);
  const handelTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <div className="mt-16">
      <p className="font-semibold">-- PROJETS</p>
      <div className="flex justify-between  mt-8">
        <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ margin: "-100px" }}
        className=" text-5xl "
      >
        MES PROJETS
      </motion.h1>
      <div className="flex flex-col items-end gap-4">
        <p className="w-[28rem] text-sm text-right">Une sélection de projets développés avec des technologies modernes,
         mettant l’accent sur la performance, 
         la qualité du code et une expérience 
         utilisateur optimale.</p>
      <button className="flex items-center font-bold shadow-lg gap-2 bg-primary px-6 py-2 rounded-3xl">Github <ArrowUpRightIcon className="w-6"/></button>
      </div>
      </div>
     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ margin: "-100px" }}
        className="text-white flex flex-row justify-start items-center gap-2 py-6 "
      >
        <ProjectTags
          onClick={handelTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTags
          onClick={handelTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTags
          onClick={handelTagChange}
          name="Mobil"
          isSelected={tag === "Mobil"}
        />
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8  md:gap-12">
        {filteredProject.map((project) => (
          <ProjectCard
            key={project.id}
            outil={project.outils}
            title={project.title}
            decription={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUtl}
            previewUrl={setShow}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
