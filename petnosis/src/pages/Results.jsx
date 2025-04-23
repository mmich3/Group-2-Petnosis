import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

const Results = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen flex-col justify-around'>
        <div className='hero-content'>
          <p className='mb-5 text-5xl font-bold text-[#ca9973]'>Results</p>
        </div>
        <div className='hero'>
          <div className='hero-content flex'>
            <Link className='mb-10' to='/'>
            <button className='btn btn-secondary'>To Home</button>
            </Link>
            <Link className='mb-10' to='/Location'>
            <button className='btn btn-accent'>Find Vet</button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Results;
