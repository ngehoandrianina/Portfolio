import Image from 'next/image';
import React from 'react'
import TechUSe from '../../Pieces/Tech';
import { 
  SiReact, 
  SiNextdotjs, 
  SiSpringboot, 
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiStripe,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiRedis,
  SiElasticsearch,
  SiRabbitmq,
  SiApollographql,
  SiPrisma,
  SiSupabase,
  SiFirebase,
  SiVercel,
  SiAws,
  SiAzure,
  SiGooglecloud,
} from "react-icons/si";
import { FaJava, FaPython, FaPhp, FaRust } from "react-icons/fa";
import InfiniteCarouselWithPause from '../../Container/InfinityCarousel';
const Myskills = () => {
   const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Rust", icon: FaRust, color: "#000000" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
  ];
  // Créer les items du carousel
  const techItems = technologies.map((tech) => ({
    id: tech.name,
    content: (
      <div className="flex flex-col items-center justify-center ">
        <span className="text-xs font-medium text-gray-700 text-center">
          {/* {tech.name} */}
           <tech.icon 
            className="text-2xl mb-2" 
            style={{ color: tech.color }}
          />
        </span>
      </div>
    ),
    width: "80px",
    minWidth: "80px",
  }));
  return (
    <div className='flex flex-col items-start mt-12 overflow-hidden'>
      <p className='font-arimo font-semibold mb-4'>-- EXPERTISE</p>
      <div className='flex justify-between w-full mb-24'>
        <h1 className='text-5xl text-center '>CE QUE JE <span>MAITRISE</span> </h1>
        <p className='w-[28rem] text-sm text-right'>Création de solutions numériques innovantes,
           pensées pour répondre aux besoins 
          actuels tout en garantissant performance, flexibilité et évolution à long terme.</p>
      </div>

        <div className='flex gap-4 flex-wrap'>
           <TechUSe Url={'/svg/NextJs.svg'} Text={'Next JS'} />
           <TechUSe Url={'/image/ReactJs.jpeg'} Text={'React JS'} />
           <TechUSe Url={'/logo/NodeJs.png'} Text={'Node JS'} />
           <TechUSe Url={'/logo/NestJs.png'} Text={'Nest JS'} />
           <TechUSe Url={'/logo/Djangol.png'} Text={'Django'} />
           <TechUSe Url={'/logo/Javascript.png'} Text={'Javascripts'} />
           <TechUSe Url={'/logo/Python-logo.png'} Text={'Python'} />
           <TechUSe Url={'/logo/mysql.svg'} Text={'Mysql'} />
            <TechUSe Url={'/logo/postgresql.svg'} Text={'Postgresql'} />
            <TechUSe Url={'/logo/expo.svg'} Text={'EXPO'} />
        </div>
        <div className="relative ">
          <InfiniteCarouselWithPause 
            items={techItems}
            speed={60}
            direction="left"
            pauseOnHover={true}
            className="mt-8 py-4"
          /> 
        </div>
    </div>
  )
}

export default Myskills;