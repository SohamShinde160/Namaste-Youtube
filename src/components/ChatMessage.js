import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center'>
        <FaRegUserCircle className='w-4 h-4'/>
        <span className='font-bold p-2'>{name}</span>
        <span className='bg-blue-300 p-1 rounded-md'>{message}</span>
    </div>
  )
}

export default ChatMessage