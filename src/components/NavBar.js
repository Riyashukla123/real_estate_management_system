import React, {useContext, useState} from 'react';
import { AuthContext } from './AuthContext';
import { Link, useLocation }  from 'react-router-dom';
import { FaBars} from 'react-icons/fa';

function NavBar() {
   
   const location = useLocation();
   const currentPath = location.pathname;
   const {user}= useContext(AuthContext);
   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className={`hidden md:flex z-50 flex-row justify-between  fixed w-screen h-[70px] items-center  py-4 font-sans px-4 md:pr-8 ${currentPath==='/login'?'bg-[#F9F4ED] ' : 'bg-white '} `}>
        <p>Buy Property</p>
        <p>Sell Property</p>
        <Link to='/'>
        <p className="text-xl font-archivo tracking-wider text-gray-900">Shukla's</p>
        </Link>
          <p>User's Guide</p>
        {user ? (
          <Link to="/dashboard"><p>Account</p></Link>
        ) : (
          <Link to="/login"><p>Login</p></Link>
        )}
      </div>
      <div className='md:hidden'>
        <span className={` ${currentPath==='/login'?'bg-[#F9F4ED] before:bg-[#ffffff]' : 'bg-white before:bg-[#F9F4ED]'} px-7 py-2 text-2xl font-bold fixed top-4 right-4 z-50 rounded-full shadow-xl  before:w-5 before:h-5 before:absolute before:left-[-5px] before:bottom-[-5px] before:rounded-full before:content-[''] before:shadow-xl `} onClick={()=>setMenuOpen(!menuOpen)}>
        <FaBars/></span>
        <div className={`${menuOpen ? 'translate-x-0' : 'translate-x-[110%]'} w-[calc(100vw-20px)] h-[calc(100vh-115px)] fixed top-[70px] left-[10px] bg-white rounded-lg z-50 font-archivo transition-all duration-700 flex flex-col justify-center items-center gap-8 underline text-4xl font-bold`}>
          <p>Buy Property</p>
        <p>Sell Property</p>
        <Link to='/'>
        <p>Shukla's</p>
        </Link>
          <p>User's Guide</p>
        {user ? (
          <Link to="/dashboard"><p>Account</p></Link>
        ) : (
          <Link to="/login"><p>Login</p></Link>
        )}
        </div>
      </div>
    </>
  )
}

export default NavBar;
