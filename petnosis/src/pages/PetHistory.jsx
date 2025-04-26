import React from 'react';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import dogIcon from '../images/dog422.jpg';

const PetHistory = () => {
  return (
    <div className='min-h-screen'>
      <BackButton />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973] mt-20'>Charlie's History</p>
        </div>

        <img src= {dogIcon} alt="dog icon" className='w-40 h-auto rounded-full shadow-lg '/>
        <p className='mt-2 text-red-500 font-bold'>Edit Pet information</p>
        
        <p style={{fontSize: 25, marginTop: 20, color: 'green'}}>Petnosis History</p>
        <div style={{ borderTop: '3px solid green', width: 300, height:35 }}></div>
        <p style={{padding: 20, color:'#46A3FF', fontSize: 20, fontWeight: 'bold',}}>Allergic Dermatitis - 10/12/2024</p>
        <p style={{padding: 20, color:'#46A3FF', fontSize: 20, fontWeight: 'bold'}}>Mild Arthritis - 6/5/2024</p>
        <p style={{padding: 20, color:'#46A3FF', fontSize: 20, fontWeight: 'bold'}}>Kennel Cough - 10/10/2024</p>
        <div style={{height:200}}></div>
      </div>
      <Navbar />
    </div>
  );
};

export default PetHistory;
