"use client";
import React, { useState } from "react";
import ProjectCard from "../../Container/ProjectCard/ProjectCard";
import ProjectTags from "../../Container/ProjectTags";
import projectsData from "../../../../data/Projectsfr.json";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const ProjectSection = () => {
  const [tag, setTag] = useState("Touts");
  const [Show, setShow] = useState(false);
  
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // ✅ Hook appelé au niveau supérieur du composant (pas dans une boucle)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Variants pour l'animation des cartes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
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
      <div className="flex justify-between mt-8">
        <h1 className="text-5xl bg-gradient-to-r from-Tersary to-black bg-clip-text text-transparent font-extrabold">
          MES PROJETS
        </h1>
        <div className="flex flex-col items-end gap-4">
          <p className="w-[28rem] text-sm text-right">
            Une sélection de projets développés avec des technologies modernes,
            mettant l'accent sur la performance, 
            la qualité du code et une expérience 
            utilisateur optimale.
          </p>
          <Link href="https://github.com/ngehoandrianina"  target="_blank">
          <button className="flex items-center font-bold shadow-lg gap-2 bg-primary px-6 py-2 rounded-3xl">
            Github <ArrowUpRightIcon className="w-6"/>
          </button>
          </Link>
        </div>
      </div>
     
      <div className="text-white flex flex-row justify-start items-center gap-2 py-6">
        <ProjectTags
          onClick={handleTagChange}
          name="Touts"
          isSelected={tag === "Touts"}
        />
        <ProjectTags
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTags
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid md:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProject.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            custom={idx} // Passer l'index pour un délai personnalisé
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 24,
              duration: 0.6,
              delay: idx * 0.1,
            }}
          >
            <ProjectCard
              outil={project.outils}
              title={project.title}
              decription={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUtl}
              previewUrl={setShow}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectSection;