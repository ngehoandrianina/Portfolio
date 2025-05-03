"use client"
import React from 'react'
import { useState } from 'react'
import githubIcon from '../../../public/image/github.png'
import FacebookIcon from '../../../public/image/icons8_facebook.png'
import LinkDIncon from '../../../public/image/icons8_linkedin.png'
import WhatsappIcon from '../../../public/image/whatsapp.png'
import Gmail from '../../../public/image/icons8_gmail.png'
import Link from 'next/link'
import Image from 'next/image'
import emailjs from 'emailjs-com'

const EmailSection = () => {

  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [Status,setStatus] = useState('');
  const [style,setStyle] = useState('text-green-300')
 
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
    } else {
      setStatus("Erreur lors de l'envoi.");
      setStyle("text-red-500")
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
            <Link href="https://github.com/ngehoandrianina"><Image src={githubIcon} alt='github' width={50} height={50}/></Link> 
            <Link href="https://www.linkedin.com/in/antonio-claret-baa78930b/"><Image src={LinkDIncon} alt='Linkedin' width={50} height={50} /></Link>
            <Link href="https://www.facebook.com/claretanthoonio/"><Image src={FacebookIcon} alt='Facebook' width={50} height={50}/></Link>
            <Link href="https://wa.me/261340760917"><Image src={WhatsappIcon} alt='Watsapp' width={50} height={50}/></Link>
            <Link href="mailto:antonioclaret2004@gmail.com"><Image src={Gmail} alt='Watsapp' width={50} height={50}/></Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col ' onSubmit={handleSubmit}>
        <div className='mb-6'>
            <label htmlFor='email' className='text-white block mb-1 text-sm font-medium'>Your Email</label>
            <input type='email' id="email" required placeholder='example@domain.com' name='Email'
             className='bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-grey-100 text-sm rounded-lg w-full p-2.5 '
             onChange={(e)=>setFrom(e.target.value)}
             value={from}
             />
        </div>
        <div className='mb-6'>
             <label htmlFor='subject' className='text-white block mb-1 text-sm font-medium'>Subject</label>
            <input type='text' id="subject" required placeholder='Just saying hi' name='Subject'
             className='bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-grey-100 text-sm rounded-lg w-full p-2.5 '
             onChange={(e)=>setSubject(e.target.value)}
             value={subject}
             />
        </div>
        <div className='mb-6'>
             <label htmlFor='message' className='text-white block mb-1 text-sm font-medium'>Message</label>
            <textarea type='text' id="Message" placeholder='Your Message' name='Message' 
             className='bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-grey-100 text-sm rounded-lg w-full p-2.5 '
             onChange={(e)=>setText(e.target.value)}
             value={text}
             />
        </div>
        <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
            Send message
        </button>
        </form>
      {
        Status && (
          <p className={` ${style} mt-2 font-light font-sans `}>{Status}</p>
        )
      }
      </div>
    </section>
  )
}

export default EmailSection
