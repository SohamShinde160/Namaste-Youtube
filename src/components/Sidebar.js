import React from 'react'
import { BiLike } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { HiDownload } from "react-icons/hi";
import { GoHomeFill } from "react-icons/go";
import { RiHistoryLine } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";
import { PiPlaylistDuotone } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineSwitchAccount } from "react-icons/md";
import Sidefold from "./Sidefold";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // early return
  if(!isMenuOpen) return <Sidefold/>;

  return (
    <div className="w-60 bg-white fixed sidebar top-10 -z-10 left-0 p-5">
      <div className="text-[15px] mb-2">
        <div className=" flex items-center gap-5 pl-2 bg-[#f1eeeece] rounded-lg p-2">
          <GoHomeFill className="text-xl" />
          <Link to="/">Home</Link>
        </div>
        <div className=" flex items-center gap-5 pl-2 p-2 rounded-lg">
          <SiYoutubeshorts className="text-xl" /> Shorts
        </div>
        <div className=" flex items-center gap-5 pl-2 p-2 rounded-lg">
          <MdOutlineSubscriptions className="text-xl" /> Subscriptions
        </div>
      </div>
      <hr />
      <div className="text-[15px] my-2">
        <div className=" text-[18px] flex items-center gap-3 pl-2 rounded-lg p-2">
          You
          <IoIosArrowForward className="text-xl" />
        </div>
        <div className=" flex items-center gap-5 pl-2 p-2 rounded-lg">
          <MdOutlineSwitchAccount className="text-xl" /> Your Channel
        </div>
        <div className="flex items-center gap-5 pl-2 p-2 rounded-lg">
          <RiHistoryLine className="text-xl" /> History
        </div>
        <div className=" flex items-center gap-5 pl-2 p-2 rounded-lg">
          <PiPlaylistDuotone className="text-xl" /> Playlists
        </div>
        <div className=" flex items-center gap-5 pl-2 p-2 rounded-lg">
          <AiOutlinePlaySquare className="text-xl" /> Your Videos
        </div>
        <div className=" flex items-center gap-5 pl-2 p-2 rounded-lg">
          <MdOutlineWatchLater className="text-xl" /> Watch Later
        </div>
        <div className=" flex items-center gap-5 pl-2 p-2 rounded-lg">
          <BiLike className="text-xl" /> Liked Videos
        </div>
        <div className=" flex items-center gap-5 pl-2 p-2 rounded-lg">
          <HiDownload className="text-xl" /> Downloads
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Sidebar;