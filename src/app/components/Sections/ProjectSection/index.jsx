"use client";
import React, { useState } from "react";
import ProjectCard from "../../Container/ProjectCard/ProjectCard";
import ProjectTags from "../../Container/ProjectTags";
import projectsData from "../../../../data/Projectsfr.json";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { useInView } from "react-intersection-observer";
const ProjectSection = () => {
  const [tag, setTag] = useState("Touts");
  const [Show, setShow] = useState(false);
  const handelTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  //Animation
const { ref, inView } = useInView({
    triggerOnce: true, // L'animation ne se joue qu'une fois
    threshold: 0.1, // Déclenche quand 10% de la section est visible
  });
// Variants pour l'animation des cartes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai entre chaque carte (0.2s)
      },
    },
  };

  const cardVariants = {
    hidden: { 
      y: 50, // Position de départ (en bas)
      opacity: 0,
    },
    visible: {
      y: 0, // Position finale
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.5,
      },
    },
  };
  return (
    <div ref={ref} className="mt-16">
      <p className="font-semibold">-- PROJETS</p>
      <div className="flex justify-between  mt-8">
        <h1
       
        className=" text-5xl "
      >
        MES PROJETS
      </h1>
      <div className="flex flex-col items-end gap-4">
        <p className="w-[28rem] text-sm text-right">Une sélection de projets développés avec des technologies modernes,
         mettant l’accent sur la performance, 
         la qualité du code et une expérience 
         utilisateur optimale.</p>
      <button className="flex items-center font-bold shadow-lg gap-2 bg-primary px-6 py-2 rounded-3xl">Github <ArrowUpRightIcon className="w-6"/></button>
      </div>
      </div>
     
      <div
       
        className="text-white flex flex-row justify-start items-center gap-2 py-6 "
      >
        <ProjectTags
          onClick={handelTagChange}
          name="Touts"
          isSelected={tag === "Touts"}
        />
        <ProjectTags
          onClick={handelTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTags
          onClick={handelTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} className="grid md:grid-cols-3 gap-8  md:gap-12">
        {filteredProject.map((project,idx) => {
            const [cardRef, cardInView] = useInView({
            triggerOnce: true,
            threshold: 0.2, // 20% de la carte visible
          });
          return(
              <motion.div
              key={project.id}
              ref={cardRef}
              initial={{ y: 60, opacity: 0 }}
              animate={cardInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 24,
                duration: 0.6,
                delay: idx * 0.3, // Petit délai entre chaque carte
              }}
            >
            <ProjectCard
            key={project.id}
            outil={project.outils}
            title={project.title}
            decription={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUtl}
            previewUrl={setShow}
          />
          </motion.div>
          )
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
