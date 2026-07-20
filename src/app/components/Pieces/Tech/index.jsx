import Image from 'next/image'
import React from 'react'

const TechUSe = ({Url,Text}) => {
  return (
     <div className='flex flex-col items-start justify-center border-2 w-60 h-36 p-4 rounded-xl shadow bg-transparent backdrop-blur-md'>
        <Image src={Url} width={38} height={12} alt="logo" />
        <p className='font-roboto text-slate-500 mt-2'>{Text}</p>
        <div className='h-[1px] w-full bg-black rounded-xl mt-4'></div>
    </div>
  )
}

export default TechUSe