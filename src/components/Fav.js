import React, { useEffect } from 'react';
import {useState} from 'react'
import HousePic from '../main.jpg'
import ApartmentPic from '../apartments.jpg'
import BuildingPic from '../building.jpg'
import { FaTwitter, FaFacebookF, FaYoutube, FaStar} from 'react-icons/fa';



function Fav() {
  const imageMap = [ HousePic, ApartmentPic, BuildingPic ];
  const [activeImage, setActiveImage] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setActiveImage((activeImage + 1) % imageMap.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [activeImage])

  return (
    <div className="flex flex-col" >
      <div className="w-full h-[500px] relative rounded-[15px]  shadow-xl">
        
        <div className=" flex z-30 flex-row absolute top-5 left-5 gap-4 text-white ">


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


        <div className="absolute z-30 top-5 right-5 w-[200px] text-[12px] text-white">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex z-30 flex-col gap-2 absolute bottom-5 left-5 ">
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

        <div className="absolute z-30 bottom-5 right-5  flex flex-row ">
          <button className={`h-[30px] w-28 px-4  bg-transparent  text-white z-10 text-sm transition-all duration-300`}>House</button>

          <button className={`h-[30px] w-28 px-4  bg-transparent  text-white z-10 text-sm  transition-all duration-300`}>Apartments</button>

          <button className={`h-[30px] w-28 px-4  bg-transparent  text-white z-10 text-sm transition-all duration-300`}>Buildings</button>      
          <div className={`w-28 border-white rounded-full border bg-transparent transition-transform duration-700 ease-in-out absolute top-0 h-full ${activeImage === 0 ? ' translate-x-0' : activeImage === 1 ? ' translate-x-[100%]' : ' translate-x-[200%]'}`}></div>  
        </div>

        <div className="bg-white/30 z-30 absolute backdrop-blur-sm pt-4 pb-4 w-2/3 rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-white text-center">The Art of Estate Market Management.</p>
        </div>

        <div className='relative rounded-2xl w-full h-[500px] overflow-x-hidden shadow-custom-glow '>
          {imageMap.map((image, index) => {
            return (<img src={image} alt='show-image' key={index} className={`w-full h-[500px] transition-transform duration-700 ease-in-out absolute object-cover left-0 top-0 ${activeImage === index ? 'translate-x-0 z-20' : (index + 1) % imageMap.length === activeImage ? 'translate-x-[-100%] z-10' : 'translate-x-[100%]'}`}></img>)
          })}
          
        </div>
       
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