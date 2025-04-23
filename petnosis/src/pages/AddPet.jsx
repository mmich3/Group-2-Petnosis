import React from 'react';
import Navbar from '../components/Navbar';

const AddPet = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col items-center justify-around'>
        <div className='hero-content text-center'>
          <p className='mt-35 text-5xl font-bold text-[#ca9973]'>What Type of Pet?</p>
        </div>
        <div className='hero'>
          <div className='hero-content flex'>
            <button className='btn btn-accent'>Cat</button>
            <button className='btn btn-secondary'>Dog</button>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default AddPet;
