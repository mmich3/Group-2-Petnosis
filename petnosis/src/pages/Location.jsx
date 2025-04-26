import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Location = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex grow flex-col items-center justify-center'>
        <div className='hero-content'>
          <p className='mb-5 text-5xl font-bold text-[#ca9973]'>Location</p>
        </div>
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

export default Location;
