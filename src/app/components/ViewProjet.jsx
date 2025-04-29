import React from 'react'


const ViewProjet = ({show,setShow,image,desc,name,otl}) => {
  return (
    <>
    { 
      show &&

    <div className='bg-[#00000072] h-screen w-screen fixed top-0 left-0 z-50 flex flex-col lg:flex-row items-center justify-center'>
    <div className='bg-[#f0f5f7] w-[300px] lg:w-[1000px] flex flex-col relative lg:flex-row justify-center items-center h-[500px] rounded-xl p-4'>
        <img src={image} className='w-60 lg:w-[600px] rounded-lg flex ' />
        <div className='ml-4 mt-2 lg:mt-0 text-black flex flex-col lg:w-96 h-96  overflow-scroll no-scroll'>
        <div>
            <h1 className='font-sans'>{name}</h1>
            <h1 className='font-sans'>Description:</h1>
            <p className='font-light font-sans text-[12px] lg:text-[14px] '>{desc}</p>
        </div>
        <div>
            <p className='font-sans mt-2'>Outils</p>
            <ul className='mt-1 font-sans font-light'>
              {
                otl.map((otli,idx)=>(
                  <li key={idx}>{otli}</li>
                ))
              }
            </ul>
            </div>
        </div>
        <button onClick={()=>setShow(false)}  className='absolute hover:scale-110 text-black right-2 lg:right-4 top-1 font-bold cursor-pointer lg:text-2xl'>X</button>
    </div>
    </div>
    
    }
</>
  )
}

export default ViewProjet