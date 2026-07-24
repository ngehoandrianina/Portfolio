import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <div className='py-8 grid grid-cols-2'>
        <div className=''>
        <p className='font-roboto mb-4 font-semibold'>-- A PROPOS DE MOI</p>
        <h1 className='text-5xl mb-12 '>
           IMAGINER,<br/>
            CONSTRUIRE,<br/>
           <span className='text-primary'>PERFECTIONNER.</span> 
        </h1>
        <p className='w-[32rem] text-md  font-arimo'>Je suis NGEHO ANDRIANINA Antonio Claret,
             développeur passionné par la conception et le développement 
             d'applications web et mobiles modernes.<br/> Je crée des solutions 
             numériques sur mesure
             permettant aux entreprises, organisations et particuliers de 
             concrétiser leurs idées en produits performants, fiables et évolutifs.</p>
        </div>
        <div className='relative flex items-center justify-center'>
            <h2 className='border p-4 absolute text-sm rounded-xl bg-secondary bottom-4 left-12'>DISPONIBLE MAINTENANT</h2>
            <Image src={'/svg/browser-ui.svg'} width={420} height={600} />
        </div>
    </div>
  )
}

export default AboutSection