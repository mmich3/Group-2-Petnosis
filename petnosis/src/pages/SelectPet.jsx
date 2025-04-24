import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const SelectPet = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const dogData = localStorage.getItem('dogs');
    const catData = localStorage.getItem('cats');

    const dogs = dogData ? JSON.parse(dogData) : [];
    const cats = catData ? JSON.parse(catData) : [];

    setPets([...dogs, ...cats]);
  }, []);

  return (
    <div className='min-h-screen '>
      <div className='mt-30 flex min-h-screen flex-col justify-around items-center '>
        <div className='hero-content'>
          <p className='mb-5 text-5xl font-bold text-[#ca9973]'>Select Pet</p>
        </div>
        
          <div className ='mb-150 flex flex-col items-center space-y-4'>

          

          {pets.length === 0 ? (
              <p className='text-xl'>No pets found. Add a pet to start a diagnosis! </p>
              
            ) : (
              
              pets.map((pet, index) => (
                <Link key={index} to='/PetOption'>
                  
                  <button className='btn btn-secondary'>{pet.name}</button>
                  
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
