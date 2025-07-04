import React from 'react'
import P1 from '../../Images/property1.jpg'
import { FiEdit, FiTrash2 } from 'react-icons/fi';

export default function PropertyCard({data, onEdit, setViewProperty}){
  return(
    <div className='w-full  h-[150px] bg-white mr-4 my-4 border-none rounded-[15px] flex flex-row justify-between p-1.5 pr-2 hover:shadow-lg 'onClick={()=>{
      setViewProperty(true);
    }}>
        <img src={data.imageUrl} alt={P1} className='object-cover h-full w-[200px] border-none rounded-[10px]'  />
        <div className="flex flex-col justify-center gap-4 pt-3.5 pb-3.5 ">
          <p className="text-[15px] font-semibold">Property Name</p>
          <p className="text-[17px] font-bold">{data.ModelName}</p>
        </div>
        <div className="flex flex-col justify-center gap-4 pt-3.5 pb-3.5 ">
          <p className="text-[15px] font-semibold">Location</p>
          <p className="text-[13px] text-gray-500">{data.Location}</p>
        </div>
        <div className="flex flex-col justify-center gap-4 pt-3.5 pb-3.5">
          <p className="text-[15px] font-semibold">Rent</p>
          <p className="text-[13px] text-gray-500">${data.Rent}/flat</p>
        </div>
        <div className="flex flex-col justify-center gap-4 pt-3.5 pb-3.5"> 
          <p className="text-[15px] font-semibold">Status</p>
          <p className="text-[13px] text-gray-500">{data.Status}</p>
        </div>
    
          <button className="" onClick={onEdit}><FiEdit className/> </button>
          <button className=""><FiTrash2/></button>
      
      

      </div>
  )
}