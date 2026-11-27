'use client'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '../../Container/ProjectCard/ProjectCard';

function ProjectCardAnimated({ project, idx }) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 50, opacity: 0 }}
      animate={isCardInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.6,
        delay: idx * 0.08,
      }}
    >
      <ProjectCard
        outil={project.technologies}
        title={project.title}
        decription={project.description}
        imgUrl={project.image_url}
        gitUrl={project.github_url}
        previewUrl={project.demo_url} 
      />
    </motion.div>
  );
}

export default ProjectCardAnimated;