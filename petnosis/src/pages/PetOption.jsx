import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import dogIcon from '../images/dog422.jpg';
import catIcon from '../images/cat422.jpg';

const PetOption = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pet, pets } = location.state || {};

  const handleRemove = () => {
    const updatedPets = pets.filter((p) => p.name !== pet.name);

    const dogs = updatedPets.filter((p) => p.type === 'dog');
    const cats = updatedPets.filter((p) => p.type === 'cat');
    sessionStorage.setItem('dogs', JSON.stringify(dogs));
    sessionStorage.setItem('cats', JSON.stringify(cats));

    navigate('/SelectPet');
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <BackButton />
      <div className='flex grow flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>{pet?.name}</p>
        </div>

        <img
          src={pet.type === 'dog' ? dogIcon : catIcon}
          alt={pet.type}
          className='h-auto w-40 rounded-full shadow-lg'
        />
        <p className='mt-2 font-bold text-red-500'>Edit Pet information</p>

        <div className='flex flex-col'>
          <div className='hero-content mt-10 flex flex-col'>
            <Link to='/PetHistory'>
              <button className='btn btn-accent btn-circle w-40'>View Diagnosis History</button>
            </Link>
            <Link to='/PetSymptoms'>
              <button className='btn btn-secondary btn-circle w-40'>New Diagnosis</button>
            </Link>
            <button className='btn btn-error btn-circle w-40' onClick={handleRemove}>
              Remove Pet
            </button>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default PetOption;
