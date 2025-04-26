import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';

const PetOption = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <BackButton />
      <div className='flex grow flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Pet Option</p>
        </div>
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
