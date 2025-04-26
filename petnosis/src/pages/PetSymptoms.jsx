import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import Search from '../components/Search';

const PetSymptoms = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <BackButton />
      <div className='flex grow flex-col items-center justify-center'>
        <p className='mb-5 text-center text-5xl font-bold text-[#ca9973]'>Check all that apply</p>
        <div
          className='mb-13 h-120 w-100 rounded-lg p-4 shadow-md'
          style={{ backgroundColor: '#dcdcef' }}
        >
          <div className='flex w-full justify-center'>
            <Search />
          </div>

          <p className='p-2 opacity-50'>Check all that apply</p>

          <div className='flex flex-col'>
            {['Limping', 'Diarrhea', 'Coughing', 'Loss of appetite', 'Other'].map((symptom) => (
              <div key={symptom} className='flex items-center p-2'>
                <input type='checkbox' className='h-12 w-12' />
                <b className='pt-1 pl-3 text-2xl text-[#4B7A82]'>{symptom}</b>
              </div>
            ))}
          </div>
        </div>
        <Link to='/AdditionalSymptoms'>
          <button className='btn btn-accent'>Next</button>
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default PetSymptoms;
