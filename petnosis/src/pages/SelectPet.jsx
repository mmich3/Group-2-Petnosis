import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';

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
    <div className='min-h-screen'>
      <BackButton />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Select Pet</p>
        </div>
        <div className='hero'>
          <div className='hero-content mt-10'>
            <Link to='/PetOption'>
              <button className='btn btn-accent'>Rocky</button>
            </Link>
            <Link to='/PetOption'>
              <button className='btn btn-secondary'>Max</button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default SelectPet;
