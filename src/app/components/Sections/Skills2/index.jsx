import Image from 'next/image';
import React from 'react'
import TechUSe from '../../Pieces/Tech';

const Myskills = () => {
  return (
    <div className='flex flex-col items-start mt-12'>
      <p className='font-arimo font-semibold mb-4'>-- EXPERTISE</p>
      <div className='flex justify-between w-full mb-24'>
        <h1 className='text-5xl text-center '>CE QUE JE MAITRISE</h1>
        <p className='w-[28rem] text-right'>Création de solutions numériques innovantes,
           pensées pour répondre aux besoins 
          actuels tout en garantissant performance, flexibilité et évolution à long terme.</p>
      </div>

        <div className='flex gap-4 flex-wrap'>
           <TechUSe Url={'/svg/NextJs.svg'} Text={'Next JS'} />
           <TechUSe Url={'/image/ReactJs.jpeg'} Text={'React JS'} />
           <TechUSe Url={'/logo/NodeJs.png'} Text={'Node JS'} />
           <TechUSe Url={'/logo/NestJs.png'} Text={'Nest JS'} />
           <TechUSe Url={'/logo/Djangol.png'} Text={'Django'} />
           <TechUSe Url={'/logo/Javascript.png'} Text={'Javascripts'} />
           <TechUSe Url={'/logo/Python-logo.png'} Text={'Python'} />
           <TechUSe Url={'/logo/mysql.svg'} Text={'Mysql'} />
          <TechUSe Url={'/logo/postgresql.svg'} Text={'Postgresql'} />
          <TechUSe Url={'/logo/expo.svg'} Text={'EXPO'} />
        </div>
    </div>
  )
}

export default Myskills;