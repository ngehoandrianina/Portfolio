"use client"
import React from 'react'
import { useState } from 'react'
import githubIcon from '../../../public/image/github.png'
import FacebookIcon from '../../../public/image/icons8_facebook.png'
import LinkDIncon from '../../../public/image/icons8_linkedin.png'
import WhatsappIcon from '../../../public/image/whatsapp.png'
import Link from 'next/link'
import Image from 'next/image'
import emailjs from 'emailjs-com'

const EmailSection = () => {

  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to:"antonioclaret2004@gmail.com",from, subject, text}),
      });

      const data = await response.json();
      console.log(data); // Affiche la réponse de l'API
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail ato am izy:', error);
    }
  };
  


  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 '>
      <div>
        <h5 className='text-xl font-bold text-white my-2 '>Let's Connect</h5>
        <p className='text-[#adb7be] mb-4 max-w-md'>
        {""}
        I'm curently available for new opportunity and open to any discussions. My inbox is always open. if you have any questions or would like to discus future project, I would be happy to share all my expertise and contribute to your initiatives.</p>
        <div className='socials flex flex-row gap-2'>
            <Link href="https://github.com"><Image src={githubIcon} alt='github' width={50} height={50}/></Link> 
            <Link href="linkedin.com"><Image src={LinkDIncon} alt='Linkedin' width={50} height={50} /></Link>
            <Link href="facebook.com"><Image src={FacebookIcon} alt='Facebook' width={50} height={50}/></Link>
            <Link href="facebook.com"><Image src={WhatsappIcon} alt='Watsapp' width={50} height={50}/></Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col ' onSubmit={handleSubmit}>
        <div className='mb-6'>
            <label htmlFor='email' className='text-white block mb-1 text-sm font-medium'>Your Email</label>
            <input type='email' id="email" required placeholder='example@domain.com' name='email'
             className='bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-grey-100 text-sm rounded-lg w-full p-2.5 '
             onChange={(e)=>setFrom(e.target.value)}
             value={from}
             />
        </div>
        <div className='mb-6'>
             <label htmlFor='subject' className='text-white block mb-1 text-sm font-medium'>Subject</label>
            <input type='text' id="subject" required placeholder='Just saying hi' name='subject'
             className='bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-grey-100 text-sm rounded-lg w-full p-2.5 '
             onChange={(e)=>setSubject(e.target.value)}
             value={subject}
             />
        </div>
        <div className='mb-6'>
             <label htmlFor='message' className='text-white block mb-1 text-sm font-medium'>Message</label>
            <textarea type='text' id="Message" placeholder='Your Message' 
             className='bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-grey-100 text-sm rounded-lg w-full p-2.5 '
             onChange={(e)=>setText(e.target.value)}
             value={text}
             />
        </div>
        <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
            Send message
        </button>
        
        </form>
      </div>
    </section>
  )
}

export default EmailSection
