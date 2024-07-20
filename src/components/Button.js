import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className="bg-gray-200 text-black font-semibold py-1 px-3 cursor-pointer rounded-lg">{name}</button>
    </div>
  )
}

export default Button