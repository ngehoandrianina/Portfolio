import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-screen footer border border-top-[#33353f] border-l-transparent border-r-transparent text-white '>
      <div className='p-6 lg:flex justify-between '>
      <Link href={"/"} className=" ml-10" style={{fontFamily:'fantasy'}}><Image src='/image/logoNG.png' alt="iah" className="rounded-xl"  width={50} height={150} /> </Link>
        <p className='text-slate-700 mt-4 lg:mr-12'>© 2025 Ngeho Andrianina Antonio Claret — Developer FullStack</p>
      </div>
    </footer>
  )
}

export default Footer
