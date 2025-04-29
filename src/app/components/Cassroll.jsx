import React, { useState } from 'react'

const Cassroll = ({children: slides}) => {
    const [curr,setCurr] = useState(0)
    const prev = () =>setCurr((curr) => (curr === 0 ? slides.length -1 : curr - 1))
    const next = () =>setCurr((curr)=>(curr === slides.length - 1 ? 0 : curr + 1))
  return (
    <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-500 ' style={{transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
        <div className='absolute inset-0 flex p-4 justify-between'>
            <button onClick={prev}><img src='/image/backf.png' className='w-10 hover:scale-110' /></button>
            <button onClick={next} ><img src='/image/nextf.png' className='w-10 hover:scale-110' /></button> 
        </div>
        <div className='absolute bottom-4 left-0 right-0'>
            <div className='flex items-center justify-center gap-2'>
                {
                    slides.map((_,i)=>(
                        <div key={i} className={`transition-all w-1 h-1 bg-white rounded-full ${curr === i ? 'p-1' : 'bg-opacity-50'}`}>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Cassroll