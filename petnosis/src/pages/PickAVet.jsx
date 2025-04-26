import React from 'react';
import Navbar from '../components/Navbar';
import Map from './Map';
import '../index.css';
import BackButton from '../components/BackButton';

const PickAVet = () => {
  return (
    
    <div className="relative min-h-screen bg-amber-100">
      <BackButton />
      <div className="max-w-6xl mx-auto px-4 py-6">
        
        <h1 className="text-2xl font-bold text-center text-amber-800 my-6">
          Explore Nearby Vets
        </h1>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Map height="80vh" width="100%"/>
            </div>
          </div>


        

      <Navbar />
    </div>

    

    
  );
};

export default PickAVet;
