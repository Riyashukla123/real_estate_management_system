import React from 'react';
import { Link }  from 'react-router-dom';

export default function Menu({isProperty, setIsProperty, active, setActive }) {
 const getButtonClass = (name) => {
       return `py-1.5 w-[180px] text-center rounded-lg border-none ${
         active === name ? 'bg-[#FFE4B8] text-[#827863] shadow ' : 'bg-transparent text-gray-500 hover:bg-gray-100'
       }`;
     };

  return (
    <div className="flex flex-col fixed items-center z-10 h-screen pt-4 px-auto w-[200px] gap-3 text-sm bg-white">
      <div className="text-[22px] text-[#FFE4B8] font-archivo tracking-tight leading-none pb-[20px] pt-2">property</div>
      
      <button className={getButtonClass('Overview')} onClick={() => {
        setIsProperty('Overview');
        setActive('Overview');
      }}>Overview</button>

      <button className={getButtonClass('Properties')} onClick={() => {
        setIsProperty('Properties');
        setActive('Properties');
      }}>Properties</button>

      <button className={getButtonClass('Account')} onClick={() => {
        setIsProperty('Account');
        setActive('Account');
      }}>Account</button>

      <button className={getButtonClass('Settings')} onClick={() => {
        setIsProperty('Settings');
        setActive('Settings');
      }}>Settings</button>

      <Link to="/">
      <button className={getButtonClass('LogOut')} >LogOut</button>
      </Link>
    </div>
  );
}
