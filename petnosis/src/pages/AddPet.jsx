import React from 'react';
import Navbar from '../components/Navbar';

const AddPet = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='hero-content mb-5'>
          <p className='text-5xl font-bold text-[#ca9973]'>What Type of Pet?</p>
        </div>
        <div className='hero'>
          <div className='hero-content flex-col'>
            <button className='btn btn-xl  btn-accent'>Cat</button>
            <button className='btn btn-xl btn-secondary'>Dog</button>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default AddPet;
