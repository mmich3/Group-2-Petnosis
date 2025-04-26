import React from 'react';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom';

const AddPet = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex grow flex-col items-center justify-center'>
        <BackButton />
        <div className='mb-15 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>What Type of Pet?</p>
        </div>
        <div className='flex w-40 flex-col'>
          <Link to='/AddCat'>
            <button className='btn btn-xl btn-accent btn-wide btn-circle mb-5'>Cat</button>
          </Link>
          <Link to='/AddDog'>
            <button className='btn btn-xl btn-secondary btn-wide btn-circle'>Dog</button>
          </Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default AddPet;
