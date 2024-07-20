import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import {addMessage} from "../utils/chatSlice"
import { generateName, makeid } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages )
    const [liveMsg , setLiveMsg] = useState()

    useEffect(()=>{
        // Simulating a live chat
        const interval = setInterval(() => {
            // console.log('New message received');
            dispatch(addMessage({
                name: generateName(),
                message: makeid(20) ,
            }))
        }, 2000);

        // cleanup function to stop the interval when component unmounts
        return () => clearInterval(interval);
        // eslint-disable-next-line
    },[])

  return (
    <>
        <div className='mt-16 w-[430px] bg-slate-200 overflow-y-scroll  rounded-xl p-3 h-[77vh] '>
            <div>{chatMessages.map((c,i) =>  <ChatMessage key={i} name={c.name} message={c.message}/>)}</div>
        </div>
        <form className='' onSubmit={(e)=>{
            e.preventDefault()
            dispatch(addMessage({
                name:"Soham S ✔",
                message:liveMsg
            }))
            setLiveMsg("");
        }}>
            <input type='text' placeholder='Type a message...' value={liveMsg} onChange={(e)=>{
                setLiveMsg(e.target.value)
            }} className="w-[336px] mt-2 border-2 outline-none font-bold border-[#dbd9d9] px-4 rounded-l-3xl h-10"
                />
            <button className='bg-blue-500 px-2 py-2 rounded-r-lg'>Send</button>
        </form>
    </>
  )
}

export default LiveChat;