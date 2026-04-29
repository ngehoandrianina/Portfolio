import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-screen footer bg-gradient-to-br from-primary  via-secondary  to-secondary text-white rounded-t-2xl ' >
      <div className='p-6 pt-16 '>
        <div className='flex flex-col md:flex-row gap-8 md:gap-8'>
              <div>
              <Link href={"/"} className="" style={{fontFamily:'fantasy'}}><Image src='/image/logoNG.png' alt="iah" className="rounded-xl"  width={50} height={150} /> </Link>
              <p className='w-96'>
                Full-stack web developer.
I design and build scalable, high-performance applications with a focus on clean architecture and user experience.
                </p>
              </div>
        <div className="flex flex-col md:flex-row w-full justify-evenly px-8">

  {/* Navigation */}
  <div>
    <h2 className="font-semibold mb-4">Quick Links</h2> 
    <ul className="space-y-2 text-gray-400">
      <li><a href="/" className="hover:text-white">Home</a></li>
      <li><a href="#Projects" className="hover:text-white">Projects</a></li>
      <li><a href="#contact" className="hover:text-white">Contact</a></li>
    </ul>
  </div>

  {/* About */}
  <div>
    <h2 className="font-semibold mb-4">About</h2>
    <ul className="space-y-2 text-gray-400">
      <li><a href="#Skills" className="hover:text-white">Skills</a></li>
      <li><a href="#Experience" className="hover:text-white">Experience</a></li>
      <li><a href="/CVAntonioClaret.pdf" download className="hover:text-white">Resume</a></li>
    </ul>
  </div>

  {/* Contact */}
  <div>
    <h2 className="font-semibold mb-4">Contact</h2>
    <ul className="space-y-2 text-gray-400">
      <li> <a className="hover:text-white" href='mailto:antonioclaret2004@gmail.com'> Email: antonioclaret2004@gmail.com</a></li>
      <li>
  <a href="tel:+261326048091" className="hover:text-white transition">
    Phone: +261 32 60 480 91
  </a>
</li>
      <li><a href="https://www.linkedin.com/in/antonio-claret-baa78930b/" target='_blank' className="hover:text-white">LinkedIn</a></li>
      <li><a href="https://github.com/ngehoandrianina" target='_blank' className="hover:text-white">GitHub</a></li>
    </ul>
  </div>

</div>
        </div>
        <p className='text-gray-400 text-center mt-24 '>© {new Date().getFullYear()} Ngeho Andrianina Antonio Claret — Developer FullStack</p>
      </div>
    </footer>
  )
}

export default Footer
