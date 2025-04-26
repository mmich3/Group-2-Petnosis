import React from 'react';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';

const PetHistory = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <BackButton />
      <div className='flex grow flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Pet's History</p>
        </div>

        <p className='hero-content'>Petnosis History</p>
        <p>Allergic Dermatitis - 10/12/2024</p>
        <p>Mild Arthritis - 6/5/2024</p>
        <p>Kennel Cough - 10/10/2024</p>
      </div>
      <Navbar />
    </div>
  );
};

export default PetHistory;
