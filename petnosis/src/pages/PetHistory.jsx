import React from 'react';
import Navbar from './Navbar'

const PetHistory = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen flex-col justify-around'>
        <div className='hero-content'>
          <p className='mb-5 text-5xl font-bold text-[#ca9973]'>Pet's History</p>
        </div>
        <div className='hero'>
          <div className='hero-content flex'>
            <button className='btn btn-accent'>null</button>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default PetHistory;
