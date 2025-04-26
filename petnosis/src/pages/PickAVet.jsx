import React from 'react';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import '../index.css';
import BackButton from '../components/BackButton';

const PickAVet = () => {
  return (
    <div className='flex min-h-screen flex-col bg-white'>
      <BackButton />
      <div className='mx-auto px-4 py-6'>
        <h1 className='my-4 text-center text-2xl font-bold text-[#ca9973]'>Explore Nearby Vets</h1>

        <div className='w-[80vw] overflow-hidden rounded-2xl bg-white shadow-lg'>
          <Map height='80vh' width='100%' />
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default PickAVet;
