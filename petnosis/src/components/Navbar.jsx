import React from 'react';
import { FaPlus, FaPaw, FaDog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='absolute bottom-0 z-10 flex h-[-5] w-full justify-between bg-[#8fe3ff] shadow-md'>
      <Link className='btn btn-lg btn-info flex-1 text-white m-0.5' to='#'>
        <FaPlus />
        Diagnosis
      </Link>
      <Link className='btn btn-lg btn-info flex-1 text-white m-0.5' to='#'>
        <FaPaw />
        Vet
      </Link>
      <Link className='btn btn-lg btn-info flex-1 text-white m-0.5' to='#'>
        <FaDog />
        Add Pet
      </Link>
    </nav>
  );
};

export default Navbar;
