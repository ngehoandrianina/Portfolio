import React from 'react'
import { motion } from 'framer-motion'

const ViewProjet = ({show,setShow,image,desc,name,otl}) => {
  return (
    <>
    { 
      show &&

    <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}}   className='bg-[#1d0831da] px-6 backdrop-blur-sm h-screen w-screen fixed top-0 left-0 z-50 flex flex-col lg:flex-row items-center justify-center'>
    <div className='bg-[#140521] w-full lg:w-[1200px]  md:gap-12  flex flex-col relative lg:flex-row justify-center items-center h-[500px] rounded-xl p-4'>
        <img src={image} className='w-60 lg:w-[400px]  rounded-lg flex ' />
        <div className='ml-4 mt-2 lg:mt-0 text-white flex flex-col w-full  lg:w-96 h-96  overflow-scroll no-scroll'>
        <div>
            <h1 className='font-sans text-xl font-bold mb-4'>{name}</h1>
            <h1 className='font-sans'>Description:</h1>
            <p className='font-light font-sans text-[12px] lg:text-[14px] '>{desc}</p>
        </div>
        <div>
            <p className='font-sans mt-2'>Outils</p>
            <ul className='mt-1 font-sans font-light'>
              {
                otl.map((otli,idx)=>(
                  <li key={idx}>* {otli}</li>
                ))
              }
            </ul>
            </div>
        </div>
        <button onClick={()=>setShow(false)}  className='absolute hover:scale-110 text-white right-2 lg:right-4 top-1 font-bold cursor-pointer text-2xl'>X</button>
    </div>
    </motion.div>
    
    }
</>
  )
}

export default ViewProjet