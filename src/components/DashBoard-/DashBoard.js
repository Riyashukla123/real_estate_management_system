import React, {useState} from 'react';
import Menu from './Menu.js';
import Overview from './Overview.js';
import Properties from './Properties.js';
import Account from './Account.js';
export default function DashBoard(){
  const [isProperty, setIsProperty] = useState('Overview');
  const [active, setActive] = useState('Overview');
  
    
  return(
    <div className="flex flex-row w-screen relative  bg-gray-100 mt-[4px]">
      <Menu isProperty={isProperty} setIsProperty={setIsProperty} active={active} setActive={setActive}/>
      <div style={{ width: 'calc(100% - 200px)' }} className="absolute flex flex-col justify-center items-center top-0 left-[200px] bg-gray-100 border-none rounded-[5px]">
        {isProperty==='Overview'? <Overview isProperty={isProperty} setIsProperty={setIsProperty} ctive={active} setActive={setActive}/> : isProperty==='Properties'? <Properties/>: 
        isProperty==='Account'?<Account/>:
        <div>hello</div>}
      </div>
    </div>
  )
}