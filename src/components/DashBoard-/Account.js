import React, {useState} from 'react'
import proImg from "../../Images/profile.jpg"
export default function Account(){
  const defaultProfile= 
    {imgUrl:proImg, firstName:"Riya", lastName:"Shukla", email:"riya70077@gmail.com", currentPassword:"Mute@123", newPassword:"Mute@123", mobileNumber:"9305172116"};
  const [profile, setProfile] = useState(defaultProfile);
  return(
   <div className="flex flex-col w-[70vw] max-w-[1100px] m-4 p-12 bg-white shadow-lg border-none relative rounded-[5px] gap-6">
    <div>
      <p className="text-[25px] text-black font-archivo tracking-tight leading-none">Account</p>
      <p className="text-xs text-gray-600 font-semibold pt-1">Real-time information and activities of your property</p>
      <div className="w-full h-[1px] mt-2 bg-gray-300"></div>
    </div>

    <div className="w-full flex flex-row justify-between">

      <div className="flex flex-row gap-1">
         <img src={profile.imgUrl} alt="profilepic" className="h-[70px] w-[70px] border rounded-[50%]"/>
        <div className="flex flex-col justify-center ">
          <p className="text-[14px] font-semibold text-black">Profile picture</p>
          <p className="text-[12px] text-gray-600">PNG,JPEG under 15mb</p>
        </div>
       
      </div>
      <div className="flex flex-row gap-1 justify-center items-center">
        <button className="text-[12px] border border-gray-200  h-[22px] px-[8px] rounded-[5px] hover:bg-gray-200"> upload new picture</button>
        <button className="text-[12px] border border-gray-200  h-[22px] px-[6px] bg-gray-200 rounded-[5px] hover:bg-white" onClick={(e)=>{setProfile({...profile, imgUrl: {}})
        }}>Delete</button>
      </div>
    </div>

    <div className="flex flex-col gap-1 w-full">
      <p className="text-[14px] font-semibold text-black">Full Name</p>
      <div className="flex flex-row justify-between flex-wrap gap-6 w-full">
        <div className="w-[47%]">
          <p className="text-[12px] text-gray-600">First Name</p>
          <input type="text" value={profile.firstName} placeholder="first name" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] w-full" onChange={(e) => setProfile({...profile, firstName: e.target.value})} />
        </div>
        
        <div className="w-[47%]">
          <p className="text-[12px] text-gray-600">Last Name</p>
          <input type="text" value={profile.lastName} placeholder="last name" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] w-full " onChange={(e) => setProfile({...profile, lastName: e.target.value})} />
        </div>
        
      </div>
      <div className="w-full h-[0.5px] mt-4 bg-gray-300"></div>
    </div>

    <div className="flex flex-col gap-1 ">
      <p className="text-[14px] font-semibold text-black">Contact Email</p>
      <div className="flex flex-row justify-between flex-wrap">
        <div className="w-[100%]">
          <p className="text-[12px] text-gray-600">Email</p>
          <input type="email" value={profile.email} placeholder="email" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] w-full" onChange={(e) => setProfile({...profile, email: e.target.value})} />
        </div>
        
        
      </div>
      <div className="w-full h-[0.5px] mt-4 bg-gray-300"></div>
    </div>


    <div className="flex flex-col gap-1 ">
      <p className="text-[14px] font-semibold text-black">Password</p>
      <p className="text-xs text-gray-600 font-semibold pb-2"> Modify your current password</p>
      <div className="flex flex-row justify-between flex-wrap gap-6">
        <div className="w-[47%]">
          <p className="text-[12px] text-gray-600">Current password</p>
          <input type="password" value={profile.currentPassword} placeholder="current password" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] w-full" onChange={(e) => setProfile({...profile, currentPassword: e.target.value})} />
        </div>
        
        <div className="w-[47%]">
          <p className="text-[12px] text-gray-600">New password</p>
          <input type="password" value={profile.newPassword} placeholder="new password" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] w-full " onChange={(e) => setProfile({...profile, newPassword: e.target.value})} />
        </div>
        
      </div>
      <div className="w-full h-[0.5px] mt-4 bg-gray-300"></div>
    </div>


    <div className="flex flex-col gap-1 ">
      <p className="text-[14px] font-semibold text-black">Contact Number</p>
      <div className="flex flex-row justify-between flex-wrap gap-6">
        <div className="w-[47%]">
          <p className="text-[12px] text-gray-600">Mobile no.</p>
          <input type="text" value={profile.mobileNumber} placeholder="mobile no." className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] w-full" onChange={(e) => setProfile({...profile, mobileNumber: e.target.value})} />
        </div>
        
        
        
      </div>
      <div className="w-full h-[0.5px] mt-4 bg-gray-300 mb-6"></div>
    </div>

    <div className="absolute bottom-6 right-12 border-[3px] rounded-[5px] text-lg px-2 w-[135px] h-[35px] bg-white hover:bg-[#FFF7ED] border-[#FFE4B8]  text-[#FFE4B8] shadow-lg">
      <button onClick={(e) => setProfile(profile)}>Save Changes</button>
    </div>


   </div>
  );
};  