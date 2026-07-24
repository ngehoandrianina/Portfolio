import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import githubIcon from "../../../../../public/logo/github.svg";
import FacebookIcon from "../../../../../public/image/icons8_facebook.png";
import LinkDIncon from "../../../../../public/logo/linkedin.svg";
import WhatsappIcon from "../../../../../public/logo/whatsapp.svg";
import Gmail from "../../../../../public/logo/gmail.svg";

const SocialMediaContact = () => {
    const style = 'flex items-center bg-primary hover:scale-105 shadow w-full text-white gap-2 px-8 py-2 border rounded-3xl font-roboto font-semibold '
  return (
    <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            className=" grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 lg:mt-6  w-full"
            >
            <Link href="mailto:antonioclaret2004@gmail.com " className={`${style}  `} target="_blank">
                <Image src={Gmail} alt="Watsapp" width={20} height={50}  /> Email
              </Link>
              <Link href="https://github.com/ngehoandrianina" className={style}  target="_blank">
                <Image src={githubIcon} alt="github" width={20} height={50} /> GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/antonio-claret-baa78930b/"
                target="_blank" className={style}
              >
                <Image src={LinkDIncon} alt="Linkedin" width={20} height={50} /> LinkDin
              </Link>
              {/* <Link
                href="https://www.facebook.com/claretanthoonio/"
                target="_blank" className={style}
              >
                <Image
                  src={FacebookIcon}
                  alt="Facebook"
                  width={20}
                  height={50}
                /> Facebook
              </Link> */}
              <Link href="https://wa.me/261340760917" className={style} target="_blank">
                <Image
                  src={WhatsappIcon}
                  alt="Watsapp"
                  width={20}
                  height={50}
                /> WhatsApp
              </Link>
              
            </motion.div>
  )
}

export default SocialMediaContact