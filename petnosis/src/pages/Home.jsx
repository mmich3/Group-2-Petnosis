import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='min-h-screen'>
      <div className='hero'>
        <div className='flex min-h-screen flex-col items-center justify-around'>
          <h1 className='mb-5 text-center text-5xl font-bold text-[#ca9973]'>Welcome!</h1>
          <div className='flex flex-col'>
            <Link className='mb-10' to='/SelectPet'>
              <button className='btn btn-success btn-wide'>Pet Diagnosis</button>
            </Link>
            <Link className='mb-10' to='/Location'>
              <button className='btn btn-info btn-wide'>Find A Vet</button>
            </Link>
            <Link className='mb-10' to='/AddPet'>
              <button className='btn btn-error btn-wide'>Add Pet</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
