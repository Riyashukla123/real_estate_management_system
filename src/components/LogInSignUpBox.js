import React, {useState, useContext} from 'react';
import {useNavigate }  from 'react-router-dom';
import { AuthContext} from './AuthContext';
import axios from 'axios';

export default function LogInBox( {isLogin, setIsLogin}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName]=useState('');
  const [confirmPassword , setConfirmPassword]= useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/login_user', {
        email,
        password,
      });

      if (data) {

        await login(data); 
        alert("Login successful");
        
        setEmail('');
        setPassword('');
        console.log(user);
        navigate('/dashboard');

      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.status === 404) {
        alert(error.response.data);
      } else {
        alert("Login failed. Please try again.");
      }
    }
  };
  

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(`Password does not match`);
      return;
    }
    try {
      const { data } = await axios.post('http://localhost:5000/signup_user', {
      name,
      email,
      phoneNo,
      password
    });

    if (data.success) {
      alert(data.message);
      // clear form
      setName('');
      setPhoneNo('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // navigate to login page
      setIsLogin(true);
    } else {
      alert(data.message);
    }
  } catch (error) {
  if (error.response) {
    console.error("Backend error:", error.response.data);
    alert(error.response.data.message || "Signup failed due to server error.");
  } else if (error.request) {
    console.error("No response received:", error.request);
    alert("No response from server. Check if backend is running.");
  } else {
    console.error("Axios error:", error.message);
    alert("Signup failed. " + error.message);
  }
}

};

  return(
    isLogin ?
      <div className="bg-transparent relative">
        
        <form onSubmit={handleLogin} className="flex flex-col m-5 ml-7 mr-0 border  border-white rounded-lg justify-center items-center gap-4 px-[5vh] bg-white/30 backdrop-blur-sm pt-7 pb-7 ">
          <p className='text-white font-archivo text-[20px]'>Login to Your Account</p>
          <input type='email' placeholder="Email" value={email} className='bg-transparent outline-none placeholder-white focus:outline-none border  border-white rounded-lg px-2 text-white w-[100%]'onChange={(e)=>{
          setEmail(e.target.value)
          }}/>
          <input type='password' placeholder='Password'  value={password} className='bg-transparent placeholder-white outline-none focus:outline-none border  border-white rounded-lg text-white px-2 w-[100%]' onChange={(e)=>{
          setPassword(e.target.value)
          }}/>
          
          <button type="submit" className="border border-white rounded-lg bg-white text-[#FFE4B8]  px-2 w-[100%] hover:bg-[#FFE4B8] hover:text-white">Login </button>
             
          <div className='flex flex-row gap-[4px]'>
            <p className="text-white text-[12px]">Don't have an account? </p>
            <button className="text-white text-[12px] hover:text-[#FFE4B8] " onClick={()=>{
            setIsLogin(false);
          }}> SignUp </button>
          </div>
              </form>
          </div> :

        <div className="bg-transparent ">
        <form onSubmit={handleSignup} className="flex flex-col m-5 ml-7 mr-0 border  border-white rounded-lg justify-center items-center gap-4 px-[5vh] bg-white/30 backdrop-blur-sm pt-7 pb-7 " >
          <p className='text-white font-archivo text-[20px]'>Create Your Account</p>

          <input type='text' placeholder='Name' value={name} className='bg-transparent placeholder-white outline-none focus:outline-none border  border-white rounded-lg px-2 text-white w-[100%]'onChange={(e)=>{
          setName(e.target.value)
          }}/>

          <input type='email' placeholder='Email' value={email} className='bg-transparent placeholder-white  outline-none focus:outline-none border  border-white rounded-lg px-2 text-white w-[100%]'onChange={(e)=>{
          setEmail(e.target.value)
          }}/>

           <input type='text' placeholder='Phone no.' value={phoneNo} className='bg-transparent placeholder-white  outline-none focus:outline-none border  border-white rounded-lg px-2 text-white w-[100%]'onChange={(e)=>{
          setPhoneNo(e.target.value)
          }}/>

          <input  type='password' placeholder='Password' value={password} className='bg-transparent placeholder-white outline-none focus:outline-none border  border-white rounded-lg text-white px-2 w-[100%]' onChange={(e)=>{
          setPassword(e.target.value)
          }}/>

          <input  type='password' placeholder='Confirm Password' value={confirmPassword} className='bg-transparent placeholder-white outline-none focus:outline-none border  border-white rounded-lg text-white px-2 w-[100%]' onChange={(e)=>{
          setConfirmPassword(e.target.value)
          }}/>
         
          <button type="submit" className="border border-white rounded-lg bg-white text-[#FFE4B8]  px-2 w-[100%] hover:bg-[#FFE4B8] hover:text-white" 
           >
          Create Account 
          </button>

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