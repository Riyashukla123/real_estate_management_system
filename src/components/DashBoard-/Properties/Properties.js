import React, { useState, useEffect, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import PropertyList from './PropertyList.js';
import ViewProps from "./ViewProps";
import AddProps from "./AddProps";
import axios from 'axios';
import {PropertiesContext} from './PropertiesContext.js';
import { AuthContext } from '../../AuthContext.js';




export default function Properties() {


  const [addProperty, setAddProperty] = useState(false);
  const [newProperty, setNewProperty] = useState({
  
    name :"",
    type:"", 
    line1: "", 
    city:"", 
    state:"", 
    year:"", 
    description:"", 
    value:"", 
    status:"" ,
    area:"",
    rooms:"",
    floors:"",
    flats:"",
    rent:""
  });
 
 
  const [propType, setPropType] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [viewProperty, setViewProperty] = useState(false);
  const [viewIndex, setViewIndex] = useState(null);
  const [viewProp, setViewProp] = useState({
      Name :"",
      Type:"",  
      City:"", 
      Description:"", 
      Rent:"", 
      Status:"" ,
      Assets:"",
      Maintanance:""
  
  });

 function cardToViewForm(card){
  if (!card) return {};
  return {
    ImgUrl: card.imageUrl || "",
    Name: card.name || "",
    Type: card.type || "",  
    City: card.city || "", 
    Description: card.description || "", 
    Rent: card.rent || "", 
    Status: card.status || "",
    Assets: card.assets || "",
    Maintanance: card.maintanance || ""
  };
}



  function mapCardToForm(card) {
  return {
    imgUrl:card.imageUrl,
    name: card.name || "",
    type: card.type||"", 
    line1: card.line1||"",
    city: card.city || "",
    state: card.state||"",
    year: card.year||"",
    description: card.description || "",
    value: card.value || "",
    status: card.status || "",
    area: card.area||"", 
    rooms: card.room||"", 
    floors: card.floors|| "", 
    flats: card.flats||"",
    rent: card.rent||""
  };
}
const {properties, setProperties}= useContext(PropertiesContext);

  const {user, setUser}= useContext(AuthContext);


const handleEdit = (card, index) => {
  
  setNewProperty(mapCardToForm(card));
  setEditMode(true);
  setEditIndex(index);
  setAddProperty(true);
 
};

const handleDelete = async (index) => {
  try {
     setViewProperty(false);
    const prop_id = properties[index]._id;
    const res = await axios.delete(
      `http://localhost:5000/${user._id}/${prop_id}/delete_prop`
    );

    if (res.data.success) {
      const updatedUserProperties = user.properties.filter(
        (p) => p !== prop_id
      );

      setUser((prev) => ({ ...prev, properties: updatedUserProperties }));

      const newProp = properties.filter(prop => prop._id !== prop_id);
      setProperties(newProp);
     
    }
  } catch (error) {
    console.log("Error in deleting property:", error);
    alert(error?.response?.data?.message || "Something went wrong");
  }
};



const handleView =(card, index)=>{
  setViewProp(cardToViewForm(card));
  setViewIndex(index);
  setViewProperty(true);
}

console.log(viewIndex);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/${user._id}/user_property`);
        setProperties(res.data.data);
        setError('');
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || 'Error fetching properties');
      } finally {
        setLoading(false);
      }
    };

    if (user._id) {
      fetchProperties();
    }
  }, [user._id, setProperties]
);
if (loading) return <p>Loading properties...</p>;
if (error) return <p>Error: {error}</p>;

  return (
    
    <div className="flex flex-col relative w-full px-5">
      {
        viewProperty && <ViewProps viewProp={viewProp} setViewProp= {setViewProp}  setViewProperty= {setViewProperty}   setViewIndex={setViewIndex}/>
      }

      {
        addProperty && <AddProps newProperty={newProperty} setNewProperty={setNewProperty} setAddProperty={setAddProperty} propType={propType} setPropType={setPropType} editMode={editMode} setEditMode={setEditMode} editIndex={editIndex} setEditIndex={setEditIndex}  />
      }

      
      <div className="nav flex flex-row justify-between w-full pb-[20px] pt-6">
        <p className="text-[25px] text-black font-archivo tracking-tight leading-none">Properties</p>
        <div className="flex flex-row gap-[2px]">
          <input type="search" placeholder="Search" className="px-2 border rounded-lg focus:outline-none" />
          <FiSearch className="bg-[#FFF1DE] text-xl text-semibold h-6 w-6 p-1 border rounded-lg" />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <button
          type="button"
          className="border-[3px] ml-auto rounded-[5px] text-lg px-2 w-[170px] h-[35px] bg-white hover:bg-[#FFF7ED] border-[#FFE4B8]  text-[#FFE4B8] shadow-lg"
          onClick={() => {
            setAddProperty(true);
            
          }}
        >
          Add property
        </button>
      </div>

      <div>
        <PropertyList  onEdit={handleEdit} onView={handleView} onDelete={handleDelete} />

      </div>
    </div>
  );
}
