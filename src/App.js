import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import View from './components/View/View';
import React, { useState } from 'react';
import Update from './components/Update/Update';

function App() {
  const [card,setCard]=useState([])
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register card={card} setCard={setCard}/>}></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Routes>
        <Route path="/card" element={<Card card={card} setCard={setCard}/>}></Route>
      </Routes>
      <Routes>
        <Route path="/view" element={<View/>}></Route>
      </Routes>
      <Routes>
        <Route path="/update" element={<Update/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
