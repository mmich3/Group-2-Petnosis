import React from 'react';
import { FaPlus, FaPaw, FaDog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav className='fixed bottom-0 left-0 w-full z-50 flex justify-between bg-[#8fe3ff] shadow-md'>
      <Link className='btn btn-lg btn-success m-0.5 flex-1 text-white' to='/SelectPet'>
        <FaPlus />
        Diagnosis
      </Link>
      <Link className='btn btn-lg btn-info m-0.5 flex-1 text-white' to='/Location'>
        <FaPaw />
        Vet
      </Link>
      <Link className='btn btn-lg btn-error m-0.5 flex-1 text-white' to='/AddPet'>
        <FaDog />
        Add Pet
      </Link>
    </nav>
  );
};

export default Navbar;
