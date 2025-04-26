import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';

const Results = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <BackButton />
      <div className='flex grow flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Results</p>
        </div>
        <div className='hero'>
          <div className='hero-content'>
            <Link to='/'>
              <button className='btn btn-secondary'>To Home</button>
            </Link>
            <Link to='/Location'>
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
