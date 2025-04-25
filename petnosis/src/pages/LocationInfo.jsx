import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Map from './Map';
import BackButton from '../components/BackButton';

const LocationInfo = () => {
  return (
    // <div className="flex flex-col min-h-screen">
    //   {/* Main content area - grows to fill space */}
    //   <div className="flex-grow flex items-center justify-center px-4">
    //     <div className="flex flex-row items-start gap-12">
    //       {/* Form Card */}
    //       <div className="card w-full max-w-md bg-amber-100  shadow-xl">
    //         <form
    //           className="card-body"
    //           onSubmit={(e) => {
    //             e.preventDefault();
    //             window.location.href = '/PickAVet';
    //           }}
    //         >
    //           <h2 className="card-title text-center text-2xl mb-4">Enter Your Address</h2>

    //           <label className="label">
    //             <span className="label-text font-semibold text-black">Street Address</span>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="1234 Main St"
    //             className="input input-bordered bg-white w-full"
    //             required
    //           />

    //           <label className="label">
    //             <span className="label-text font-semibold text-black">City</span>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Chicago"
    //             className="input input-bordered bg-white w-full"
    //             required
    //           />

    //           <label className="label">
    //             <span className="label-text font-semibold text-black">State</span>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="IL"
    //             className="input input-bordered bg-white w-full"
    //             required
    //           />

    //           <label className="label">
    //             <span className="label-text font-semibold text-black">Zip Code</span>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="60607"
    //             className="input input-bordered bg-white w-full"
    //             required
    //           />

    //           <div className="mt-6">
    //             <button type="submit" className="btn btn-primary w-full">Next</button>
    //           </div>
    //         </form>
    //       </div>

    //         <div className='card p-4 bg-success'>
    //           <Map height="400px" width="50vw"/>
    //         </div>
            

    //     </div>
    //   </div>

    //   {/* Navbar fixed at the bottom */}
    //   <div className="w-full">
    //     <Navbar />
    //   </div>
    // </div>

    <div className='relative min-h-screen flex flex-col justify-between'>
  <BackButton />

  <div className='flex flex-col items-center justify-start gap-6 pt-6 px-4'>
    {/* Compact Form Card */}
    <div className='card w-full max-w-sm bg-amber-100 shadow-md'>
      <form
        className='card-body p-4'
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = '/PickAVet';
        }}
      >
        <h2 className='card-title text-center text-xl mb-3'>Enter Your Address</h2>

        <label className='label'>
          <span className='label-text text-sm font-semibold text-black'>Street</span>
        </label>
        <input
          type='text'
          placeholder='1234 Main St'
          className='input input-sm input-bordered bg-white w-full'
          required
        />

        <label className='label mt-2'>
          <span className='label-text text-sm font-semibold text-black'>City</span>
        </label>
        <input
          type='text'
          placeholder='Chicago'
          className='input input-sm input-bordered bg-white w-full'
          required
        />

        <div className='flex gap-2 mt-2'>
          <div className='flex-1'>
            <label className='label'>
              <span className='label-text text-sm font-semibold text-black'>State</span>
            </label>
            <input
              type='text'
              placeholder='IL'
              className='input input-sm input-bordered bg-white w-full'
              required
            />
          </div>

          <div className='flex-1'>
            <label className='label'>
              <span className='label-text text-sm font-semibold text-black'>Zip</span>
            </label>
            <input
              type='text'
              placeholder='60607'
              className='input input-sm input-bordered bg-white w-full'
              required
            />
          </div>
        </div>

        <div className='mt-4'>
          <button type='submit' className='btn btn-sm btn-primary w-full'>Next</button>
        </div>
      </form>
    </div>

    {/* Map Below Form */}
    <div className='card p-2 bg-success'>
      <Map height="30vh" width="90vw" />
    </div>
  </div>

  <Navbar />
</div>
  );
};

export default LocationInfo;