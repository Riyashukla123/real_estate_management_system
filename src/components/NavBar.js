import React from 'react';


import { Link, useLocation }  from 'react-router-dom';

function NavBar() {
   
   const location = useLocation(); // get the current path
   const currentPath = location.pathname;
  return (
    
    <div className={`flex z-50 flex-row justify-between  fixed w-screen h-[70px] items-center  py-4 font-sans px-4 ${currentPath==='/login'?'bg-[#F9F4ED]' : 'bg-white'}`}>
      <p>Buy Property</p>
      <p>Sell Property</p>
      <Link to='/'>
      <p className="text-xl font-archivo tracking-wider text-gray-900">Shukla's</p>
      </Link>
        <p>User's Guide</p>
      {currentPath!=='/' && currentPath!=="/login" ? <Link to="/dashboard"><p >Dashboard</p></Link> :  <Link to="/login"><p >Login</p></Link> }
    </div>
  )
}

export default NavBar;
