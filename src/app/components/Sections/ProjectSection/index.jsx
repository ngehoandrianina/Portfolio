"use client";
import React, { useState, useRef,useEffect } from "react";
import ProjectCard from "../../Container/ProjectCard/ProjectCard";
import ProjectTags from "../../Container/ProjectTags";
import projectsData from "../../../../data/Projectsfr.json";
import { motion, useInView } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { supabase } from '../../../../lib/supabaseClient';
import ProjectCardAnimated from "./projetCardAnimated"; 

const ProjectSection = () => {
  const [tag, setTag] = useState("Touts");
  const [Show, setShow] = useState(false);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function fetchProjects() {
        // On sélectionne tout, mais on filtre sur published = true
        const { data:projet, error } = await supabase
          .from('projects')
          .select('*')
          .eq('published', true) // Seulement les projets publiés
          .order('created_at', { ascending: false }); // Les plus récents en premier
        const { data: categorie } = await supabase.from('categories').select('*');

        if (error) {
          console.error('Erreur lors de la récupération des projets:', error);
        } else {
          setProjects(projet);
          console.log('Projets récupérés:', projet);
          setCategories(categorie);
        }
        setLoading(false);
      }

      fetchProjects();
    }, []);
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projects.filter((project) =>
  {
    // Cas "Touts" : on affiche tout, sans filtre
  if (tag === "Touts") return true;

  // On cherche l'ID de la catégorie qui correspond au nom du tag
  const categoryId = categories.find((c) => c.name === tag)?.id;

  // Si la catégorie n'existe pas, on n'affiche rien pour ce tag
  if (!categoryId) return false;

  // On compare l'ID du projet avec l'ID trouvé
  return project.category_id === categoryId;
  }
  );

  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });
  return (
    <div ref={sectionRef} className="md:mt-16 backdrop-blur-[2px]">
      <motion.div 
  className="font-semibold flex items-center gap-2 text-primary"
  initial={{ opacity: 0, x: -30 }}
  animate={isSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
    delay: 0.1,
  }}
>
  <motion.div 
    className="w-8 h-1 bg-primary"
    initial={{ width: 0 }}
    animate={isSectionInView ? { width: 32 } : { width: 0 }}
    transition={{
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    }}
  />
  <motion.span
    initial={{ opacity: 0 }}
    animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
    transition={{
      duration: 0.5,
      delay: 0.3,
    }}
  >
    PROJETS
  </motion.span>
</motion.div>
      <div className="flex flex-col md:flex-row justify-between mt-8 ">
        <motion.h1 initial={{ opacity: 0, x: -50 }} animate={isSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}  className="text-5xl bg-gradient-to-r from-Tersary to-black bg-clip-text text-transparent font-extrabold">
          MES PROJETS
        </motion.h1>
        <div className="flex flex-col md:items-end gap-4">
          <motion.p
           initial={{ opacity: 0, y: 20 }}
      animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      }}
      whileHover={{
        x: 5,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
          className="md:w-[28rem] md:text-sm md:text-right mt-4 md:mt-0 leading-relaxed">
            Une sélection de projets développés avec des technologies modernes,
            mettant l'accent sur la performance, 
            la qualité du code et une expérience 
            utilisateur optimale.
          </motion.p>
          <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isSectionInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.6,
        delay: 0.4,
      }}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="https://github.com/ngehoandrianina" target="_blank">
        <button className="flex items-center font-bold shadow-lg gap-2 bg-primary px-6 py-2 rounded-3xl relative overflow-hidden group">
          {/* Effet de brillance */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="relative z-10 flex items-center gap-2 text-dark">
            Github <ArrowUpRightIcon className="w-6 transition-transform duration-300 group-hover:rotate-45"/>
          </span>
        </button>
      </Link>
    </motion.div>
        </div>
      </div>
     
      {/* Tags avec animation */}
<motion.div 
  className="text-white flex flex-row justify-start items-center gap-2 py-6"
  initial={{ opacity: 0, y: 30 }}
  animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 25,
    duration: 0.6,
    delay: 0.5,
  }}
>
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={isSectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 25,
      duration: 0.5,
      delay: 0.6,
    }}
    whileHover={{ 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 17 }
    }}
  >
    <ProjectTags
      onClick={handleTagChange}
      name="Touts"
      isSelected={tag === "Touts"}
    />
  </motion.div>
  {
    categories.map((tech, index) => (
    <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={isSectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 25,
      duration: 0.5,
      delay: 0.8,
    }}
    whileHover={{ 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 17 }
    }}
  >
    <ProjectTags
      onClick={handleTagChange}
      name={tech.name}
      isSelected={tag === tech.name}
    />
  </motion.div>
    ))
  }
  
    </motion.div>
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProject.map((project, idx) => (
        <ProjectCardAnimated
          key={project.id}
          project={project}
          idx={idx}
        />
      ))}
    </div>
    </div>
  );
};

export default ProjectSection;