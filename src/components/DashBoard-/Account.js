import React, {useState, useContext, useRef} from 'react'
import { AuthContext } from '../AuthContext';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
export default function Account(){
  const {user,login}= useContext(AuthContext);
  const navigate = useNavigate();
  const name= user.name.split(" ");

  const [selectedImage, setSelectedImage] = useState(null);
  const defaultProfile= 
    {
      imgUrl:user.profileImage || "", 
      firstName:name[0], 
      lastName:name[1], 
      email:user.email, 
      currentPassword:"", 
      newPassword:"", 
      mobileNumber:user.phoneNo
    };

  const [profile, setProfile] = useState(defaultProfile);

  const handleUpdate = async (e) => {
  e.preventDefault(); 

  const UpdatedUser = {
    name: profile.firstName + " " + profile.lastName,
    email: profile.email,
    phoneNo: profile.mobileNumber,
    curr_password: profile.currentPassword,
    new_password: profile.newPassword
  };

  try {
    const { data } = await axios.put(`http://localhost:5000/update_user/${user._id}`, UpdatedUser);
    
    if (data) {
      const updatedUser ={
      _id: user._id,
      name: UpdatedUser.name,
      email: UpdatedUser.email,
      phoneNo: UpdatedUser.phoneNo,
      password: UpdatedUser.new_password || user.password
    }
      await login(updatedUser); 
      alert(data.message);
      
      navigate('/dashboard');
    } else {
      alert("Invalid email or password");
    }
  } catch (error) {
  console.error("Update error:", error);

  if (error.response) {
    // The request was made and server responded with a status code
    if (error.response.status === 404) {
      alert("User not found");
    } else if (error.response.status === 500) {
      alert("Server error: " + error.response.data.message);
    }
    else if(error.response.status === 401){
      alert( error.response.data.message);
    } else {
      alert("Error: " + error.response.data.message);
    }
  } else if (error.request) {
    // The request was made but no response received
    alert("No response from server. Please try again later.");
  } else {
    // Something else happened
    alert("Error: " + error.message);
  }
}
};

const fileInputRef = useRef();

const handleUploadImage = async () => {
  if (!selectedImage || !user?._id) return;

  const formData = new FormData();
  formData.append('image', selectedImage);

  try {
    const res = await axios.put(`http://localhost:5000/${user._id}/upload-image`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

   if (res.status === 200) {
  alert("Image uploaded");

  
  const newUser = { ...user, profileImage: `http://localhost:5000/${user._id}/image?timestamp=${Date.now()}` };

  login(newUser); // update global context
  setProfile({ ...profile, imgUrl: `http://localhost:5000/${user._id}/image?timestamp=${Date.now()}` }); // update local state
  setSelectedImage(null);

  if (fileInputRef.current) fileInputRef.current.value = '';
}
  } catch (err) {
    alert("Failed to upload image");
    console.error(err);
  }
};


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
        <input
  type="file"
  accept="image/*"
  placeholder="upload new picture"
  ref={fileInputRef} 
  className="text-[12px] border border-gray-200 h-[22px] px-[8px] rounded-[5px] hover:bg-gray-200"
  onChange={(e) => {
   
    setSelectedImage(e.target.files[0]);
   
  }}
/>
 {selectedImage? <button
  onClick={handleUploadImage}
  className="text-[12px] border border-gray-200  h-[22px] px-[6px] bg-gray-200 rounded-[5px] hover:bg-white"
>
  Upload
</button>
:
<button className="text-[12px] border border-gray-200  h-[22px] px-[6px] bg-gray-200 rounded-[5px] hover:bg-white" onClick={async () => {
  try {
    await axios.delete(`http://localhost:5000/${user._id}/delete-image`);
    setProfile({ ...profile, imgUrl: "" });
    setSelectedImage(null);
    alert("Profile image deleted");
  } catch (err) {
    console.error("Failed to delete image:", err);
    alert("Failed to delete image");
  }
}}
>Delete</button>}
        
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
      <button onClick={(e)=>{
        handleUpdate(e);
      }}>Save Changes</button>
    </div>


   </div>
  );
};  