import React from 'react';
import Navbar from './Navbar';

const AddPet = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen flex-col items-center justify-around'>
        <div className='hero-content'>
          <p className='mt-35 text-5xl font-bold text-[#ca9973]'>What Type of Pet?</p>
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
