import React, {useContext} from 'react';
import PropertyCard from './PropertyCard.js';
import {PropertiesContext} from "./PropertiesContext";
export default function PropertyList( { onEdit, onView, onDelete} ){
  const {properties}= useContext(PropertiesContext);
  return(
    <div className="flex flex-col w-full gap-4">
      {properties.map((property,index) => (
      
        <PropertyCard key={property._id} property={property} onEdit={() => onEdit(property, index)} onView={()=>{onView(property,index)}} onDelete={()=> onDelete(index)}/>
      ))}
    </div>
  );
}