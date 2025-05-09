import React from 'react'

const Button = ({text , onClick,className}) => {
  return (
    <button 
        onClick ={onClick}
        className={`bg-black text-white w-full py-3 rounded-md hover:bg-gray-800 transition-colors ${className}`}
    >
        {text}
    </button>
  )
}

export default Button