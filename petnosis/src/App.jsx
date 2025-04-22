import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import PetType from './pages/AddPet';
import AddPet from './pages/AddPet';

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/add-pet',
      element: <AddPet />,
    },
  ]);

  return <>{element}</>;
}

export default App;
