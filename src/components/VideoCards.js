import React from 'react'

const VideoCards = ({info}) => {
    // console.log("PRINTING INFO "+ info);

    const { snippet , statistics } = info;
    // console.log("snippeet" + snippet)
    const {title, channelTitle, thumbnails} = snippet;
  return (
    <div className='cursor-pointer'>
        <img src={thumbnails.medium.url} alt={title} className='shadow-xl rounded-2xl'/>
        <h3 className='font-bold w-80'>{title}</h3>
        <p className='text-gray-500 text-sm'>{channelTitle}</p>
        <p className='text-gray-500 text-sm'>{statistics.viewCount} views</p>
    </div>
  )
}


export const AdVideoCard = ({info}) => {
  return(
    <div className=' bg-green-200 border border-black rounded-2xl'>
      <VideoCards info={info} />
      <p className='font-bold px-5 shadow-2xl text-sm'>AD .</p>
    </div>
  )
}

export default VideoCards;