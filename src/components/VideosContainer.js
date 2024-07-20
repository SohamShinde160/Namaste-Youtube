import React, { useEffect, useState } from 'react'
import { YT_API } from '../utils/contants';
import VideoCards, { AdVideoCard } from './VideoCards';
import { Link } from 'react-router-dom';

const VideosContainer = () => {

  const [videos , setVideos] = useState([]);

  const getvideos = async () => {
    const data = await fetch(YT_API);
    const response = await data.json();
    // console.log(response.items + "PRINTING");
    setVideos(response.items);
  }

  useEffect(()=>{
    getvideos();
  },[])

  return (
    <div className='relative justify-center cursor-pointer mb-5 flex flex-wrap gap-5 h-[100vh] w-[80vw] -z-50 top-10 left-60'>
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {
        videos.map(video =>
        <Link key={video.id} to={"/watch?v="+ video.id}>
          <VideoCards info={video}/>
        </Link>
        )
      }
    </div>
  );
}

export default VideosContainer;