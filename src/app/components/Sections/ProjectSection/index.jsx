"use client";
import React, { useState } from "react";
import ProjectCard from "../../Container/ProjectCard/ProjectCard";
import ProjectTags from "../../Container/ProjectTags";
import projectsData from "../../../../data/Projects.json";
import { motion } from "framer-motion";
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
    <div className="space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ margin: "-100px" }}
        className="text-center text-2xl  mt-16 "
      >
        MY PROJECT
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ margin: "-100px" }}
        className="text-white flex flex-row justify-center items-center gap-2 py-6 "
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
