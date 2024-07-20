import React from 'react'
import Button from './Button';

const ButtonsList = () => {

  const list = ["All" , "News" , "Gaming","T20 WC" , "Cricket" , "Football" ,"Live" , "Songs" , "Highlights" ,"IPL" , "Reactjs" , "Technology" , "Web dev"]

  return (
    <div className="relative h-[80px] flex gap-3 left-60 -z-50 top-16">
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
    </div>
  )
}

export default ButtonsList;