import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import dogIcon from '../images/dog422.jpg';

const PetOption = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <BackButton />
      <div className='flex grow flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
<<<<<<< HEAD
          <p className='text-5xl font-bold text-[#ca9973] mt-20'>Charlie</p>
        </div>

        <img src= {dogIcon} alt="dog icon" className='w-40 h-auto rounded-full shadow-lg '/>
        <p className='mt-2 text-red-500 font-bold'>Edit Pet information</p>

        <div className='flex flex-col mb-95 mt-7'>
          <div className='flex flex-col hero-content mt-10'>
=======
          <p className='text-5xl font-bold text-[#ca9973]'>Pet Option</p>
        </div>
        <div className='flex flex-col'>
          <div className='hero-content mt-10 flex flex-col'>
>>>>>>> e9092ccd9052d3a83920af6cd6b4fc0c5c7457fb
            <Link to='/PetHistory'>
              <button className='btn btn-accent btn-circle w-40'>View Diagnosis History</button>
            </Link>
            <Link to='/PetSymptoms'>
              <button className='btn btn-secondary btn-circle w-40'>New Diagnosis</button>
            </Link>
            <button className='btn btn-error btn-circle w-40'>Remove Pet</button>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default PetOption;
