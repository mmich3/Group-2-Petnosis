import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import PetOption from './pages/PetOption';
import AddPet from './pages/AddPet';
import SelectPet from './pages/SelectPet';
import PetSymptoms from './pages/PetSymptoms';
import PetHistory from './pages/PetHistory';
import AdditionalSymptoms from './pages/AdditionalSymptoms';
import Results from './pages/Results';
import Location from './pages/Location';
import AddDog from './pages/AddDog';
import AddCat from './pages/AddCat';
import Vet from './pages/Vet';
import PetInfo from './pages/PetInfo';

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/AddPet',
      element: <AddPet />,
    },
    {
      path: '/AddCat',
      element: <AddCat />,
    },
    {
      path: '/AddDog',
      element: <AddDog />,
    },
    {
      path: '/SelectPet',
      element: <SelectPet />,
    },
    {
      path: '/PetOption',
      element: <PetOption />,
    },
    {
      path: '/PetSymptoms',
      element: <PetSymptoms />,
    },
    {
      path: '/PetHistory',
      element: <PetHistory />,
    },
    {
      path: '/AdditionalSymptoms',
      element: <AdditionalSymptoms />,
    },
    {
      path: '/Results',
      element: <Results />,
    },
    {
      path: '/Location',
      element: <Location />,
    },
    {
      path: '/Vet',
      element: <Vet />,
    },
    {
      path: '/PetInfo',
      element: <PetInfo />,
    },
  ]);

  return <>{element}</>;
}

export default App;
