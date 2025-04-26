import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaChevronLeft } from 'react-icons/fa';
import BackButton from '../components/BackButton';
import Search from '../components/Search';
import Voice from '../components/Voice';

const PetSymptoms = () => {
  return (
    <div className='min-h-screen' style={{overflow: 'hidden'}}>
      <BackButton />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Pet's Symptoms</p>
        </div>
        <input
                type='text'
                className='pl-10 input input-bordered w-90 ml-4 rounded-full bg-gray-50'
                placeholder='Search symptoms...'
                onChange={(e) => setName(e.target.value)}
            />
            <div style={{marginRight: 320, position: 'relative', top: -40}}>
                <Search />
                <Voice />
            </div>

        <p style={{color: 'red', padding: 10}}>Check all that apply</p>
        <div className="w-100 h-120 rounded-lg shadow-md p-4 mb-13" style={{backgroundColor: '#dcdcef'}}>

        
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'flex-start'}}>
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <input style={{height: 30, width: 30, marginTop: 20,}} type="checkbox" />
                <b style={{marginTop: 20, fontSize: 20, color: '#096868', paddingLeft: 10, paddingTop: 3}}>Limping</b>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <input style={{height: 30, width: 30}} type="checkbox" />
                <b style={{fontSize: 20, color: '#096868', paddingLeft: 10, paddingTop: 3}}>Diarrhea</b>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <input style={{height: 30, width: 30}} type="checkbox" />
                <b style={{fontSize: 20, color: '#096868', paddingLeft: 10, paddingTop: 3}}>Coughing</b>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <input style={{height: 30, width: 30}} type="checkbox" />
                <b style={{fontSize: 20, color: '#096868', paddingLeft: 10, paddingTop: 3}}>Loss of appetite</b>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <input style={{height: 30, width: 30}} type="checkbox" />
                <b style={{fontSize: 20, color: '#096868', paddingLeft: 10, paddingTop: 3}}>Excessive Shedding</b>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <input style={{height: 30, width: 30}} type="checkbox" />
                <b style={{fontSize: 20, color: '#096868', paddingLeft: 10, paddingTop: 3}}>Drooling</b>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <input style={{height: 30, width: 30}} type="checkbox" />
                <b style={{fontSize: 20, color: '#096868', paddingLeft: 10, paddingTop: 3}}>Other</b>
            </div>
        </div>
        <div className='hero' style={{justifyContent: 'right'}}>
          <div className='hero-content '>
            <Link to='/AdditionalSymptoms'>
              <button className='btn btn-accent text-white text-lg'>Next</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
      <Navbar />
    </div>
  );
};

export default PetSymptoms;
