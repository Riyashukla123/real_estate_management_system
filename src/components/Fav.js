import React from 'react';
import {useState} from 'react'
import HousePic from '../main.jpg'
import ApartmentPic from '../apartments.jpg'
import BuildingPic from '../building.jpg'
import { FaTwitter, FaFacebookF, FaYoutube, FaStar} from 'react-icons/fa';



function Fav() {
  const [isPage, setIsPage]= useState('house');
  const imageMap = {
  house: HousePic,
  apartments: ApartmentPic,
  buildings: BuildingPic,
};

  return (
    <div className="flex flex-col" >
      <div className="w-full h-[500px] relative rounded-[15px] overflow-hidden shadow-xl">
        
        <div className=" flex flex-row absolute top-5 left-5 gap-4 text-white z-10">


          <div className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-black cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-black cursor-pointer">
            <FaTwitter/>
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-black cursor-pointer">
            <FaYoutube/>
          </div>  
        </div>


        <div className="absolute top-5 right-5 w-[200px] text-[12px] text-white z-10">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col gap-2 absolute bottom-5 left-5 ">
           <div className="text-yellow-500 text-xs flex flex-row gap-2">
             <FaStar/>
             <FaStar/>
             <FaStar/>
             <FaStar/>
             <FaStar/>
           </div>
           <div className=" w-[200px] text-[12px] text-white z-10">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
           </div>
        </div>

        <div className="absolute bottom-5 right-5  flex flex-row gap-2">
          <button className={`h-[30px] px-4  bg-transparent  text-white z-10 text-sm ${isPage === 'house' ? 'border border-white rounded-[20px] shadow-lg':'border-none' } transition-all duration-300`}onClick={()=>{
            setIsPage('house');
          }}>House</button>

          <button className={`h-[30px] px-4  bg-transparent  text-white z-10 text-sm ${isPage === 'apartments' ? 'border border-white rounded-[20px] shadow-lg':'border-none'} transition-all duration-300`} onClick={()=>{
            setIsPage('apartments');
          }}>Apartments</button>

          <button className={`h-[30px] px-4  bg-transparent  text-white z-10 text-sm ${isPage === 'buildings' ? 'border border-white rounded-[20px] shadow-lg':'border-none'} transition-all duration-300`} onClick={()=>{
            setIsPage('buildings');
          }}>Buildings</button>        
        </div>

        <div className="bg-white/30 absolute backdrop-blur-sm pt-4 pb-4 w-2/3 rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-white text-center">The Art of Estate Market Management.</p>
        </div>

        <img src={imageMap[isPage]} alt="example" className="w-[100%] h-[500px] object-cover  " />

      </div>

      <div className="flex flex-col w-full ">
        <p className="w-full text-[20vw] leading-[20vw] font-black block font-archivo tracking-tight text-gray-900 text-center ">Fabulous</p>
        <div className="flex flex-row font-bold item-center justify-between">
          <p className="text-[13px] font-bold w-[350px]">Your housing needs deserve the care of specialist, be home</p>
          <div className="h-[2px] w-full bg-[#F9F4ED] mt-[20px] mr-[17px] ml-[10px]"></div>
          <p className="text-[13px] font-bold w-[350px]">Let's going above and beyond to find your next home</p>
        </div>
      </div>
    </div>
  );
}

export default Fav;