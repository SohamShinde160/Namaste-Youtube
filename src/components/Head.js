import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { RiVideoUploadLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_API } from '../utils/contants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery , setSearchQuery] = useState("");
  const [suggestion , setSuggestion] = useState([]);
  const [showSuggestion , setShowSuggestion] = useState(false);
  const searchCache = useSelector((store)=> store.search);
  const dispatch = useDispatch()

  useEffect(()=>{
    // make an api call after evry key press
    // but difference between two api call is less than 200ms
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      }else{
        getSearchSuggestion()
      }}, 200)
    // decline the api call
    return ()=> {
      clearTimeout(timer);
    }
    // eslint-disable-next-line      
  },[searchQuery])

  const getSearchSuggestion = async () => {
    console.log("API CALL - "+searchQuery);
    const data = await fetch(SEARCH_API + searchQuery);
    const response = await data.json();
    // console.log(response[1])
    setSuggestion(response[1]);

    dispatch(cacheResults({
      [searchQuery] : response[1],
    }))

  }


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

    return (
      <div className="flex z-10 items-center h-14 fixed left-0 top-0 bg-white px-4">
        <div className="flex items-center">
          <img
            onClick={()=> toggleMenuHandler()}
            alt="menu icon"
            className="w-7 h-7 hover:bg-[#dbd9d9] rounded-full  cursor-pointer m-2"
            src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          />
          <img
            alt="logo-youtube"
            className="w-[90px] cursor-pointer h-5 my-5 ml-4 mr-4"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          />
        </div>
        <div className="flex gap-6 items-center">
            <div className="flex items-center">
                <input
                  value={searchQuery}
                  type="text"
                  onChange={(e)=>setSearchQuery(e.target.value)}
                  onFocus={()=> setShowSuggestion(true)}
                  onBlur={()=> setShowSuggestion(false)}
                  placeholder="Search"
                  className="w-[536px] border-2 outline-none font-bold border-[#dbd9d9] px-4 rounded-l-3xl ml-44 h-10"
                />
                <button className="rounded-r-3xl border-[1px] mr-5 hover:bg-[#d3d0d0] border-[#dbd9d9] font-bold flex items-center justify-center px-4 text-xl bg-[#F0F0F0] h-10">
                  <CiSearch />
                </button>
            </div>
            {showSuggestion && (<div className='fixed top-12 bg-white border-[1px] font-bold shadow-xl rounded-xl border-[#dbd9d9] left-[360px]'>
              <ul className='flex flex-col   '>
                {
                  suggestion.map((item) => (
                    <li key={item} className='flex gap-2 py-2   px-2 w-[510px] rounded-xl hover:bg-gray-100 items-center'><CiSearch />{item}</li>
                  ))
                }
              </ul>
            </div>)}
        </div>
          <button className="bg-[#F0F0F0] hover:bg-[#d3d0d0] flex items-center justify-center w-10 h-10 rounded-full">
            <FaMicrophone />
          </button>
        <div className=" ml-44">
          <div className="flex  items-center gap-6 text-xl">
            <div className="hover:bg-[#eceaea] cursor-pointer flex items-center justify-center w-10 h-10 rounded-full">
              <RiVideoUploadLine />
            </div>
            <div className="hover:bg-[#eceaea] cursor-pointer flex items-center justify-center w-10 h-10 rounded-full">
              <FaRegBell />
            </div>
            <div className="hover:bg-[#eceaea] cursor-pointer flex items-center justify-center w-10 h-10 rounded-full">
              <FaRegUserCircle />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Head;