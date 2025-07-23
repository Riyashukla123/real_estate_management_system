import React from 'react';
import PropertyCard from './PropertyCard.js'
export default function PropertyList( {properties, onEdit, onView} ){
  
  return(
    <div className="flex flex-col w-full gap-4">
      {properties.map((property,index) => (
      
        <PropertyCard key={property.key} property={property} onEdit={() => onEdit(property, index)} onView={()=>{onView(property,index)}}/>
      ))}
    </div>
  );
}