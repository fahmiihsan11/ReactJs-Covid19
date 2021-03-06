import './App.css';
import NavApp from './components/NavApp';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from  './pages/About';
import Home from './pages/Home';

function App() {
  return ( 
    <Router>
      <NavApp />   
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
