import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import ViewProjet from "../ViewProject";
import { motion } from "framer-motion";

const ProjectCard = ({
  imgUrl,
  title,
  decription,
  gitUrl,
  previewUrl,
  outil,
  variants
}) => {
  const [Show, setShow] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <motion.div 
        variants={variants}
        className="shadow-lg bg-white rounded-xl flex flex-col items-center gap-0 overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="h-52 md:h-60 w-full rounded-t-xl relative group bg-gray-100">
          {imgUrl && !imageError ? (
            <Image
              src={imgUrl}
              alt={title}
              fill
              className="object-cover rounded-t-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
              priority={false}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
              <span className="text-gray-500 text-sm">{title || "Projet"}</span>
            </div>
          )}

          {/* Overlay au survol */}
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-400 rounded-t-xl">
            <Link
              href={gitUrl}
              className="h-14 w-14 border-2 mr-2 relative rounded-full border-[#adb7be] hover:border-white group/link transition-all duration-300 hover:scale-110"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
            <div
              onClick={() => setShow(true)}
              className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <EyeIcon className="h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </div>
          </div>
        </div>

        <div className="rounded-b-xl bg-white px-4 pb-4 w-full">
          <h5 className="text-xl font-semibold mt-2">{title}</h5>
          <div className="mt-4 flex gap-2 flex-wrap">
            {outil?.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 w-fit rounded-full text-[11px] font-arimo text-white bg-gradient-to-r from-gray-800 to-gray-900"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <ViewProjet
        setShow={setShow}
        show={Show}
        image={imgUrl}
        name={title}
        desc={decription}
        otl={outil}
      />
    </>
  );
};

export default ProjectCard;