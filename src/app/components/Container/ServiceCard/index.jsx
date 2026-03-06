import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
const ServiceCard = () => {
  return (
    <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} viewport={{margin:"-100px"}} className=' flex flex-col border w-80 h-96 rounded-xl px-2 py-6 mt-8'>
        <div className='h-[40%]'>
        <Image src={'/image/devellopeur.png'} width={150} height={200} alt='image' />
        </div>
        <div className='h-[60%] flex flex-col justify-center'>
            <h1 className='font-bold mb-2 text-xl'>Title</h1>
            <p className='text-md'>Texte texte texte texte dtede asfjkadjfadfanmnj lfakdfjladkfjaf ahdfkahkdjfadf</p>
        </div>
    </motion.div>
  )
}

export default ServiceCard
