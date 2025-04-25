import React from 'react';
import Navbar from '../components/Navbar';
import Map from './Map';
import '../index.css';
import BackButton from '../components/BackButton';

const PickAVet = () => {
  return (
    <div className='relative min-h-screen'>
      <BackButton />
      <div className='flex min-h-screen flex-col items-center justify-start pt-10'>
        
        <Map height="80vh" width="100%"/>
        <div className='hero'>
          <div className='hero-content mt-10'>
            
          </div>
        </div>
      </div>
      <Navbar />
    </div>

    

    
  );
};

export default PickAVet;
