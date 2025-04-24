import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Map from './Map';
import '../index.css';
import BackButton from '../components/BackButton';

const LocationMap = () => {
  return (
    <div className='relative min-h-screen'>
      <BackButton />
      <div className='flex min-h-screen flex-col items-center justify-start pt-10'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Location</p>
        </div>
        <Map />
        <div className='hero'>
          <div className='hero-content mt-10'>
            <Link to='/PickAVet'>
              <button className='btn btn-secondary'>Next</button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default LocationMap;
