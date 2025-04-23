import React from 'react';
import { Link } from 'react-router-dom';

const AddPet = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen flex-col items-center justify-around'>
        <div className='hero-content'>
          <p className='mt-35 text-5xl font-bold text-[#ca9973]'>What Type of Pet?</p>
        </div>

        <div className ='mt-20 flex flex-col items-center space-y-4'>
          <div>
            <Link className='mb-10' to='/add-cat'>
              <button className='btn btn-accent h-15 w-25 text-xl font-bold'>Cat</button>
            </Link>
            
          
          </div>
          <div className='mt-10 mb-100 '>
            
            <Link className='mb-15' to='/add-dog'>
              <button className='btn btn-secondary h-15 w-25 text-xl font-bold'>Dog</button>
            </Link>
            
            
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default AddPet;