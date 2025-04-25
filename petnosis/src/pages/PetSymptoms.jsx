import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaChevronLeft } from 'react-icons/fa';
import BackButton from '../components/BackButton';
import Search from '../components/Search';
import Voice from '../components/Voice';

const PetSymptoms = () => {
  return (
    <div className='min-h-screen'>
      <BackButton />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Pet's Symptoms</p>
        </div>
        <input
                type='text'
                className='pl-10 input input-bordered w-90 ml-4 rounded-full'
                placeholder='Search symptoms...'
                onChange={(e) => setName(e.target.value)}
            />
        <div style={{marginRight: 320, position: 'relative', top: -40}}>
            <Search />
            <Voice />
        </div>

        <p style={{color: '#878787', padding: 10}}>Check all that apply</p>
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'flex-start'}}>
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <input style={{height: 50, width: 50}} type="checkbox" />
                <b style={{fontSize: 30, color: '#4B7A82', paddingLeft: 10, paddingTop: 3}}>Limping</b>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <input style={{height: 50, width: 50}} type="checkbox" />
                <b style={{fontSize: 30, color: '#4B7A82', paddingLeft: 10, paddingTop: 3}}>Diarrhea</b>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <input style={{height: 50, width: 50}} type="checkbox" />
                <b style={{fontSize: 30, color: '#4B7A82', paddingLeft: 10, paddingTop: 3}}>Coughing</b>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <input style={{height: 50, width: 50}} type="checkbox" />
                <b style={{fontSize: 30, color: '#4B7A82', paddingLeft: 10, paddingTop: 3}}>Loss of appetite</b>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <input style={{height: 50, width: 50}} type="checkbox" />
                <b style={{fontSize: 30, color: '#4B7A82', paddingLeft: 10, paddingTop: 3}}>Other</b>
            </div>
        </div>
        <div className='hero' style={{justifyContent: 'right'}}>
          <div className='hero-content mt-10'>
            <Link to='/AdditionalSymptoms'>
              <button className='btn btn-accent'>Next</button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default PetSymptoms;
