import React, { useState } from 'react'
import { motion } from 'framer-motion'
const Cassroll = ({children: slides}) => {
    const [curr,setCurr] = useState(0)
    const prev = () =>setCurr((curr) => (curr === 0 ? slides.length -1 : curr - 1))
    const next = () =>setCurr((curr)=>(curr === slides.length - 1 ? 0 : curr + 1))
  return (
    <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.7}} viewport={{margin:"800px"}} className='overflow-hidden relative'>
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
    </motion.div>
  )
}

export default Cassroll