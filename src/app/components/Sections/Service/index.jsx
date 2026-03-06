"use client";
import react, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../../Pieces/TabsButton";
import Cassroll from "../../Container/Cassroll";
import { motion } from "framer-motion";
import ServiceCard from "../../Container/ServiceCard";

const AboutSection = () => {
  const Service = [
    {
      "lienimage": "/image/service/FullStack.jpg",
      "Titre": "Full-Stack Web Development",
      "Description": "Design and develop complete web applications using modern technologies such as React, Node.js, and REST APIs. From frontend interfaces to backend systems and databases."
    },
    {
      "lienimage": "/image/service/Frontend2.jpg",
      "Titre": "Frontend Development",
      "Description": "Create responsive and interactive user interfaces using HTML, CSS, JavaScript, React, and modern UI frameworks to deliver a smooth user experience."
    },
    {
      "lienimage": "/image/service/Backend.jpg",
      "Titre": "Backend Development",
      "Description": "Build secure and scalable backend systems using technologies like Node.js, Django, or .NET, including API development and database integration."
    },
    {
      "lienimage": "/image/service/Database.jpg",
      "Titre": "Database Design",
      "Description": "Design and optimize relational and NoSQL databases such as MySQL, PostgreSQL, and MongoDB to ensure efficient data storage and retrieval."
    },
    {
      "lienimage": "/image/service/Api.jpg",
      "Titre": "API Development & Integration",
      "Description": "Develop RESTful APIs and integrate third-party services to enable communication between applications and external platforms."
    },
    {
      "lienimage": "/image/service/Maintenance.jpg",
      "Titre": "Web Application Maintenance",
      "Description": "Provide maintenance, performance optimization, bug fixing, and updates to ensure applications remain secure and efficient."
    }
  ]
  const [tab, setTab] = useState("skills");
  const [Ispending, StartTransition] = useTransition();

  const handleTabChange = (id) => {
    StartTransition(() => {
      setTab(id);
    });
  };
  const image = [
    "/image/iah4.jpg",
    "/image/iah8.jpg",
    "/image/iah2.jpg",
    "/image/photoko.jpg",
  ];
  return (
    <section className="text-white mb-4 ">
      <div className=" gap-8 items-center xl:gap-16  sm:py-16  w-[100%] ">
        {/* <Cassroll>
          {image.map((image, index) => (
            <img src={image} key={index} className="rounded-xl" />
          ))}
        </Cassroll> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ margin: "-100px" }}
            className="text-4xl font-bold text-white mb-4 text-center"
          >
            What I Can Do
          </motion.h2>
          {/* <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ margin: "-100px" }}
            className="text-base lg:text-lg "
          >
            I am a Full-Stack Developer focused on building modern and efficient
            web applications. <br />
            <br />
            I work with both front-end and back-end technologies to create
            user-friendly, reliable, and scalable solutions.
            <br />
            <br />I am passionate about software development and continuously
            improving my technical skills. My goal is to grow as a developer,
            take on challenging projects, and contribute to innovative and
            impactful applications.
          </motion.p> */}
          <div className="flex gap-8 flex-wrap justify-center">
              {
                Service.map((service,idx)=>(
                  <ServiceCard key={idx} image={service.lienimage} title={service.Titre} Description={service.Description} />
                ))
              }
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
