import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import catIcon from '../images/cat422.jpg';
import dogIcon from '../images/dog422.jpg';
import BackButton from '../components/BackButton';
import Search from '../components/Search';
import Voice from '../components/Voice';

const SelectPet = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const dogData = sessionStorage.getItem('dogs');
    const catData = sessionStorage.getItem('cats');

    const dogs = dogData ? JSON.parse(dogData).map((dog) => ({ ...dog, type: 'dog' })) : [];
    const cats = catData ? JSON.parse(catData).map((cat) => ({ ...cat, type: 'cat' })) : [];

    setPets([...dogs, ...cats]);
  }, []);

  return (
    <div className='flex min-h-screen flex-col'>
      <BackButton />
      <div className='flex grow flex-col items-center justify-center'>
        <div className='hero-content'>
          <p className='text-5xl font-bold text-[#ca9973]'>Select Pet</p>
        </div>
        <Search />

        {pets.length === 0 ? (
          <p className='items-center text-xl'>No pets found. Add a pet to start a diagnosis! </p>
        ) : (
          pets.map((pet, index) => (
            <Link key={index} to='/PetOption'>
              <div className='h-48 overflow-auto border p-4'>
                <img
                  src={pet.type === 'dog' ? dogIcon : catIcon}
                  alt={pet.type}
                  className='h-auto w-24 rounded-full shadow-lg'
                />
                <p className='text-lg font-semibold'>{pet.name}</p>
              </div>
            </Link>
          ))
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default SelectPet;
