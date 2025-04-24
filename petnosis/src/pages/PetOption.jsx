import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaChevronLeft } from 'react-icons/fa';
import BackButton from '../components/BackButton';

const PetOption = () => {
  return (
    <div className='min-h-screen'>
      <BackButton />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Pet Option</p>
        </div>
        <div className='hero'>
          <div className='hero-content mt-10'>
            <Link to='/PetHistory'>
              <button className='btn btn-accent'>View Diagnosis History</button>
            </Link>
            <Link to='/PetSymptoms'>
              <button className='btn btn-secondary'>New Diagnosis</button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default PetOption;
