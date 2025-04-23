import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Results = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen flex-col justify-center'>
        <div className='hero-content mb-5'>
          <p className='text-5xl font-bold text-[#ca9973]'>Results</p>
        </div>
        <div className='hero'>
          <div className='hero-content mt-10'>
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
