import React from 'react';
import PropertyCard from './PropertyCard.js'
export default function PropertyList( {properties, onEdit, setViewProperty} ){
  
  return(
    <div className="flex flex-col w-full gap-4">
      {properties.map((item,index) => (
        <PropertyCard key={item.key} data={item} onEdit={() => onEdit(item, index)} setViewProperty={setViewProperty}/>
      ))}
    </div>
  );
}