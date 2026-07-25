"use client";
import React from 'react';
import { useState, useRef } from 'react';
import githubIcon from "../../../../../public/logo/githubn.svg";
import FacebookIcon from "../../../../../public/image/icons8_facebook.png";
import LinkDIncon from "../../../../../public/logo/linkedin.svg";
import WhatsappIcon from "../../../../../public/logo/whatsapp.svg";
import Gmail from "../../../../../public/logo/gmail.svg";
import Link from 'next/link';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import { motion, useInView } from 'framer-motion';

const EmailSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [Status, setStatus] = useState('');
  const [style, setStyle] = useState('text-green-300');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch('https://formspree.io/f/mnndqavp', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      setStatus('Message envoyé !');
      form.reset();
      setFrom('');
      setSubject('');
      setText('');
    } else {
      setStatus("Erreur lors de l'envoi.");
      setStyle("text-red-500");
    }
  };

  // Variants pour le conteneur principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Variants pour les éléments enfants
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.6,
      },
    },
  };

  // Variants pour le formulaire
  const formVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  // Variants pour les icônes sociales
  const socialVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.8 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.5,
        delay: index * 0.1 + 0.3,
      },
    }),
    hover: {
      y: -10,
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  // Variants pour les champs du formulaire
  const fieldVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.5,
        delay: index * 0.1 + 0.3,
      },
    }),
  };

  return (
    <motion.section
      ref={sectionRef}
      className='grid md:grid-cols-2 md:mt-12 md:py-24 gap-4 overflow-hidden relative'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Décoration de fond */}
      <motion.div
        className="absolute -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -top-20 -left-20"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.div
        className="absolute -z-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -bottom-20 -right-20"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      {/* Colonne Gauche - Texte et infos */}
      <motion.div className='space-y-6' variants={itemVariants}>
        <motion.div 
          className='font-semibold flex items-center gap-2 text-primary tracking-wider'
          variants={itemVariants}
        >
          <div  className="w-8 h-1 bg-primary"></div> CONTACTE
        </motion.div>
        
        <motion.h1 
          className='text-5xl font-bold my-2'
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            transition: { type: "spring", stiffness: 400, damping: 17 }
          }}
        >
          TRAVAILLONS<br/> ENSEMBLE.
        </motion.h1>
        
        <motion.p 
          className='mb-4 max-w-md text-slate-700 leading-relaxed'
          variants={itemVariants}
          whileHover={{
            x: 5,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          Disponible pour de nouvelles opportunités, je suis ouvert à toute discussion. 
          N'hésitez pas à me contacter pour toute question ou projet futur.<br/> 
          Je serais ravi de partager mon expertise et de contribuer à vos initiatives.
        </motion.p>
        
        {/* Réseaux sociaux avec animation individuelle */}
        <motion.div 
          className='socials flex flex-row gap-8 '
          variants={itemVariants}
        >
          {[
            { href: "https://github.com/ngehoandrianina", icon: githubIcon, alt: 'github' },
            { href: "https://www.linkedin.com/in/antonio-claret-baa78930b/", icon: LinkDIncon, alt: 'Linkedin' },
            { href: "https://wa.me/261340760917", icon: WhatsappIcon, alt: 'Whatsapp' },
            { href: "mailto:antonioclaret2004@gmail.com", icon: Gmail, alt: 'Gmail' },
          ].map((social, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={socialVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            >
              <Link href={social.href} target="_blank">
                <Image 
                  src={social.icon} 
                  alt={social.alt} 
                  width={40} 
                  height={50}
                  className="transition-all duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Colonne Droite - Formulaire */}
      <motion.div 
        className='border p-4 md:p-8 rounded-xl bg-white mt-12 shadow-lg hover:shadow-2xl transition-shadow duration-300'
        variants={formVariants}
      >
        <motion.form 
          className='flex flex-col' 
          onSubmit={handleSubmit}
        >
          <motion.h1 
            className='mb-4 text-lg font-bold text-gray-800'
            initial={{ y: -20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Un message ?
          </motion.h1>

          {/* Champ Email */}
          <motion.div 
            className='mb-6'
            custom={0}
            variants={fieldVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <label htmlFor='email' className='block mb-1 text-sm font-medium text-gray-700'>
              Votre Email
            </label>
            <motion.input
              type='email'
              id="email"
              required
              placeholder='example@domain.com'
              name='Email'
              className='bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-grey-100 text-sm rounded-lg w-full p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300'
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)",
                transition: { duration: 0.2 },
              }}
            />
          </motion.div>

          {/* Champ Sujet */}
          <motion.div 
            className='mb-6'
            custom={1}
            variants={fieldVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <label htmlFor='subject' className='block mb-1 text-sm font-medium text-gray-700'>
              Sujet
            </label>
            <motion.input
              type='text'
              id="subject"
              required
              placeholder='Bonjour...'
              name='Subject'
              className='bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-grey-100 text-sm rounded-lg w-full p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300'
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)",
                transition: { duration: 0.2 },
              }}
            />
          </motion.div>

          {/* Champ Message */}
          <motion.div 
            className='mb-6'
            custom={2}
            variants={fieldVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <label htmlFor='message' className='block mb-1 text-sm font-medium text-gray-700'>
              Message
            </label>
            <motion.textarea
              type='text'
              id="Message"
              placeholder='Votre message...'
              name='Message'
              className='bg-[#18191E] border border-[#33353f] h-32 placeholder-[#9ca2a9] text-grey-100 text-sm rounded-lg w-full p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 resize-none'
              onChange={(e) => setText(e.target.value)}
              value={text}
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)",
                transition: { duration: 0.2 },
              }}
            />
          </motion.div>

          {/* Bouton d'envoi */}
          <motion.button
            type='submit'
            className='bg-gradient-to-tr from-Tersary to-dark hover:bg-gradient-to-tl transition-all duration-300 text-white font-medium py-2.5 px-5 rounded-lg w-full relative overflow-hidden group'
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 20, opacity: 0, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: 0.6,
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Effet de brillance au survol */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            />
            <span className="relative z-10">Envoyer le message</span>
          </motion.button>
        </motion.form>

        {/* Message de statut */}
        {Status && (
          <motion.p
            className={`${style} mt-2 font-light font-sans`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {Status}
          </motion.p>
        )}
      </motion.div>
    </motion.section>
  );
};

export default EmailSection;