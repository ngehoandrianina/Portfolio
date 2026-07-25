import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-screen footer md:px-32 bg-black relative rounded-t-3xl' style={{backgroundImage:"url('/svg/rrrainbow.svg')"}} > 
      <div className='p-6 pt-16 z-50 backdrop-blur-[1px]' >
        <div className='flex flex-col md:flex-row gap-8 md:gap-8'>
              <div>
              <Link href={"/"} className="" style={{fontFamily:'fantasy'}}><Image src='/image/logoNG.png' alt="iah" className="rounded-xl"  width={100} height={150} /> </Link>
              <p className='w-96 text-white md:text-sm leading-relaxed '>
                Développeur full-stack.
                Applications performantes, architecture propre, UI/UX soignée et optimisée.
                </p>
              </div>
  <div className="flex flex-row flex-wrap w-full md:justify-end gap-24 z-50">

  {/* Navigation */}
  <div>
    <h2 className="font-semibold mb-4 text-white">Liens rapides</h2> 
    <ul className="space-y-2 text-gray-400 ">
      <li><a href="/" className="hover:text-white ">Accueil</a></li>
      <li><a href="#Projects" className="hover:text-white">Projets</a></li>
      <li><a href="#contact" className="hover:text-white">Contact</a></li>
    </ul>
  </div>

  {/* About */}
  <div>
    <h2 className="font-semibold mb-4 text-white">À propos</h2>
    <ul className="space-y-2 text-gray-400 ">
      <li><a href="#Skills" className="hover:text-white">Compétences</a></li>
      <li><a href="#Experience" className="hover:text-white">Expérience</a></li>
      <li><a href="/CVAntonioClaret.pdf" download className="hover:text-white">CV</a></li>
    </ul>
  </div>

  {/* Contact */}
  <div>
    <h2 className="font-semibold mb-4 text-white">Contact</h2>
    <ul className="space-y-2 text-gray-400">
      <li> <a className="hover:text-white" href='mailto:antonioclaret2004@gmail.com'> Email: antonioclaret2004@gmail.com</a></li>
      <li>
  <a href="tel:+261326048091" className="hover:text-white transition">
    Telephone: +261 32 60 480 91
  </a>
</li>
      <li><a href="https://www.linkedin.com/in/antonio-claret-baa78930b/" target='_blank' className="hover:text-white underline">LinkedIn</a></li>
      <li><a href="https://github.com/ngehoandrianina" target='_blank' className="hover:text-white underline">GitHub</a></li>
    </ul>
  </div>

</div>
        </div>
        <p className='text-gray-400 backdrop-blur-xl text-center mt-24 '>© {new Date().getFullYear()} Ngeho Andrianina Antonio Claret — Developer FullStack</p>
      </div>

 
    </footer>
  )
}

export default Footer
