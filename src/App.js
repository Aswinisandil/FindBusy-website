import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Business from './Components/Business/Business';
import Digital from './Components/Digital/Digital';
import Trainer from './Components/Trainer/Trainer';
import Support from './Components/Trainer/Trainer';
import Home from './Components/Home/Home';
import Hiring from "./Components/Hiring/Hiring";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/hiring" element={<Hiring/>}/>
      <Route path="/business" element={<Business/>}/>
      <Route path="/digital" element={<Digital/>}/>
      <Route path="/trainer" element={<Trainer/>}/>
      <Route path="/support" element={<Support/>}/>

      </Routes>
      
     
    </Router>
  );
}

export default App;
