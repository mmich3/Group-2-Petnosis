import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

const PetOption = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen flex-col justify-around'>
        <div className='hero-content'>
          <p className='mb-5 text-5xl font-bold text-[#ca9973]'>Pet Option</p>
        </div>
        <div className='hero'>
          <div className='hero-content flex'>
            <Link className='mb-10' to='/PetHistory'>
            <button className='btn btn-accent'>View Diagnosis History</button>
            </Link>
            <Link className='mb-10' to='/PetSymptoms'>
            <button className='btn btn-secondary'>New Diagnosis</button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default PetOption;
