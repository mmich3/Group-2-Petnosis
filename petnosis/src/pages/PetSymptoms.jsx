import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaChevronLeft } from 'react-icons/fa';
import BackButton from '../components/BackButton';
import Search from '../components/Search';
import Voice from '../components/Voice';

const PetSymptoms = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <BackButton />

<<<<<<< HEAD
        <p style={{color: 'red', padding: 10}}>Check all that apply</p>
        <div className="w-100 h-120 rounded-lg shadow-md p-4 mb-13" style={{backgroundColor: '#dcdcef'}}>
=======
      <div className='flex grow flex-col items-center justify-around'>
        <div className='flex flex-col items-center justify-center'>
          <div className='hero-content mb-5 text-center'>
            <p className='text-5xl font-bold text-[#ca9973]'>Pet's Symptoms</p>
          </div>
>>>>>>> e9092ccd9052d3a83920af6cd6b4fc0c5c7457fb

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
