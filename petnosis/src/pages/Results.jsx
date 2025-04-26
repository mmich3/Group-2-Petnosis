import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaChevronLeft } from 'react-icons/fa';
import BackButton from '../components/BackButton';
import dogFracture from '../images/dogFracturedBone.jpg'
import cough from '../images/dogCough.jpg'

const Results = () => {
  return (
    <div className='min-h-screen'>
      <BackButton />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='flex flex-col mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Results</p>
          <p className='text-red-400 font-bold'> Closest Matches</p>
        </div>
        <div className="w-105 h-125 bg-green-400 rounded-lg shadow-md p-4">
          
        
          <div className='flex flex-col text-white'>
            <h1 className='font-bold text-2xl mb-2 text-blue-600'> Fractured Bone (98% match) </h1>
              <div className='flex flex-row'>
                <img src= {dogFracture} alt="broken bone" className="rounded-lg shadow-lg w-40 h-40"/>
                <p className='mt-2 ml-5'>A broken bone caused by trauma; symptoms include pain, swelling, limping. Requires rest, splinting, or surgery. Immediate veterinary care prevents complications.</p>
              </div>
              <p className='font-bold'>______________________________________________</p>

          </div>

          <div className='flex flex-col text-white mt-4'>
              <h1 className='font-bold text-2xl mb-2 text-blue-600'>Kennel Cough (62% match)</h1>
              <div className='flex flex-row'>
                <img src = {cough} alt="cough" className='rounded-lg shadow-lg w-40 h-40'/>
                <p className='mt-2 ml-5 text-grey-200'>Highly contagious respiratory infection; dry cough, sneezing, runny nose, lethargy. Spreads in close-contact areas. Treatable with rest, medication, and isolation.</p>
              </div>
              
          </div>

        </div>

        <div className='flex flex-col items-center'>
          
          <p className='mt-3 text-lg text-orange-500 font-bold'>
            Reccomended next steps
          </p>
            

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
