import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaChevronLeft } from 'react-icons/fa';
import BackButton from '../components/BackButton';
import dogIcon from '../images/dog422.jpg';

const PetOption = () => {

  return (
    <div className='min-h-screen'>
      <BackButton />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973] mt-20'>Charlie</p>
        </div>

        <img src= {dogIcon} alt="dog icon" className='w-40 h-auto rounded-full shadow-lg '/>
        <p className='mt-2 text-red-500 font-bold'>Edit Pet information</p>

        <div className='flex flex-col mb-95 mt-7'>
          <div className='flex flex-col hero-content mt-10'>
            <Link to='/PetHistory'>
              <button className='btn btn-accent text-white rounded-full w-50 h-17 text-lg'>View Diagnosis History</button>
            </Link>
            <Link to='/PetSymptoms'>
              <button className='btn btn-secondary rounded-full w-50 h-17 mt-3 text-lg'>New Diagnosis</button>
            </Link>
          </div>
          
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default PetOption;
