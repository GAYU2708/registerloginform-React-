import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import { useState } from "react";
function App() {
  const [userData,setUserData] = useState(null)
  return (
    <div className="App" >
      <div className="d-flex align-items-center justify-content-center mx-auto ">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login setUserData={setUserData}/>}/>
          <Route path="/dashboard" element={<Dashboard userData={userData}/>}/>

        </Routes>
        
        </BrowserRouter>
          
      </div>
      
    </div>
  );
}

export default App;
