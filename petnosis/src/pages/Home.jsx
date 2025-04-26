import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='min-h-screen'>
      <div className='hero'>
        <div className='flex min-h-screen flex-col items-center justify-evenly'>
          <h1 className='mb-5 text-center text-5xl font-bold text-[#ca9973]'>Welcome!</h1>
          <div className='flex w-50 flex-col'>
            <Link className='mb-10' to='/SelectPet'>
              <button className='btn btn-xl btn-success btn-wide btn-circle text-white'>
                Pet Diagnosis
              </button>
            </Link>
            <Link className='mb-10' to='/Location'>
              <button className='btn btn-xl btn-info btn-wide btn-circle text-white'>
                Find A Vet
              </button>
            </Link>
            <Link className='mb-10' to='/AddPet'>
              <button className='btn btn-xl btn-error btn-wide btn-circle text-white'>
                Add Pet
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
