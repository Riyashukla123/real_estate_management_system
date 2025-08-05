import React, { useState } from 'react';
import { createContext } from 'react';
export const PropertiesContext = createContext();
export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  
  return (
    <PropertiesContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertiesContext.Provider>
  );
};


