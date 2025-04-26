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
          <p className='mt-20 text-5xl font-bold text-[#ca9973]'>Charlie</p>
        </div>

        <img src={dogIcon} alt='dog icon' className='h-auto w-40 rounded-full shadow-lg' />
        <p className='mt-2 font-bold text-red-500'>Edit Pet information</p>

        <div className='flex flex-col'>
          <div className='hero-content mt-10 flex flex-col'>
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
