import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import Navbar from '../components/Navbar';
import dogIcon from '../images/dog422.jpg';

const dogBreeds = [
  { value: 'affenpinscher', label: 'Affenpinscher' },
  { value: 'afghan_hound', label: 'Afghan Hound' },
  { value: 'airedale_terrier', label: 'Airedale Terrier' },
  { value: 'akita', label: 'Akita' },
  { value: 'alaskan_malamute', label: 'Alaskan Malamute' },
  { value: 'american_bulldog', label: 'American Bulldog' },
  { value: 'american_eskimo_dog', label: 'American Eskimo Dog' },
  { value: 'american_foxhound', label: 'American Foxhound' },
  { value: 'american_staffordshire_terrier', label: 'American Staffordshire Terrier' },
  { value: 'australian_cattle_dog', label: 'Australian Cattle Dog' },
  { value: 'australian_shepherd', label: 'Australian Shepherd' },
  { value: 'australian_terrier', label: 'Australian Terrier' },
  { value: 'basenji', label: 'Basenji' },
  { value: 'basset_hound', label: 'Basset Hound' },
  { value: 'beagle', label: 'Beagle' },
  { value: 'bearded_collie', label: 'Bearded Collie' },
  { value: 'beauceron', label: 'Beauceron' },
  { value: 'bedlington_terrier', label: 'Bedlington Terrier' },
  { value: 'belgian_malinois', label: 'Belgian Malinois' },
  { value: 'belgian_sheepdog', label: 'Belgian Sheepdog' },
  { value: 'belgian_tervuren', label: 'Belgian Tervuren' },
  { value: 'bernese_mountain_dog', label: 'Bernese Mountain Dog' },
  { value: 'bichon_frise', label: 'Bichon Frise' },
  { value: 'black_and_tan_coonhound', label: 'Black and Tan Coonhound' },
  { value: 'black_russian_terrier', label: 'Black Russian Terrier' },
  { value: 'bloodhound', label: 'Bloodhound' },
  { value: 'border_collie', label: 'Border Collie' },
  { value: 'border_terrier', label: 'Border Terrier' },
  { value: 'borzoi', label: 'Borzoi' },
  { value: 'boston_terrier', label: 'Boston Terrier' },
  { value: 'bouvier_des_flandres', label: 'Bouvier des Flandres' },
  { value: 'boxer', label: 'Boxer' },
  { value: 'briard', label: 'Briard' },
  { value: 'brittany', label: 'Brittany' },
  { value: 'brussels_griffon', label: 'Brussels Griffon' },
  { value: 'bull_terrier', label: 'Bull Terrier' },
  { value: 'bulldog', label: 'Bulldog' },
  { value: 'bullmastiff', label: 'Bullmastiff' },
  { value: 'cairn_terrier', label: 'Cairn Terrier' },
  { value: 'canaan_dog', label: 'Canaan Dog' },
  { value: 'cane_corso', label: 'Cane Corso' },
  { value: 'cardigan_welsh_corgi', label: 'Cardigan Welsh Corgi' },
  { value: 'cavalier_king_charles_spaniel', label: 'Cavalier King Charles Spaniel' },
  { value: 'chesapeake_bay_retriever', label: 'Chesapeake Bay Retriever' },
  { value: 'chihuahua', label: 'Chihuahua' },
  { value: 'chinese_crested', label: 'Chinese Crested' },
  { value: 'chinese_shar_pei', label: 'Chinese Shar-Pei' },
  { value: 'chow_chow', label: 'Chow Chow' },
  { value: 'clumber_spaniel', label: 'Clumber Spaniel' },
  { value: 'cockapoo', label: 'Cockapoo' },
  { value: 'cocker_spaniel', label: 'Cocker Spaniel' },
  { value: 'collie', label: 'Collie' },
  { value: 'coonhound', label: 'Coonhound' },
  { value: 'corgi', label: 'Corgi' },
  { value: 'curly_coated_retriever', label: 'Curly-Coated Retriever' },
  { value: 'dachshund', label: 'Dachshund' },
  { value: 'dalmatian', label: 'Dalmatian' },
  { value: 'dandie_dinmont_terrier', label: 'Dandie Dinmont Terrier' },
  { value: 'doberman_pinscher', label: 'Doberman Pinscher' },
  { value: 'dogo_argentino', label: 'Dogo Argentino' },
  { value: 'dogue_de_bordeaux', label: 'Dogue de Bordeaux' },
  { value: 'english_bulldog', label: 'English Bulldog' },
  { value: 'english_cocker_spaniel', label: 'English Cocker Spaniel' },
  { value: 'english_setter', label: 'English Setter' },
  { value: 'english_springer_spaniel', label: 'English Springer Spaniel' },
  { value: 'english_toy_spaniel', label: 'English Toy Spaniel' },
  { value: 'eskimo_dog', label: 'Eskimo Dog' },
  { value: 'field_spaniel', label: 'Field Spaniel' },
  { value: 'finnish_spitz', label: 'Finnish Spitz' },
  { value: 'flat_coated_retriever', label: 'Flat-Coated Retriever' },
  { value: 'french_bulldog', label: 'French Bulldog' },
  { value: 'german_pinscher', label: 'German Pinscher' },
  { value: 'german_shepherd', label: 'German Shepherd' },
  { value: 'german_shorthaired_pointer', label: 'German Shorthaired Pointer' },
  { value: 'giant_schnauzer', label: 'Giant Schnauzer' },
  { value: 'glen_of_imaal_terrier', label: 'Glen of Imaal Terrier' },
  { value: 'goldador', label: 'Goldador' },
  { value: 'golden_retriever', label: 'Golden Retriever' },
  { value: 'goldendoodle', label: 'Goldendoodle' },
  { value: 'gordon_setter', label: 'Gordon Setter' },
  { value: 'great_dane', label: 'Great Dane' },
  { value: 'great_pyrenees', label: 'Great Pyrenees' },
  { value: 'greater_swiss_mountain_dog', label: 'Greater Swiss Mountain Dog' },
  { value: 'greyhound', label: 'Greyhound' },
  { value: 'havanese', label: 'Havanese' },
  { value: 'husky', label: 'Husky' },
  { value: 'irish_setter', label: 'Irish Setter' },
  { value: 'irish_terrier', label: 'Irish Terrier' },
  { value: 'irish_wolfhound', label: 'Irish Wolfhound' },
  { value: 'italian_greyhound', label: 'Italian Greyhound' },
  { value: 'jack_russell_terrier', label: 'Jack Russell Terrier' },
  { value: 'japanese_chin', label: 'Japanese Chin' },
  { value: 'keeshond', label: 'Keeshond' },
  { value: 'kerry_blue_terrier', label: 'Kerry Blue Terrier' },
  { value: 'king_charles_spaniel', label: 'King Charles Spaniel' },
  { value: 'komondor', label: 'Komondor' },
  { value: 'kuvasz', label: 'Kuvasz' },
  { value: 'labrador_retriever', label: 'Labrador Retriever' },
  { value: 'labradoodle', label: 'Labradoodle' },
  { value: 'lakeland_terrier', label: 'Lakeland Terrier' },
  { value: 'lhasa_apso', label: 'Lhasa Apso' },
  { value: 'maltese', label: 'Maltese' },
  { value: 'mastiff', label: 'Mastiff' },
  { value: 'miniature_pinscher', label: 'Miniature Pinscher' },
  { value: 'miniature_poodle', label: 'Miniature Poodle' },
  { value: 'miniature_schnauzer', label: 'Miniature Schnauzer' },
  { value: 'mutt', label: 'Mutt / Mixed Breed' },
  { value: 'neapolitan_mastiff', label: 'Neapolitan Mastiff' },
  { value: 'newfoundland', label: 'Newfoundland' },
  { value: 'norfolk_terrier', label: 'Norfolk Terrier' },
  { value: 'norwegian_elkhound', label: 'Norwegian Elkhound' },
  { value: 'norwich_terrier', label: 'Norwich Terrier' },
  { value: 'nova_scotia_duck_tolling_retriever', label: 'Nova Scotia Duck Tolling Retriever' },
  { value: 'old_english_sheepdog', label: 'Old English Sheepdog' },
  { value: 'otterhound', label: 'Otterhound' },
  { value: 'papillon', label: 'Papillon' },
  { value: 'pekingese', label: 'Pekingese' },
  { value: 'pembroke_welsh_corgi', label: 'Pembroke Welsh Corgi' },
  { value: 'pit_bull', label: 'Pit Bull' },
  { value: 'pointer', label: 'Pointer' },
  { value: 'pomeranian', label: 'Pomeranian' },
  { value: 'poodle', label: 'Poodle' },
  { value: 'portuguese_water_dog', label: 'Portuguese Water Dog' },
  { value: 'pug', label: 'Pug' },
  { value: 'puli', label: 'Puli' },
  { value: 'rat_terrier', label: 'Rat Terrier' },
  { value: 'redbone_coonhound', label: 'Redbone Coonhound' },
  { value: 'rhodesian_ridgeback', label: 'Rhodesian Ridgeback' },
  { value: 'rottweiler', label: 'Rottweiler' },
  { value: 'saint_bernard', label: 'Saint Bernard' },
  { value: 'saluki', label: 'Saluki' },
  { value: 'samoyed', label: 'Samoyed' },
  { value: 'schipperke', label: 'Schipperke' },
  { value: 'scottish_terrier', label: 'Scottish Terrier' },
  { value: 'sealyham_terrier', label: 'Sealyham Terrier' },
  { value: 'shetland_sheepdog', label: 'Shetland Sheepdog' },
  { value: 'shiba_inu', label: 'Shiba Inu' },
  { value: 'shih_tzu', label: 'Shih Tzu' },
  { value: 'siberian_husky', label: 'Siberian Husky' },
  { value: 'silky_terrier', label: 'Silky Terrier' },
  { value: 'skye_terrier', label: 'Skye Terrier' },
  { value: 'soft_coated_wheaten_terrier', label: 'Soft Coated Wheaten Terrier' },
  { value: 'staffordshire_bull_terrier', label: 'Staffordshire Bull Terrier' },
  { value: 'standard_poodle', label: 'Standard Poodle' },
  { value: 'standard_schnauzer', label: 'Standard Schnauzer' },
  { value: 'sussex_spaniel', label: 'Sussex Spaniel' },
  { value: 'tibetan_mastiff', label: 'Tibetan Mastiff' },
  { value: 'tibetan_spaniel', label: 'Tibetan Spaniel' },
  { value: 'vizsla', label: 'Vizsla' },
  { value: 'weimaraner', label: 'Weimaraner' },
  { value: 'welsh_springer_spaniel', label: 'Welsh Springer Spaniel' },
  { value: 'west_highland_white_terrier', label: 'West Highland White Terrier' },
  { value: 'whippet', label: 'Whippet' },
  { value: 'wirehaired_pointing_griffon', label: 'Wirehaired Pointing Griffon' },
  { value: 'yorkshire_terrier', label: 'Yorkshire Terrier' },
];

const AddDog = () => {
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

    const dogData = JSON.parse(localStorage.getItem('dogs')) || [];

    const dog = {
      name,
      birthday: bday ? bday.toISOString() : '',
      breed,
      size,
      dogWeight: weight,
    };

    dogData.push(dog);
    localStorage.setItem('dogs', JSON.stringify(dogData));
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-between'>
      <BackButton />
      <span className='mt-5 flex items-center'>
        <p className='text-5xl font-bold text-[#ca9973]'>Enter Dog Info</p>
      </span>

      <div className='flex flex-col items-center'>
        <span className='flex items-center justify-center'>
          <img src={dogIcon} alt='cat' className='h-auto w-38 rounded-full shadow-lg' />
        </span>
        <span className='text-m mt-1 font-bold text-blue-500'>Edit</span>
      </div>

      <div className='grid w-max max-w-4xl grid-rows-3 gap-5'>
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
              {dogBreeds.map((breedObj) => (
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
      </div>
      <div>
        <button onClick={handle} className='btn btn-success text-white'>
          Save
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default AddDog;
