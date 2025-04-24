import React from 'react';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';

const PetHistory = () => {
  return (
    <div className='min-h-screen'>
      <BackButton />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Pet's History</p>
        </div>
        <div className='hero'>
          <div className='hero-content mt-10'>
            <button className='btn btn-accent'>null</button>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default PetHistory;
