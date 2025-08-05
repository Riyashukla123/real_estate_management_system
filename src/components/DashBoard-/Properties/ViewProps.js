import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export default function ViewProps({viewProp, setViewProp,  setViewProperty, setViewIndex}){
 

  return(
    <div className='flex flex-col overflow-auto fixed left-1/2 top-20 transform -translate-x-1/2 z-10 bg-white w-[60vw] max-h-[80vh] shadow-[0_5px_30px_rgba(0,0,0,0.3)] rounded-xl gap-5'>
          <div className="px-12 sticky top-0 z-10 pt-8">
            <div className="flex flex-row justify-between">
              <div className="w-full bg-white">
              <p className="font-archivo text-[1.5vw] bg-white">Property Profile</p>
              </div>
              <button className="text-xl text-red-800 " onClick={() => {
                 setViewProperty(false);
                 setViewIndex(null);
              }}>
                <FiX />
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-10 px-12 w-full h-full pb-8">
            <div className="flex flex-col gap-4 p-4 w-1/2 bg-gray-100 border-none rounded-[5px]">
              <div className=" ">
                <img src={viewProp.ImgUrl} alt='img' className="object-cover w-full h-[18vw]"/>
              </div>
              <div className="flex flex-row gap-4">
                <div className=" ">
                <img src={viewProp.ImgUrl} alt='img' className="object-cover w-full h-[8vw]"/>
              </div>
              <div className=" ">
                <img src={viewProp.ImgUrl} alt='img' className="object-cover w-full h-[8vw]"/>
              </div>
              <div className=" ">
                <img src={viewProp.ImgUrl} alt='img' className="object-cover w-full h-[8vw]"/>
              </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <p className="font-archivo text-[1.5vw]">{viewProp.Name}</p>
                <div className="flex flex-row  items-center gap-1">
                  <FaMapMarkerAlt className="bg-transparent text-gray-400 w-3 h-3"/>
                  <p className="text-gray-400 text-[0.8vw]">{viewProp.City}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-[1.1vw] font-semibold">Property Details</p>
                <p className="text-[0.9vw] text-gray-400 max-w-[25vw]">
                 {viewProp.Description}
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-row justify-between w-[25vw]">
                  <div className="flex flex-col gap-1">
                    <p className="text-[1vw] font-semibold">Assets</p>
                    <p className="text-[0.9vw] text-gray-400"> {viewProp.Assets}</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-[1vw] font-semibold">Rent</p>
                    <p className="text-[0.9vw] text-gray-400">{viewProp.Rent} </p>
                  </div>
                </div>

                <div className="flex flex-row justify-between w-[25vw]">
                  <div className="flex flex-col gap-1">
                    <p className="text-[1vw] font-semibold">Tenants</p>
                    <p className="text-[0.9vw] text-gray-400"> {viewProp.Type}</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-[1vw] font-semibold">Status</p>
                    <p className="text-[0.9vw] text-gray-400">{viewProp.Status}</p>
                  </div>
                </div>
                

              </div>

              
              <div className="flex flex-col gap-1">
                <p className="text-[1vw] font-semibold">Maintanance Status</p>
                <p className="text-[0.9vw] text-gray-400">{viewProp.Maintanance}</p>
             </div>
            
            </div>

          </div>

        </div>
    )
  
};