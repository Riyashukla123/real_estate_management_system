import React from 'react';
import about from '../about-bg.png'

import { BsFillPlayFill } from 'react-icons/bs';

function About() {
  return (
    <div className="flex flex-col p-4 gap-5">
      <div className="flex flex-col md:flex-row w-full">
        <p className="w-full text-[20vw] md:text-[15vw]  font-black block font-archivo tracking-tight leading-none text-gray-900 text-left">
          About
        </p>
        <div className="flex justify-center h-24 md:h-auto items-center w-full relative">
          <p className="absolute inline top-3 left-0 md:left-3 text-left text-xs sm:text-sm md:text-[1.4vw] font-bold w-full md:w-1/2 leading-none">We biuld spaces that build home for you, we make house speak</p>
          <div className="h-[1.7px] w-full bg-[#F9F4ED] "></div>
          <p className="absolute inline bottom-3 right-0 md:right-3 text-right text-xs sm:text-sm md:text-[1.4vw] font-bold w-full md:w-1/2 leading-none">Really pround to be calling this beautiful home yours, this place really has it all</p>
 
          <button className={`absolute right-0 md:right-auto md:left-3  top-[-45px] md:top-auto md:bottom-2 py-2 md:py-0 md:h-[3vw] px-[2vw]  bg-transparent  text-black border border-black rounded-full md:rounded-[2vw] text-xs md:text-[1.5vw] hover:bg-black hover:text-white cursor:pointer transition all 3000$`} >Learn More </button> 

        </div>
      </div>

      <div className="w-full h-[80vh] md:h-[110vh] bg-[#F9F4ED]  relative flex align-center display-center">
        <div className="  h-full w-full pl-[10vw] pr-[10vw] ">
          <img src={about} alt={about} className="w-full bg-contain h-full object-cover"/>
        </div>
        <p className="absolute inline top-6 left-6 text-left text-sm md:text-[1.4vw] font-bold md:leading-[2vw] w-2/3 md:w-1/4">Where those who want the life of luxury are in good company</p>
        <p className="absolute inline bottom-1/3 right-6 text-left text-sm md:text-[1.4vw] font-bold md:leading-[2vw] w-2/3 md:w-1/4">We smplifying your home finding hassles with hundress of luxurious properties</p>

        <p className=" text-[20vw] md:text-[15vw] absolute text-[#F9F4ED]  font-archivo tracking-tight leading-none left-[7vw] bottom-[2vh]">
          About
        </p>
        
        <div class="absolute top-32 w-48 h-48 cursor-pointer hover:scale-110 transition-all hover:drop-shadow-xl active:scale-90 active:shadow-sm" 
            onMouseEnter={(event) => {
              event.currentTarget.querySelector('#spin-text').classList.add('spin-paused');
            }}
            onMouseLeave={(event) => {
              event.currentTarget.querySelector('#spin-text').classList.remove('spin-paused');
            }}>
          <svg id="spin-text" viewBox="0 0 100 100" className="absolute inset-0 text-xl w-full h-full animate-spin" >
            <defs>
              <path id="circlePath" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
            </defs>
            <text fill="black" fontSize="8.6" fontFamily="sans-serif">
              <textPath href="#circlePath" startOffset="0">
                play now play now play now play now play now play now 
              </textPath>
            </text>
          </svg>

          < BsFillPlayFill className=" absolute solid left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl md:text-[5vw]"/>
        </div>
      </div>
      
      

   
      
    </div>
  );
}

export default About;