import { useState } from 'react';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Blank from './pages/blank';
import Home from './pages/Home'
import { Link } from 'react-router-dom'

function App() {

  let element = useRoutes([
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/Blank",
      element:<Blank/>
    },
    
  ]);

  return (
    <>
      {element}
    </>
  )
}

export default App
