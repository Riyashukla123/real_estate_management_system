import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import LogInPage from './components/LogInPage.js';
import NavBar from './components/NavBar.js';
import DashBoard from './components/DashBoard-/DashBoard.js';
import { AuthProvider } from './components/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Router>
      <div className="flex relative">
        <NavBar />
        <div className="absolute top-[70px] w-full">
          <Routes>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LogInPage />} />
            
          </Routes>
        </div>
      </div>
      </Router>
    </AuthProvider>
    
  );
}

export default App;
