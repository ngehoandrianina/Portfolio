"use client";
import react, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../../Pieces/TabsButton";
import Cassroll from "../../Container/Cassroll";
import { motion } from "framer-motion";
import ServiceCard from "../../Container/ServiceCard";

const AboutSection = () => {
  const TAB_DATA = [
    {
      title: "Education",
      id: "Education",
      content: (
        <ul className="list-disc pl-2">
          <li>
            <b>2025 - </b>professional bachelor
          </li>
          <li>
            <b>2025 - </b>3 year of professional bachelor
          </li>
          <li>
            <b>2023-2024 - </b>2 year of professional bachelor{" "}
          </li>
          <li>
            <b>2022-2023 - </b>1st year of professional bachelor
          </li>
          <li>
            <b>2022 - </b>BACC series S with Fairly Good
          </li>
        </ul>
      ),
    },
    {
      title: "skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2 flex">
          <ul className="mr-2">
            {" "}
            <li>
              <b>Fronted</b>
            </li>
            <li>-React native</li>
            <li>-ReactJS</li>
            <li>-NextJS</li>
            <li>-HTML</li>
            <li>-tailwindcss</li>
            <li>-Bootstrap</li>
          </ul>
          <ul className="mr-2">
            {" "}
            <li>
              <b>Backend</b>
            </li>
            <li>-NodeJS</li>
            <li>-Express</li>
            <li>-Django</li>
            <li>-Flask</li>
            <li>-Fast API</li>
          </ul>
          <ul>
            {" "}
            <li>
              <b>DBMS</b>
            </li>
            <li>-Mysql</li>
            <li>-Postgresql</li>
          </ul>
        </ul>
      ),
    },
    {
      title: "Tools",
      id: "Tools",
      content: (
        <ul className="list-disc pl-2">
          <li>Vs Code</li>
          <li>Netbeans</li>
          <li>Xammp</li>
        </ul>
      ),
    },
    {
      title: "OS",
      id: "OS",
      content: (
        <ul className="list-disc pl-2">
          <li>Unix</li>
          <li>Windows</li>
        </ul>
      ),
    },
    {
      title: "experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-2">
          <li className="list-none">experience :</li>
          <li>developer inter NEOTIK Corporation</li>
          <li>Participant in DevHunt 4.0</li>
          <li>4th place in DevHunt 5.0</li>
          <li>
            1 september - 24 november 2024 : I am an IT intern at Aquarelle
            Madagascar{" "}
          </li>
        </ul>
      ),
    },
  ];
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
            My service
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
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
