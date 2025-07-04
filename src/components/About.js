import React from 'react';
import about from '../about-bg.png'

import { BsFillPlayFill } from 'react-icons/bs';

function About() {
  return (
    <div className="flex flex-col p-4 gap-5">
      <div className="flex flex-row w-full">
        <p className="w-full text-[15vw]  font-black block font-archivo tracking-tight leading-none text-gray-900 text-left">
          About
        </p>
        <div className="flex justify-center items-center w-full relative">
          <p className="absolute inline top-3 left-3 text-left text-[1.4vw] font-bold w-1/2 leading-none">We biuld spaces that build home for you, we make house speak</p>
          <div className="h-[1.7px] w-full bg-[#F9F4ED] "></div>
          <p className="absolute inline bottom-3 right-3 text-right text-[1.4vw] font-bold w-1/2 leading-none">Really pround to be calling this beautiful home yours, this place really has it all</p>
 
          <button className={`absolute left-3  bottom-2 h-[3vw] px-[2vw]  bg-transparent  text-black border border-black rounded-[2vw] text-[1.5vw] hover:bg-black hover:text-white cursor:pointer transition all 3000$`} >Learn More </button> 

        </div>
      </div>

      <div className="w-full h-[110vh] bg-[#F9F4ED]  relative flex align-center display-center">
        <div className="  h-[110vh] w-full pl-[10vw] pr-[10vw] ">
          <img src={about} alt={about} className="w-full bg-contain h-[110vh] object-cover"/>
        </div>
        <p className="absolute inline top-6 left-6 text-left text-[1.4vw] font-bold leading-[2vw] w-1/4">Where those who want the life of luxury are in good company</p>
        <p className="absolute inline bottom-1/3 right-6 text-left text-[1.4vw] font-bold leading-[2vw] w-1/4">We smplifying your home finding hassles with hundress of luxurious properties</p>

        <p className=" text-[15vw] absolute text-[#F9F4ED]  font-archivo tracking-tight leading-none left-[7vw] bottom-[2vh]">
          About
        </p>
        < BsFillPlayFill className=" absolute solid left-[15vw] top-[40vh] text-[5vw]"/>

      </div>
      
      

   
      
    </div>
  );
}

export default About;