import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Select from 'react-select';

const LocationInfo = () => {
  return (
    <div className='min-h-screen'>

      <div className='flex min-h-screen flex-col items-center justify-center'>

        <div className='hero-content'>
        <div className='flex items-center justify-center gap-8'>
          <div>
            <label className='mb-2 block w-[200px] text-lg font-semibold '>
              Street Address:
            </label>
            <input
              type='text'
              className='input input-bordered w-full max-w-xs text-white'
              placeholder='Ex: John'

            />
            <label className='mb-2 block w-[200px] text-lg font-semibold '>
              City:
            </label>
            <input
              type='text'
              className='input input-bordered w-full max-w-xs'
              placeholder='Ex: John'

            />
            <label className='mb-2 block w-[200px] text-lg font-semibold '>
              State:
            </label>
            <input
              type='text'
              className='input input-bordered w-full max-w-xs'
              placeholder='Ex: John'

            />

<label className='mb-2 block w-[200px] text-lg font-semibold '>
              ZipCode:
            </label>
            <input
              type='text'
              className='input input-bordered w-full max-w-xs'
              placeholder='Ex: John'

            />
          </div>

          
        </div>
        </div>
        <div>
          <div className='hero-content mt-10'>
            <Link to='/PickAVet'>
              <button className='btn btn-secondary'>Next</button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default LocationInfo;
