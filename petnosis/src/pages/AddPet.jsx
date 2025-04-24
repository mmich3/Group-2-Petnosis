import React from 'react';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom';


const AddPet = () => {
  return (
    <div className='min-h-screen'>
      <BackButton />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>What Type of Pet?</p>
        </div>
        <div className='hero'>
          <div className='hero-content flex-col'>
            <Link to='/AddCat'>
              <button className='btn btn-xl btn-accent'>Cat</button>
            </Link>
            
            <Link to='/AddDog'>
              <button className='btn btn-xl btn-secondary'>Dog</button>
            </Link>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default AddPet;
