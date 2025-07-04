import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaBuilding, FaCoins, FaChartLine, FaHome } from 'react-icons/fa';
import Properties from '../../Data';
export default function Overview({isProperty, setIsProperty, active, setActive }){
  const activities=[
    "Maple villas Apartments purchased in Pune Maharashtra.",
    "Green Residency Flat in Banglore are rented to Mr. Desai on june 30th.",
    "Ocean View Villa is purchased in Goa.",
    "Maple Villa Apartments are rented to Mr. Maheep on 27th june.", "Skyline Heights building in delhi are vacated by tenants."
  ];

  const keywords = {
    rented: "text-green-800 bg-green-100 px-3 pb-1 pt-0.7 border-none rounded-[3vw] text-center",
    purchased: " text-red-800 bg-red-100 px-3 pb-1 pt-0.7 border-none rounded-[3vw] text-center",
    sold: "text-purple-800 bg-purple-100 px-3 pb-1 pt-0.7 border-none rounded-[3vw] text-center",
    vacated: " text-blue-800 bg-blue-100 px-3 pb-1 pt-0.7 border-none rounded-[3vw] text-center"
  };

  const highlightKeywords = (sentence) => {
    const words = sentence.split(" ");
    return words.map((word, index) => {
      const cleanWord = word.toLowerCase().replace(/[^\w\s]/gi, ''); // remove punctuation for matching
      if (keywords[cleanWord]) {
        return (
          <div className="inline  ">
            <span key={index} className={keywords[cleanWord]}>
              {word}
            </span>{' '}
          </div>
          
        );
      }
      return word + ' ';
    });
  };



  return(
    <div className="flex flex-col w-full p-5">
      <div className="nav flex flex-row justify-between w-full pb-[20px] pt-1">
        <p className='text-[25px] text-black font-archivo tracking-tight leading-none '>Overview</p>
        <div className="flex flex-row gap-[2px]">
          <input type="search" placeholder="Search" className="px-2 border rounded-lg focus:outline-none w-[15vw] text-[0.9vw]"/>
          <FiSearch className="bg-[#FFF1DE] text-[0.9vw] text-semibold h-6 w-6 p-1 border rounded-lg"/>
        </div> 
      </div>
      <div className="overview-main w-full flex flex-col gap-[2vw]">
        <div className='flex flex-row w-full gap-[2vw]'>
          <div className="flex flex-col w-1/2 gap-[2vw]">
            <div className='flex flex-row gap-[2vw]'>
              <div className='w-[20vw] h-[10vw] bg-white border-none rounded-lg flex flex-row justify-between items center px-[2vw]'>
                <div className="flex items-center ">
                  <div className="bg-[#FFF7ED] p-[1vw] border-none rounded-[5px] flex justify-center">
                  <FaBuilding className="bg-[#FFF7ED] text-[2.4vw] text-[#FFE4B8]"/>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className=" text-[1.3vw] text-gray-500">Properties owned</p>
                  <p className="text-[1.5vw] font-semibold">6</p>
                </div>
                
              </div>
              <div className='w-[20vw] h-[10vw] bg-white border-none rounded-lg flex flex-row justify-between items center px-[2vw]'>
                <div className="flex items-center ">
                  <div className="bg-[#F0FBF2] p-[1vw] border-none rounded-[5px] flex justify-center">
                  <FaCoins className="bg-[	#F3FBF2] text-[2.4vw] text-[#BFE8B4]"/>
                  </div>
                </div>
                <div className="flex flex-col justify-center mr-[2.5vw]">
                  <p className=" text-[1.3vw] text-gray-500">Net worth</p>
                  <p className="text-[1.5vw] font-semibold">$156,000</p>
                </div>
                
              </div>
            </div>
            <div className='flex flex-row gap-[2vw]'>
              <div className='w-[20vw] h-[10vw] bg-white border-none rounded-lg flex flex-row justify-between items center px-[2vw]'>
                <div className="flex items-center ">
                  <div className="bg-[#E1F0F8] p-[1vw] border-none rounded-[5px] flex justify-center">
                  <FaChartLine className="bg-[	#E1F0F8] text-[2.4vw] text-[#98D5F2]"/>
                  </div>
                </div>
                <div className="flex flex-col justify-center mr-[3vw]">
                  <p className=" text-[1.3vw] text-gray-500">Profit</p>
                  <p className="text-[1.5vw] font-semibold">$76,000</p>
                </div>
                
              </div>
              <div className='w-[20vw] h-[10vw] bg-white border-none rounded-lg flex flex-row justify-between items center pl-[2vw] gap-[2vw]'>
                <div className="flex items-center ">
                  <div className="bg-[#FBE4E2] p-[1vw] border-none rounded-[5px] flex justify-center">
                  <FaHome className="bg-[#FBE4E2] text-[2.4vw] text-[#FFB3A5]"/>
                  </div>
                </div>
                <div className="flex flex-col justify-center mr-[3vw]">
                  <p className=" text-[1.3vw] text-gray-500">Monthly rent</p>
                  <p className="text-[1.5vw] font-semibold">$56,000</p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="flex flex-col histogram w-full h-[22vw] bg-white border-none rounded-lg p-[2vw] gap-3">
            <p className=" text-[1.5vw] text-black font-semibold 
            ">Activities</p>
            <div className="overflow-y-auto max-h-[21vw] ">
              <ul className="">
                {activities.map((activity, idx) => (
                  <li key={idx} className="text-[1.2vw] text-gray-500 py-[1vh]">
                  {highlightKeywords(activity)}
                  </li>
                ))}              
              </ul>
            </div>
            
          </div>

        </div>

        
        <div className="flex flex-col w-full gap-[2vw] h-[38vw] bg-white border-none rounded-lg p-[2vw]">
          <p className=" text-[1.5vw] text-black   font-semibold">Property Status
          </p>
          
          <div className="max-h-[38vw] overflow-y-auto">
          <table className="w-full border-none rounded-[2vw] border-separate overflow-hidden">
            <thead className="sticky top-0 ">
              <tr className="h-[3vw]">
                <th className="w-[55%] text-[1.3vw] font-bold text-gray-700 text-left px-5 h-[2vw]">Property Name</th>
                <th className="w-[22.5%] text-[1.3vw] font-bold text-gray-700 text-left px-5">Property Type</th>
                <th className="w-[22.5%] text-[1.3vw] font-bold text-gray-700 text-left px-5">Value</th>
              </tr>
            </thead>
            <tbody className="bg-white pt-4 gap-2">
              {Properties.map((property, index)=>(
                <tr key={index} className='h-[3vw]'>
                  <td className="text-[1.3vw] px-6 py-[1vw]">{property.ModelName}</td>
                  <td className="text-[1.3vw] px-4 py-[1vw] text-center">
                    {property.Type === "Building" && <p className=" w-[8.5vw] bg-red-100 text-red-800 px-[1vw] py-[0.6vw] border-none rounded-[2vw]">{property.Type}</p>}

                    {property.Type === "Apartment" && <p className="w-[8.5vw] bg-blue-100 text-blue-800 px-[1vw] py-[0.6vw] border-none rounded-[2vw]">{property.Type}</p>}

                    {property.Type === "House" && <p className="w-[8.5vw] bg-green-100 text-green-800 px-[1vw] py-[0.6vw] border-none rounded-[2vw]">{property.Type}</p>}

                    {property.Type === "Land" && <p className="w-[8.5vw] bg-[#FFF7ED] text-[#FFE4B8] px-[1vw] py-[0.6vw] border-none rounded-[2vw]">{property.Type}</p>}
                  </td>
                  <td className="text-[1.3vw] px-6 py-[1vw]">{property.Value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
                    
        </div>  
        <div className="flex flex-col w-full px-4 items-center gap-[2vw]">
            <div className="h-[0.1vw] w-[100%] bg-gray-500 mt-[1vw]"></div>
            <button className="border-[2px] rounded-[5px] text-[1.3vw] px-[1vw] w-[9vw] h-[3vw] bg-white hover:bg-purple-100 border-purple-700  text-purple-800 shadow-lg" onClick={()=>{
              setIsProperty('Properties');
              setActive('Properties');

            }}>View More</button>
          </div>             
          
        </div>
      </div>
    </div>
  )
}       