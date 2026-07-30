import React from 'react'


const ChooseContainer = ({icon,text,number}) => {
  return (
    <div className=' w-96 p-4'>
        <div className='flex justify-between items-center'>
            <div className='text-white'>{icon}</div>
            <h1 className='text-2xl text-white'>{number}</h1>
        </div>
        <p className='mt-8 text-white leading-relaxed'>{text}</p>
    </div>
  )
}

export default ChooseContainer