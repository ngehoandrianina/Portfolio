import React from 'react'
import { useState } from 'react'
import { CodeBracketIcon,EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import ViewProjet from './ViewProjet'

const ProjectCard = ({imgUrl,title,decription,gitUrl,previewUrl,outil}) => {
  const [Show,setShow] = useState(false)
  return (
    <>
      <div>
      <div className='h-52 md:h-72 rounded-t-xl  relative group ' style={{ background: `url(${imgUrl})`,backgroundSize: 'cover'}}>
        <div className='overlay items-center rounded-t-xl justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex 
        group-hover:bg-opacity-80 transition-all duration-500'> 
        <Link href={gitUrl} className='h-14 w-14 border-2 mr-2 relative rounded-full border-[#adb7be] hover:border-white group/link '>
            <CodeBracketIcon className=' h-10 w-10  text-[#adb7be]  absolute top-1/2 left-1/2 transform -translate-x-1/2 
            -translate-y-1/2 
             cursor-pointer group-hover/link:text-white'  />
        </Link>
        <div onClick={()=>setShow(true)} className='h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link '>
            <EyeIcon className=' h-10 w-10 text-[#adb7be]  absolute top-1/2 left-1/2 transform -translate-x-1/2 
            -translate-y-1/2 
             cursor-pointer group-hover/link:text-white' />
        </div>
        </div>
      </div>
      <div className='text-white rounded-b-xl mt-3 bg-[#1181818] py-6 px-4'>
        <h5 className='text-xl font-semibold  '>{title}</h5>
        <p className='text-[#adb7be]'>{decription}</p>
      </div>
      </div>
      <ViewProjet setShow={setShow} show={Show} image={imgUrl} name={title} desc={decription} otl={outil} />
    </>
  )
}

export default ProjectCard
