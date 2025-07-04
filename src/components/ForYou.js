import React, {useState} from 'react';

function ForYou() {
  const [email, setEmail]= useState('');
    return (
    <div className="flex flex-col ">
      <div className="flex flex-row w-full">
        
        <div className="flex justify-center items-center w-full relative">
          <p className="absolute inline top-1 right-0 text-left text-[1.4vw] font-semibold w-1/2 leading-none">Real estate for your world, you deserve a home you love</p>
          <div className="h-[1.7px] w-full bg-[#F9F4ED] "></div>
          <p className="absolute inline bottom-0 left-0 text-right text-[1.4vw] font-semibold w-1/2 leading-none">here to help you own your future let's get you ll the way home</p>
 
          <button className={`absolute right-3  bottom-2 h-[3vw] px-[2.5vw]  bg-transparent  text-black border border-black rounded-[2vw] text-[1.5vw] hover:bg-black hover:text-white cursor:pointer transition all 3000$`} > View all </button> 

        </div>
        <p className="w-full text-[12vw]  font-black block font-archivo tracking-tight leading-none text-gray-900 text-left">
          For You
        </p>
      </div>

      <div className="w-full bg-[#F9F4ED] flex flex-col display-between p-4 mt-4 gap-[120px]">
        <div className=" flex flex-row display-between ">
          <div className="text-left flex flex-col gap-[2vh]"> 
            <p className="text-[1.4vw] inline w-2/3  text-[#B2A58A] leading-none">Unlock the doors to your future home by subscribing to our premier real estate website!</p>
            <div className="flex flex-row">
              <input type="email" placeholder='Enter your mail' value={email} className="bg-transparent border border-[#B2A58A] w-1/2 text-[1.4vw] text-[#B2A58A] p-0.5 pl-2 rounded-[5vh] focus:outline-none" onChange={(e)=>{
                setEmail(e.target.value);
              }}></input>

            </div>
          </div>
          
          <div className=" flex flex-col items-end gap-[1vh] text-right"> 
            <p className="text-[3vw] font-archivo tracking-wider text-gray-900">Shukla's</p>
            <p className="text-[1.4vw]  text-[#B2A58A]  leading-none w-full max-w-[66%]">We understand that a home is more than just a physical space- it's where memories are made</p>
          </div>
        </div>

        <div className=" flex flex-row justify-between w-full ">

          <div className="flex flex-col">
            <p className="font-bold text-[1.4vw]" >Contact</p>
            <p className='text-[1.4vw]  text-[#B2A58A]'>Hello@lusso.com</p>
            <p className='text-[1.4vw]  text-[#B2A58A]'>Support@lusso.com</p>
            <p className='text-[1.4vw]  text-[#B2A58A]'>+1234 5678 90</p>
          </div>


          <div className="flex flex-row gap-5 ">
          <div className="flex flex-col">
            <p className="font-bold text-[1.4vw]">Contact</p>
            <p className='text-[1.4vw]  text-[#B2A58A]'>Hello@lusso.com</p>
            <p className='text-[1.4vw]  text-[#B2A58A]'>Support@lusso.com</p>
            <p className='text-[1.4vw]  text-[#B2A58A]'>+1234 5678 90</p>
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-[1.4vw]" >Contact</p>
            <p className='text-[1.4vw]  text-[#B2A58A]'>Hello@lusso.com</p>
            <p className='text-[1.4vw]  text-[#B2A58A]'>Support@lusso.com</p>
            <p className='text-[1.4vw]  text-[#B2A58A]'>+1234 5678 90</p>
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-[1.4vw]">Contact</p>
            <p className='text-[1.4vw]  text-[#B2A58A]'>Hello@lusso.com</p>
            <p className='text-[1.4vw]  text-[#B2A58A]'>Support@lusso.com</p>
            <p className='text-[1.4vw]  text-[#B2A58A]'>+1234 5678 90</p>
          </div>

          </div>

        </div>

      </div>
  
      
    </div>
  );
}

export default ForYou;
















