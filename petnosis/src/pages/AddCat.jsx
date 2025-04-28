import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
import catIcon from '../images/cat422.jpg';
import BackButton from '../components/BackButton';

const catBreeds = [
  { value: 'abysinnian', label: 'Abyssinian' },
  { value: 'american_bobtail', label: 'American Bobtail' },
  { value: 'american_curl', label: 'American Curl' },
  { value: 'american_shorthair', label: 'American Shorthair' },
  { value: 'american_wirehair', label: 'American Wirehair' },
  { value: 'balinese', label: 'Balinese' },
  { value: 'bengal', label: 'Bengal' },
  { value: 'birman', label: 'Birman' },
  { value: 'bombay', label: 'Bombay' },
  { value: 'british_shorthair', label: 'British Shorthair' },
  { value: 'burmese', label: 'Burmese' },
  { value: 'burmilla', label: 'Burmilla' },
  { value: 'cornish_rex', label: 'Cornish Rex' },
  { value: 'devon_rex', label: 'Devon Rex' },
  { value: 'egyptian_maau', label: 'Egyptian Mau' },
  { value: 'exotic_shorthair', label: 'Exotic Shorthair' },
  { value: 'himalayan', label: 'Himalayan' },
  { value: 'japanese_bobtail', label: 'Japanese Bobtail' },
  { value: 'javanese', label: 'Javanese' },
  { value: 'khao_manee', label: 'Khao Manee' },
  { value: 'korat', label: 'Korat' },
  { value: 'maine_coon', label: 'Maine Coon' },
  { value: 'manx', label: 'Manx' },
  { value: 'norwegian_forest_cat', label: 'Norwegian Forest Cat' },
  { value: 'ocicat', label: 'Ocicat' },
  { value: 'oriental_shorthair', label: 'Oriental Shorthair' },
  { value: 'persian', label: 'Persian' },
  { value: 'ragdoll', label: 'Ragdoll' },
  { value: 'russian_blue', label: 'Russian Blue' },
  { value: 'savannah', label: 'Savannah' },
  { value: 'scottish_fold', label: 'Scottish Fold' },
  { value: 'selkirk_rex', label: 'Selkirk Rex' },
  { value: 'siamese', label: 'Siamese' },
  { value: 'singapura', label: 'Singapura' },
  { value: 'siberian', label: 'Siberian' },
  { value: 'snowshoe', label: 'Snowshoe' },
  { value: 'somali', label: 'Somali' },
  { value: 'sphynx', label: 'Sphynx' },
  { value: 'tonkinese', label: 'Tonkinese' },
  { value: 'turkish_angora', label: 'Turkish Angora' },
  { value: 'turkish_van', label: 'Turkish Van' },
];

const AddCat = () => {
  const [name, setName] = useState('');
  const [bday, setBday] = useState(null);
  const [breed, setBreed] = useState('');
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState(null);
  const [isNameFilled, setNameFilled] = useState(false);
  const [isBdayFilled, setBdayFilled] = useState(false);
  const [isBreedFilled, setBreedFilled] = useState(false);
  const [isSizeFilled, setSizeFilled] = useState(false);
  const [isWeightFilled, setWeightFilled] = useState(false);
  const [handleClicked, setHandleClicked] = useState(false);
  const navigate = useNavigate();

  const handle = () => {
    setHandleClicked(true);

    if (!name) {
      setNameFilled(false);
      return;
    } else {
      setNameFilled(true);
    }

    if (!bday) {
      setBdayFilled(false);
      return;
    } else {
      setBdayFilled(true);
    }

    if (!breed) {
      setBreedFilled(false);
      return;
    } else {
      setBreedFilled(true);
    }

    if (!size) {
      setSizeFilled(false);
      return;
    } else {
      setSizeFilled(true);
    }

    if (!weight) {
      setWeightFilled(false);
      return;
    } else {
      setWeightFilled(true);
    }

    const catData = JSON.parse(sessionStorage.getItem('cats')) || [];

    const cat = {
      name,
      birthday: bday ? bday.toISOString() : '',
      breed,
      size,
      catWeight: weight,
    };

    catData.push(cat);
    sessionStorage.setItem('cats', JSON.stringify(catData));

    navigate('/Home'); // Navigate only after successful save
  };

  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex grow flex-col items-center justify-center'>
        <BackButton />
        <div className='hero flex flex-col justify-center'>
          <p className='hero-content text-5xl font-bold text-[#ca9973]'>Enter Cat Info</p>
          <span className='flex justify-center'>
            <img src={catIcon} alt='cat' className='h-auto w-38 rounded-full shadow-lg' />
          </span>
          <span className='text-m mt-1 font-bold text-blue-500'>Edit</span>
        </div>

        <div className='grid w-max max-w-4xl grid-rows-4 gap-5'>
          <div className='grid grid-cols-2 gap-5'>
            {/* Name */}
            <div className='flex w-max flex-col'>
              <div className='flex flex-row'>
                <label className='mb-1 text-lg font-semibold text-red-500'>*&nbsp;</label>
                <label className='mb-1 text-lg font-semibold text-gray-700'>Name:</label>
              </div>
              <input
                type='text'
                className='input input-bordered w-40'
                value={name}
                placeholder='Ex: Luna'
                onChange={(e) => setName(e.target.value)}
              />
              {!isNameFilled && handleClicked && (
                <p className='mt-0.5 text-sm text-red-500'>Please enter a name.</p>
              )}
            </div>

            {/* Birthdate */}
            <div className='flex flex-col'>
              <div className='flex flex-row'>
                <label className='mb-1 text-lg font-semibold text-red-500'>*&nbsp;</label>
                <label className='mb-1 text-lg font-semibold text-gray-700'>Birth Date:</label>
              </div>
              <input
                type='date'
                value={bday ? bday.toISOString().split('T')[0] : ''}
                onChange={(e) => setBday(new Date(e.target.value))}
                placeholder='DD/MM/YYYY'
                className='input input-bordered w-40'
              />
              {!isBdayFilled && handleClicked && (
                <p className='mt-0.5 text-sm text-red-500'>Please enter a birth date</p>
              )}
            </div>
          </div>

          <div className='grid grid-cols-2 gap-5'>
            {/* Breed */}
            <div className='flex flex-col'>
              <div className='flex flex-row'>
                <label className='mb-1 text-lg font-semibold text-red-500'>*&nbsp;</label>
                <label className='mb-1 block text-lg font-semibold text-gray-700'>Breed:</label>
              </div>
              <select
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                className='select select-bordered w-40'
              >
                <option value='' disabled>
                  Select
                </option>
                {catBreeds.map((breedObj) => (
                  <option key={breedObj.value} value={breedObj.value}>
                    {breedObj.label}
                  </option>
                ))}
              </select>
              {!isBreedFilled && handleClicked && (
                <p className='text-sm text-red-500'>Please enter a breed</p>
              )}
            </div>

            {/* Size */}
            <div className='flex flex-col'>
              <div className='flex flex-row'>
                <label className='text-lg font-semibold text-red-500'>*&nbsp;</label>
                <label className='block text-lg font-semibold text-gray-700'>Size:</label>
              </div>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className='select select-bordered mr-4 w-40'
              >
                <option value='' disabled>
                  Select
                </option>
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
              </select>
              {!isSizeFilled && handleClicked && (
                <p className='text-sm text-red-500'>Please enter a cat size</p>
              )}
            </div>
          </div>

          {/* Weight */}
          <div className='flex justify-center'>
            <div className='flex flex-col'>
              <div className='flex flex-row'>
                <label className='text-lg font-semibold text-red-500'>*&nbsp;</label>
                <label className='block w-[110px] text-lg font-semibold text-gray-700'>
                  Weight (lbs):
                </label>
              </div>
              <input
                type='number'
                placeholder='Enter...'
                value={weight}
                min={0}
                onChange={(e) => setWeight(e.target.value)}
                className='input input-bordered w-40'
              />
              {!isWeightFilled && handleClicked && (
                <p className='text-sm text-red-500'>Please enter a weight</p>
              )}
            </div>
          </div>
          <div className='flex justify-center'>
            <button onClick={handle} className='btn btn-success w-50 text-white'>
              Save
            </button>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default AddCat;
