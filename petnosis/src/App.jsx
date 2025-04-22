import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Blank from './pages/blank';
import Home from './pages/Home'

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
