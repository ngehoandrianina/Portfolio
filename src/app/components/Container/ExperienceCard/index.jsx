import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const ExpericenCard = ({variant='rigth',Title,Date,Address}) => {
  return (
    <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} viewport={{margin:"-100px"}} className='flex w-full justify-center'>
        <div className={`border-r-2 p-8 w-[80%] md:w-[40%] relative flex flex-col gap-2 items-center justify-center`}>
         { variant === 'left' &&  <>
            <h1 className='text-2xl '>{Title}</h1>
            <div className='flex items-center gap-2'>
                <Image src={'/icons/calendar.png'} width={20} height={20} alt='pin' />
                <p className='text-sm'>{Date}</p>
            </div>
            <div className='flex items-center gap-2'>   
                <Image src={'/icons/mappin.png'} width={20} height={20} alt='pin' />
                <p className='text-sm '>{Address}</p>
            </div>
            <div className={` w-4 h-4 md:w-8 md:h-8  rounded-full absolute bg-gradient-to-br from-primary to-secondary ${variant === 'rigth' ? "left-3" : "right-3"}  top-6`}></div>
            </>}
        </div>
        <div className={`border-l-4 p-8 w-[80%] md:w-[40%] relative flex flex-col gap-2 items-center justify-center `}>
          { variant === 'rigth' &&  <>
            <h1 className='text-2xl '>{Title}</h1>
                <div className='flex items-center gap-2'>
                    <Image src={'/icons/calendar.png'} width={20} height={20} alt='pin' />
                    <p className='text-sm'>{Date}</p>
                </div>
                <div className='flex items-center gap-2'>   
                    <Image src={'/icons/mappin.png'} width={20} height={20} alt='pin' />
                    <p className='text-sm '>{Address}</p>
                </div>
            <div className={` w-4 h-4 md:w-8 md:h-8  rounded-full bg-gradient-to-br from-primary to-secondary absolute ${variant === 'left' ? "right-3" : "left-3"}  top-6`}></div>
            </>
            }
        </div>
    </motion.div>
  )
}

export default ExpericenCard