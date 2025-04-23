import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'

const PetSymptoms = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen flex-col justify-around'>
        <div className='hero-content'>
          <p className='mb-5 text-5xl font-bold text-[#ca9973]'>Pet's Symptoms</p>
        </div>
        <div className='hero'>
          <div className='hero-content flex'>
            <Link className='mb-10' to='/AdditionalSymptoms'>
            <button className='btn btn-accent'>Next</button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default PetSymptoms;
