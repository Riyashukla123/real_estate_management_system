import {useState} from 'react';
import bg from "../login-bg2.jpg"
import { FaTwitter, FaFacebookF, FaYoutube} from 'react-icons/fa';
import LogInSignUpBox from './LogInSignUpBox'




function LogInPage() {
   const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="relative flex justify-center  pt-[2vh] bg-[#F9F4ED] h-screen">
      <div className="relative w-[200vh] h-[80vh] mb-auto border  rounded-lg">
        <img src={bg} alt={bg} className=" object-cover w-full h-[80vh] border border-none rounded-2xl "/>
        {isLogin ? <p className=" text-[13vw] absolute text-white  font-archivo tracking-tight leading-none right-[0vw] bottom-[1vh]">
          
          Login
        </p>:<p className=" text-[13vw] absolute text-white  font-archivo tracking-tight leading-none right-[0vw] bottom-[1vh]">
          
          Signup
        </p> }
        
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row justify-around w-[100vw] gap-[10px]">
          
        <LogInSignUpBox isLogin={isLogin} setIsLogin={setIsLogin} />

          
          <div className="flex flex-col text-right px-[5vh] pt-7 pb-7 items-center justify-center text-lg leading-none ">
            <p className="text-white font-archivo text-[2.1vw] w-[45vw]"> Our goal is to give you a HOME you feel complete inside of.</p>
            <div className="h-1 w-[26.8vw] bg-white ml-auto pt-0 "></div>
            <div className="flex flex-row gap-4 pt-7">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-[#E49D7A] cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-[#E49D7A] cursor-pointer">
                <FaTwitter/>
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-[#E49D7A] cursor-pointer">
                <FaYoutube/>
              </div>  
   
            </div>

          </div>

        </div>
      </div>
    </div>
    
  );
}

export default LogInPage;