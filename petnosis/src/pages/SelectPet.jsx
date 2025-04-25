import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import catIcon from '../images/cat422.jpg'
import dogIcon from '../images/dog422.jpg'
import BackButton from '../components/BackButton';
import Search from '../components/Search';
import Voice from '../components/Voice';


const SelectPet = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const dogData = localStorage.getItem('dogs');
    const catData = localStorage.getItem('cats');
  
    const dogs = dogData ? JSON.parse(dogData).map(dog => ({ ...dog, type: 'dog' })) : [];
    const cats = catData ? JSON.parse(catData).map(cat => ({ ...cat, type: 'cat' })) : [];
  
    setPets([...dogs, ...cats]);
  }, []);

  return (
    <div className='min-h-screen'>
      <BackButton />
      <div className='min-h-screen flex flex-col items-center py-20'>
        <div className='hero-content'>
          <p className='mb-5 text-5xl font-bold text-[#ca9973]'>Select Pet</p>
        </div>
        
          <div className ='mb-150 flex flex-col items-center space-y-10'>

          
          <input
                type='text'
                className='pl-10 input input-bordered w-90 ml-4 rounded-full'
                placeholder='Search for pet...'
                onChange={(e) => setName(e.target.value)}
            />
              <Search />
              <Voice />
            
            
          {pets.length === 0 ? (
              <p className='ml-13 mr-13 text-xl items-center'>No pets found. Add a pet to start a diagnosis! </p>
              
            ) : (
              
              pets.map((pet, index) => (
                <Link key={index} to="/PetOption">
                  <div className='flex flex-col items-center justify-center gap-4'>
                  <img
                    src={pet.type === 'dog' ? dogIcon : catIcon}
                    alt={pet.type}
                    className="rounded-full shadow-lg w-24 h-auto"
                  />
                    <p className="text-lg font-semibold">{pet.name}</p>
                  </div>
                </Link>
              ))
            )}

          </div>
        
      </div>  
      <Navbar />
    </div>
  );
};

export default SelectPet;