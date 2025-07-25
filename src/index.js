import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './components/AuthContext';
import {PropertiesProvider} from "./components/DashBoard-/Properties/PropertiesContext.js"


const root =createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <PropertiesProvider>
      <App/>

    </PropertiesProvider>
  </AuthProvider>

);


