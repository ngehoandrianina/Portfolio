import React from 'react'

const ProjectTags = ({name,onClick,isSelected}) => {
    const buttonStyle = isSelected ? 'text-white bg-Tersary ' : 'text-[#adb7be] border-slate-600 hover:border-white'
  return (
    <button className={` ${buttonStyle} shadow-md rounded-full border-2 px-6 transition-colors duration-500 py-1 text-md font-bold cursor-pointer `} onClick={()=>onClick(name)}>{name}</button>
  )
}

export default ProjectTags
