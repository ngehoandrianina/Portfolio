import React from 'react'

const TabButton = ({active,selectTab,children}) => {
    const buttonClass = active ? 'text-white border-b border-[#179BB0]' : 'mr-3 font-semibold text-[#ADB7BE]';
  return (
    <div>
        <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>
        {children}
        </p>
        </button>
    </div>
  )
}

export default TabButton
