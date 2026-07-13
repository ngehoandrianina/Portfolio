import Image from 'next/image'
import React from 'react'

const TechUSe = ({Url,Text}) => {
  return (
     <div className='flex flex-col items-center justify-center border-2 w-28 p-4 rounded-xl shadow bg-white'>
        <Image src={Url} width={58} height={12} alt="logo" />
        <p className='font-roboto font-semibold text-slate-500'>{Text}</p>
    </div>
  )
}

export default TechUSe