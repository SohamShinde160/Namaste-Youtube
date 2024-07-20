import React from 'react';
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { RiHistoryLine } from "react-icons/ri";

const Sidefold = () => {
  return (
    <div className="w-20 bg-white fixed sidebar top-10 -z-10 left-0 p-5">
        <div className="flex flex-col gap-5">
        <div className=" flex flex-col items-center gap-2 text-[10px] bg-[#f1eeeece] py-2 rounded-lg">
          <GoHomeFill className="text-2xl" />
          Home
        </div>
        <div className=" flex flex-col items-center text-[10px] gap-2 pl-2 p-2 rounded-lg">
          <SiYoutubeshorts className="text-2xl" /> Shorts
        </div>
        <div className=" flex flex-col items-center gap-2  pl-2 p-2 rounded-lg">
          <MdOutlineSubscriptions className="text-2xl" /> <p className="text-[10px]">Subscription</p>
        </div>
        <div className=" flex flex-col items-center text-[10px] gap-2 pl-2 p-2 rounded-lg">
          <MdOutlineSwitchAccount className="text-2xl" /> You
        </div>
        <div className="flex flex-col items-center text-[10px] gap-2 pl-2 p-2 rounded-lg">
          <RiHistoryLine className="text-xl" /> History
        </div>
      </div>
    </div>
  )
}

export default Sidefold