import React from 'react'


const ChooseContainer = ({icon,text,number}) => {
  return (
    <div className=' w-96 p-4'>
        <div className='flex justify-between items-center'>
            <div className=''>{icon}</div>
            <h1>{number}</h1>
        </div>
        <p className='mt-8'>{text}</p>
    </div>
  )
}

export default ChooseContainer