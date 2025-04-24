import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Vet = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='hero-content mb-5'>
          <p className='text-5xl font-bold text-[#ca9973]'>Linda's Vet</p>
        </div>
        <div className='hero'>
          <div className='hero-content mt-10'>
            <Link>
              <button className='btn btn-secondary'>null</button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Vet;
