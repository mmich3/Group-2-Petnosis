import React from 'react';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';

const PetHistory = () => {
  return (
    <div className='min-h-screen'>
      <BackButton />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Pet's History</p>
        </div>

        <p style={{fontSize: 30}}>Petnosis History</p>
        <div style={{ borderTop: '2px solid black', width: 300, height:35 }}></div>
        <p style={{padding: 20}}>Allergic Dermatitis - 10/12/2024</p>
        <p style={{padding: 20}}>Mild Arthritis - 6/5/2024</p>
        <p style={{padding: 20}}>Kennel Cough - 10/10/2024</p>
        <div style={{height:200}}></div>
      </div>
      <Navbar />
    </div>
  );
};

export default PetHistory;
