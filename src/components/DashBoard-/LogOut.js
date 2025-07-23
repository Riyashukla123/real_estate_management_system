import React, {useContext} from "react";
import { AuthContext} from '../AuthContext';
import {useNavigate }  from 'react-router-dom';


export default function LogOut(){
  const {logout} = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
  <h1> Are you sure you want to log out ?</h1>
  <button onClick={()=>{
    logout();
    navigate('/');

  }}> Yes</button >
  </div>
  );
}