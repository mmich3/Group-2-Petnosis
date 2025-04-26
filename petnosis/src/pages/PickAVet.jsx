import React from 'react';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import '../index.css';
import BackButton from '../components/BackButton';

const PickAVet = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <BackButton />
      <div className='flex grow flex-col items-center justify-center'>
        <Map />
        <div className='hero'>
          <div className='hero-content'></div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default PickAVet;
