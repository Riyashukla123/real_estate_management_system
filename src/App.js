import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import LogInPage from './components/LogInPage.js';
import NavBar from './components/NavBar.js';
import DashBoard from './components/DashBoard-/DashBoard.js';
import Properties from './components/DashBoard-/Properties/Properties';


function App() {
  return (

    
        <Router>
          <div className="flex relative">
            <NavBar />
            <div className="absolute top-0 md:top-[70px] w-full">
            <Routes>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LogInPage />} />
              <Route path="/properties" element={<Properties />} />

            </Routes>
            </div>
         </div>
       </Router>
    
  );
}

export default App;
