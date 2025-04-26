import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import dogFracture from '../images/dogFracturedBone.jpg';
import cough from '../images/dogCough.jpg';

const Results = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <BackButton />
      <div className='flex grow flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Results</p>
          <p className='font-bold text-red-400'> Closest Matches</p>
        </div>
        <div className='h-125 w-105 rounded-lg bg-green-400 p-4 shadow-md'>
          <div className='flex flex-col text-white'>
            <h1 className='mb-2 text-2xl font-bold text-blue-600'> Fractured Bone (98% match) </h1>
            <div className='flex flex-row'>
              <img src={dogFracture} alt='broken bone' className='h-40 w-40 rounded-lg shadow-lg' />
              <p className='mt-2 ml-5'>
                A broken bone caused by trauma; symptoms include pain, swelling, limping. Requires
                rest, splinting, or surgery. Immediate veterinary care prevents complications.
              </p>
            </div>
            <p className='font-bold'>______________________________________________</p>
          </div>

          <div className='mt-4 flex flex-col text-white'>
            <h1 className='mb-2 text-2xl font-bold text-blue-600'>Kennel Cough (62% match)</h1>
            <div className='flex flex-row'>
              <img src={cough} alt='cough' className='h-40 w-40 rounded-lg shadow-lg' />
              <p className='text-grey-200 mt-2 ml-5'>
                Highly contagious respiratory infection; dry cough, sneezing, runny nose, lethargy.
                Spreads in close-contact areas. Treatable with rest, medication, and isolation.
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <p className='mt-3 text-lg font-bold text-orange-500'>Reccomended next steps</p>
          <div className='hero-content'>
            <Link to='/'>
              <button className='btn btn-secondary'>To Home</button>
            </Link>
            <Link to='/Location'>
              <button className='btn btn-accent text-white'>Find Vet</button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Results;
