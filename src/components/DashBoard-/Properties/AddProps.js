import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
import {PropertiesContext} from './PropertiesContext';
import {AuthContext} from '../../AuthContext';
import axios from 'axios';


export default function AddProps({newProperty, setNewProperty,setAddProperty, propType, setPropType, editMode, setEditMode, editIndex, setEditIndex})
{
  const {properties, setProperties}= useContext(PropertiesContext);
  const {user, setUser}= useContext(AuthContext);
  

const handleAdd = async (e) => {
  e.preventDefault();

  try {
    if (!editMode) {
      
      const { data } = await axios.post(
        `http://localhost:5000/${user._id}/add_property`,
        newProperty
      );

      if (data.success) {
        setProperties([...properties, data.property]);
        const updatedUserProperties= user.properties;
        updatedUserProperties.push(data.property._id);

        setUser((prev) => ({ ...prev, properties: updatedUserProperties }));
        alert("property added");
      }
    } else {
      
      const prop_id = properties[editIndex]._id;
      const res = await axios.put(
        `http://localhost:5000/${user._id}/${prop_id}/update_prop`,
        newProperty
      );

      if (res.data.success) {
        const updated = [...properties];
        updated[editIndex] = res.data.data;
        setProperties(updated);
        alert("property updates");
      }
    }

    
    setNewProperty({
      name: "",
      type: "",
      line1: "",
      city: "",
      state: "",
      year: "",
      description: "",
      value: "",
      status: "",
      area: "",
      rooms: "",
      floors: "",
      flats: "",
      rent: ""
    });
    setEditMode(false);
    setEditIndex(null);
    setAddProperty(false);

  } catch (error) {
    console.log("Error in handleAdd:", error);
    alert(error?.response?.data?.message || "Something went wrong");
  }
};

  return(
    <form className="flex flex-col fixed left-1/2 top-20 transform -translate-x-1/2 z-10 bg-white w-[50vw] max-h-[80vh] shadow-[0_5px_30px_rgba(0,0,0,0.3)] rounded-xl">
      
          <div className="px-4 sticky top-0 bg-white z-10 py-4">
            <div className="flex flex-row justify-between">
              <p className="font-archivo text-xl">Add Property</p>
              <button className="text-xl text-gray-600 " onClick={() => {
                if(editMode){
            
                setNewProperty({
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
                setEditMode(false);
                setEditIndex(null);
              }
               setAddProperty(false);
              
                
              }}>
                <FiX />
              </button>
            </div>
            <div className="w-full h-[1px] mt-2 bg-gray-300"></div>
          </div>

         
          <div className="overflow-y-auto max-h-[calc(80vh-130px)] px-2">
            <div className="flex flex-col px-4 py-2 gap-1">
              <p className="text-[11px] text-gray-600">Property Name</p>
              <input type="text" placeholder="name" value={newProperty.name} className="border h-[25px] max-w-[300px] border-gray-300 rounded-[5px] shadow px-2 focus:outline-none" onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value })}/>
              <div className="w-full h-[0.5px] mt-2 bg-gray-300"></div>
            </div>

            <div className="flex flex-col px-4 py-2 gap-1"> 
              <p className="text-[11px] text-gray-600">Property Type</p>
              <select value={newProperty.type} className="border border-gray-300 rounded-[5px] text-gray-500 text-sm shadow px-2 focus:outline-none h-[25px] max-w-[300px]" onChange={(e) => {
                setPropType(e.target.value);
                setNewProperty({ ...newProperty, type: e.target.value});
                
                }}>
                <option value="">Select property type</option>
                <option value="Land">Land</option>
                <option value="House">House</option>
                <option value="Building">Building</option>
              </select>
              <div className="w-full h-[0.5px] mt-2 bg-gray-300"></div>
            </div>

            {propType==="Land" || propType==="House" ? <div className="flex flex-col py-2 px-4 gap-1">
              <p className="text-[11px] text-gray-600">Area /met. sq</p>
              <input type="number" value={newProperty.area} placeholder="area" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] max-w-[300px]" onChange={(e) => setNewProperty({ ...newProperty, area: e.target.value })}/>
              <div className="w-full h-[0.5px] mt-2 bg-gray-300"></div>
            </div>:<div></div>}

            {propType==="House"? <div className="flex flex-col py-2 px-4 gap-1">
              <p className="text-[11px] text-gray-600">Number of Rooms</p>
              <input type="number" value={newProperty.rooms} placeholder="number of rooms" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] max-w-[300px]" onChange={(e) => setNewProperty({ ...newProperty, rooms: e.target.value })}/>
              <div className="w-full h-[0.5px] mt-2 bg-gray-300"></div>
            </div>:<div></div>}

            {propType==="House" || propType==='Building'? <div className="flex flex-col py-2 px-4 gap-1">
              <p className="text-[11px] text-gray-600">Floors</p>
              <input type="number" value={newProperty.floors} placeholder="number of floors" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] max-w-[300px]" onChange={(e) => setNewProperty({ ...newProperty, floors: e.target.value })}/>
              <div className="w-full h-[0.5px] mt-2 bg-gray-300"></div>
            </div>:<div></div>}

            {propType==='Building'? <div className="flex flex-col py-2 px-4 gap-1">
              <p className="text-[11px] text-gray-600">Flats per floor</p>
              <input type="number" value={newProperty.flats} placeholder="number of flats / floor" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] max-w-[300px]" onChange={(e) => setNewProperty({ ...newProperty, flats: e.target.value })}/>
              <div className="w-full h-[0.5px] mt-2 bg-gray-300"></div>
            </div>:<div></div>}

            <div className="flex flex-col py-2 px-4 gap-1">
              <p className="text-[11px] text-gray-600">Location</p>
              <div className="flex flex-row justify-between flex-wrap gap-2">
                <input type="text" value={newProperty.line1} placeholder="address line1" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] max-w-[300px]" onChange={(e) => setNewProperty({ ...newProperty, line1: e.target.value })} />
                <input type="text" value={newProperty.city} placeholder="city" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] max-w-[300px]" onChange={(e) => setNewProperty({ ...newProperty, city: e.target.value })}/>
                <input type="text" value={newProperty.state} placeholder="state" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] max-w-[300px]" onChange={(e) => setNewProperty({ ...newProperty, state: e.target.value })} />
              </div>
              <div className="w-full h-[0.5px] mt-2 bg-gray-300"></div>
            </div>

            <div className="flex flex-col py-2 px-4 gap-1">
              <p className="text-[11px] text-gray-600">Year Built/Bought</p>
            <input type="number" value={newProperty.year} placeholder="year" min="1900" max="2099" step="1" className="border border-gray-300 rounded-[5px] text-gray-600 shadow px-2 focus:outline-none h-[25px] max-w-[300px]" onChange={(e) => setNewProperty({ ...newProperty, year: e.target.value })} />
              <div className="w-full h-[0.5px] mt-2 bg-gray-300"></div>
            </div>

            <div className="flex flex-col py-2 px-4 gap-1">
              <p className="text-[11px] text-gray-600">Description</p>
              <input type="text" value={newProperty.description} placeholder="description" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] max-w-[300px]" onChange={(e) => setNewProperty({ ...newProperty, description: e.target.value })}/>
              <div className="w-full h-[0.5px] mt-2 bg-gray-300"></div>
            </div>

            <div className="flex flex-col py-2 px-4 gap-1">
              <p className="text-[11px] text-gray-600">Value</p>
              <input type="number" value={newProperty.value} placeholder="value" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] max-w-[300px]" onChange={(e) => setNewProperty({ ...newProperty, value: e.target.value })}/>
              <div className="w-full h-[0.5px] mt-2 bg-gray-300"></div>
            </div>

            <div className="flex flex-col py-2 px-4 gap-1">
              <p className="text-[11px] text-gray-600">Rent</p>
              <input type="number" value={newProperty.rent} placeholder="value" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] max-w-[300px]" onChange={(e) => setNewProperty({ ...newProperty, rent: e.target.value })}/>
              <div className="w-full h-[0.5px] mt-2 bg-gray-300"></div>
            </div>

            <div className="flex flex-col py-2 px-4 gap-1">
              <p className="text-[11px] text-gray-600">Status</p>
              <input type="text" value={newProperty.status} placeholder="status" className="border border-gray-300 rounded-[5px] shadow px-2 focus:outline-none h-[25px] max-w-[300px]" onChange={(e) => setNewProperty({ ...newProperty, status: e.target.value })} />
              <div className="w-full h-[0.5px] mt-2 bg-gray-300"></div>
            </div>
          </div>

          
          <div className="flex w-full justify-center items-center pt-4 sticky bottom-0 bg-white z-10 py-2">
            <button
              type="submit"
              className="border-[3px] rounded-[5px] text-lg px-2 w-[170px] h-[35px] bg-white hover:bg-[#FFF7ED] border-[#FFE4B8]  text-[#FFE4B8] shadow-lg"
              onClick={(e) => {
                handleAdd(e)
              }}
            >
              {!editMode? 'Add property': 'Update property'}
            </button>
          </div>
        </form>

  );
};