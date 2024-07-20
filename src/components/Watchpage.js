import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import {  useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const Watchpage = () => {

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu())
    // eslint-disable-next-line
  },[])

  return (
    <div className='flex flex-col'>

    <div className="flex top-16 gap-3">
      <div>
        <iframe
        width="800"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        className='cursor-pointer mt-16 ml-20 rounded-2xl shadow-2xl'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
        ></iframe>
      </div>
      <div className='ml-4'>
        <LiveChat/>
      </div>
    </div>

    <CommentsContainer/>
    </div>
  )
}

export default Watchpage;