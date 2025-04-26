import React from 'react';
import { FaPlus, FaPaw, FaDog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bottom-0 z-10 mt-2 flex w-full justify-between bg-[#8fe3ff] shadow-md'>
      <Link className='btn btn-lg btn-success m-0.5 flex-1 text-white' to='/PetSymptoms'>
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
