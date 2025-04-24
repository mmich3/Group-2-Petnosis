import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import Map from "./Map";
import '../index.css'

const LocationMap = () => {
  return (
    <div className='min-h-screen relative'>
      <div className='flex min-h-screen flex-col justify-start items-center pt-10'>
        <div className='hero-content text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Location</p>
        </div>
        <Map />
        <div className='hero'>
          <div className='hero-content flex'>
            <Link className='mb-10' to='/PickAVet'>
              <button className='btn btn-secondary'>Next</button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default LocationMap;
