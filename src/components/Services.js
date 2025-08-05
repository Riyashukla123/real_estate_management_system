import React from 'react'
import house from '../house-ser.jpg'
import apartment from '../apartment-ser.jpg'
import chair from '../Images/chair.webp'
import houseim from '../Images/house.webp'

function Services() {
  return (
    <div className="flex flex-col md:flex-row gap-[5px] pt-[10px]">
      <div className=' relative rounded-[15px] w-full aspect-square overflow-hidden'>
         <img src={house} alt="home" className="w-full h-full object-cover"/>
      </div>
     <div className=' relative rounded-[15px] overflow-hidden w-full aspect-square '>
      <img src={apartment} alt="home" className="w-full h-full object-cover"/>
     </div>
      <div className=' flex flex-col relative rounded-[15px] overflow-hidden w-full aspect-square gap-[5px]'>
        <div className=" w-full h-1/2 bg-[#F9F4ED] relative"> 
          <img src={chair} className='absolute top-0 left-0 h-[80%]' alt='expect better'></img>
          <div className="absolute w-2/3 bottom-3 right-3 text-right">

            <h1 className="text-black font-bold text-4xl md:text-[2vw] pl-auto ">Expect better</h1>
            <p className="text-xl md:text-[1.3vw]  text-[#B2A58A] wrap-around leading-none">Extraordinary reach + results helping you find your home</p>
          </div>
        </div>
        <div className=" w-full h-1/2 bg-[#F9F4ED] relative overflow-hidden">
        <img src={houseim} className='absolute bottom-0 right-0 h-full opacity-80' alt='expect better'></img>
          <div className="absolute w-2/3 top-3 left-3 text-left">
            <h1 className="text-black font-bold text-4xl md:text-[2vw] pl-auto ">Homes that match</h1>
            <p className="text-xl md:text-[1.3vw]  text-[#B2A58A] wrap-around leading-none">Really executives international, experience excellence for now</p>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Services;
