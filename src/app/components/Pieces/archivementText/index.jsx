import React from 'react'

const ArchivementText = ({Text,Under}) => {
  return (
    <div className="flex flex-col items-center text-white ">
        <h1 className="text-4xl ">{Text}</h1>
        <p className="font-roboto ">{Under}</p>
    </div>
  )
}

export default ArchivementText