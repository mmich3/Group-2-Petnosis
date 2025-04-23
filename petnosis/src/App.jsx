import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import PetType from './pages/AddPet';
import AddPet from './pages/AddPet';
import AddDog from './pages/AddDog';
import AddCat from './pages/AddCat';

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
    {
      path: '/add-dog',
      element: <AddDog />,
    },
    {
      path: '/add-cat',
      element: <AddCat />,
    },
  ]);

  return <>{element}</>;
}

export default App;
