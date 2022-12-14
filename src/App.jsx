import React from 'react';
import { useState } from 'react'
import './App.css';
import Logo from './assets/Logo';
import Carrusel from './components/carrusel/Carrusel';
import NavBar from './components/navBar/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Carrusel/>
    </div>
  )
}

export default App
