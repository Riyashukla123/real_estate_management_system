import React, { useState } from 'react';
import { createContext } from 'react';
import Data from '../../../Data.js';
export const PropertiesContext = createContext();
export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState(Data|| []);
  
  return (
    <PropertiesContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertiesContext.Provider>
  );
};


