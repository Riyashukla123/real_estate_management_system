import React, {useState} from 'react';
import { Link }  from 'react-router-dom';
export default function LogInBox( {isLogin, setIsLogin}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState
  ('');
  const [name, setName]=useState('');
 
  const [confirmPassword , setConfirmPassword]= useState('');
  return(
    isLogin ?
      <div className="bg-transparent relative">
        
        <form className="flex flex-col m-5 ml-7 mr-0 border  border-white rounded-lg justify-center items-center gap-4 px-[5vh] bg-white/30 backdrop-blur-sm pt-7 pb-7 ">
          <p className='text-white font-archivo text-[20px]'>Login to Your Account</p>
          <input type='email' placeholder="Name" value={email} className='bg-transparent outline-none placeholder-white focus:outline-none border  border-white rounded-lg px-2 text-white w-[100%]'onChange={(e)=>{
          setEmail(e.target.value)
          }}/>
          <input type='password' placeholder='Password'  value={password} className='bg-transparent placeholder-white outline-none focus:outline-none border  border-white rounded-lg text-white px-2 w-[100%]' onChange={(e)=>{
          setPassword(e.target.value)
          }}/>
          
          <button type="submit" className="border border-white rounded-lg bg-white text-[#FFE4B8]  px-2 w-[100%] hover:bg-[#FFE4B8] hover:text-white" onClick={(e)=>{
           e.preventDefault();
           console.log(email);
           console.log(password);
           setEmail('');
           setPassword('');
           }}> <Link to="/dashboard">Login </Link></button>
             
          <div className='flex flex-row gap-[4px]'>
            <p className="text-white text-[12px]">Don't have an account? </p>
            <button className="text-white text-[12px] hover:text-[#FFE4B8] " onClick={()=>{
            setIsLogin(false);
          }}> SignUp </button>
          </div>
              </form>
          </div> :

        <div className="bg-transparent ">
        <form className="flex flex-col m-5 ml-7 mr-0 border  border-white rounded-lg justify-center items-center gap-4 px-[5vh] bg-white/30 backdrop-blur-sm pt-7 pb-7 ">
          <p className='text-white font-archivo text-[20px]'>Create Your Account</p>

          <input type='text' placeholder='Name' value={name} className='bg-transparent placeholder-white outline-none focus:outline-none border  border-white rounded-lg px-2 text-white w-[100%]'onChange={(e)=>{
          setName(e.target.value)
          }}/>

          <input type='email' placeholder='Email' value={email} className='bg-transparent placeholder-white  outline-none focus:outline-none border  border-white rounded-lg px-2 text-white w-[100%]'onChange={(e)=>{
          setEmail(e.target.value)
          }}/>

          <input  type='password' placeholder='Password' value={password} className='bg-transparent placeholder-white outline-none focus:outline-none border  border-white rounded-lg text-white px-2 w-[100%]' onChange={(e)=>{
          setPassword(e.target.value)
          }}/>

          <input  type='password' placeholder='Confirm Password' value={confirmPassword} className='bg-transparent placeholder-white outline-none focus:outline-none border  border-white rounded-lg text-white px-2 w-[100%]' onChange={(e)=>{
          setConfirmPassword(e.target.value)
          }}/>
            
          <button type="submit" className="border border-white rounded-lg bg-white text-[#FFE4B8]  px-2 w-[100%] hover:bg-[#FFE4B8] hover:text-white" onClick={(e)=>{
           e.preventDefault();
           console.log(name);
           console.log(email);
           console.log(password);
           setName("");
           setEmail("");
           setPassword("");
           setConfirmPassword("");
           }}><Link to="/dashboard">Create Account </Link></button>
          <div className='flex flex-row gap-[4px]'>
            <p className="text-white text-[12px]">Already have an account? </p>
            <button className="text-white text-[12px] hover:text-[#FFE4B8] " onClick={()=>{
            setIsLogin(true);
          }}> Login </button>
          </div>
          
        
              </form>
          </div> 

  ) 
}