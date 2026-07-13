import Image from 'next/image';
import React from 'react'
import TechUSe from '../../Pieces/Tech';

const Myskills = () => {
  return (
    <div className='space-y-16 flex flex-col items-center mt-16'>
        <h1 className='text-2xl text-center'>----- TECH STACK I WORK WITH ----</h1>
        <div className='flex gap-4'>
           <TechUSe Url={'/svg/NextJs.svg'} Text={'Next JS'} />
           <TechUSe Url={'/image/ReactJs.jpeg'} Text={'React JS'} />
           <TechUSe Url={'/logo/NodeJs.png'} Text={'Node JS'} />
           <TechUSe Url={'/logo/NestJs.png'} Text={'Nest JS'} />
           <TechUSe Url={'/logo/Djangol.png'} Text={'Django'} />
           <TechUSe Url={'/logo/Javascript.png'} Text={'Django'} />
           <TechUSe Url={'/logo/Python-logo.png'} Text={'Django'} />
        </div>
    </div>
  )
}

export default Myskills;