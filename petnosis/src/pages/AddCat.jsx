import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import Navbar from '../components/Navbar';
import catIcon from '../images/cat422.jpg'
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
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [bday, setBday] = useState(null);
    const [breed, setBreed] = useState('');
    const [size, setSize] = useState(null);
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
  
      const catData = JSON.parse(localStorage.getItem('cats')) || [];
  
      const cat = {
        name,
        birthday: bday ? bday.toISOString() : '',
        breed,
        size,
        catWeight: weight,
      };
  
      catData.push(cat);
      localStorage.setItem('cats', JSON.stringify(catData));
  
      
  
    };
  
    return (
      <div className='min-h-screen'>
        <BackButton />
        <div className='flex flex-col items-center space-y-4 py-20'>
          <div className='flex items-center justify-center'>
            <p className='mb-5 text-5xl font-bold text-[#ca9973]'>Enter Cat Info</p>
          </div>

          <div className='flex items-center justify-center gap-8'>
            <img src= {catIcon} alt="cat" className="rounded-full shadow-lg w-38 h-auto"/>
        
          </div>

          <div className="text-blue-500 text-m font-bold">
                Edit
            </div>

          <div className='flex items-center justify-center gap-8'>
          </div>
  
          <div className='flex items-center justify-center gap-8'>
            <div>
              <div className='flex flex-row'>
                      <label className="text-lg font-semibold mb-2 text-red-500 ml-4">*&nbsp;</label>
                      <label className="block w-[110px] text-lg font-semibold mb-2 text-gray-700 ">Name:</label>
                  </div>
              <input
                type='text'
                className='input input-bordered w-40 ml-4'
                value={name}
                placeholder='Ex: Luna'
                onChange={(e) => setName(e.target.value)}
              />
  
              {!isNameFilled && handleClicked && (
                  <p className="text-red-500 text-sm ml-4">
                  Please enter a name.
                  </p>
              )}
  
            </div>
  
            <div>
              <div className='flex flex-row'>
                      <label className="text-lg font-semibold mb-2 text-red-500">*&nbsp;</label>
                      <label className="block w-[110px] text-lg font-semibold mb-2 text-gray-700">Birth Date:</label>
              </div>
              <DatePicker
                popperClassName='my-datepicker'
                selected={bday}
                onChange={(e) => setBday(e)}
                dateFormat='dd/MM/yyyy'
                placeholderText='DD/MM/YYYY'
                showMonthDropdown
                showYearDropdown
                dropdownMode='select'
                className="input input-bordered w-40 mr-4"
              />
              
              {!isBdayFilled && handleClicked && (
                  <p className="text-red-500 text-sm">
                  Please enter a birth date
                  </p>
              )} 
  
            </div>
          </div>
  
          <div className='flex items-center justify-center gap-8'>
            <div>
              <div className='flex flex-row'>
                      <label className="text-lg font-semibold mb-2 text-red-500 ml-4">*&nbsp;</label>
                      <label className=" block w-[110px] text-lg font-semibold mb-2 text-gray-700">Breed:</label>
              </div>
              <Select
                options={catBreeds}
                value={catBreeds.find((breedObj) => breedObj.value === breed)}
                onChange={(e) => setBreed(e.value)}
                placeholder='Select'
                className="input-bordered  w-40 ml-4"
              />
              {!isBreedFilled && handleClicked && (
                      <p className="text-red-500 text-sm ml-4">
                      Please enter a breed
                      </p>
                  )} 
            </div>
  
            <div>
              <div className='flex flex-row'>
                      <label className="text-lg font-semibold mb-2 text-red-500">*&nbsp;</label>
                      <label className="block text-lg font-semibold mb-2 text-gray-700">Size:</label>
              </div>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="input input-bordered w-40 mr-4"
              >
                <option value=''>Select</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
              </select>
  
              {!isSizeFilled && handleClicked && (
                  <p className="text-red-500 text-sm">
                  Please enter a cat size
                  </p>
              )}   
            </div>
          </div>
  
          <div className='mb-8 flex items-center justify-center gap-8'>
            <div>
            <div className='flex flex-row'>
                      <label className="text-lg font-semibold mb-2 text-red-500">*&nbsp;</label>
                      <label className="block w-[110px] text-lg font-semibold mb-2 text-gray-700">Weight (lbs):</label>
                  </div>
                  <input
                      type='number'
                      placeholder='Enter...'
                      value={weight}
                      min={0}
                      onChange={(e) => setWeight(e.target.value)}
                      className="input input-bordered w-40"
                  />
              {!isWeightFilled && handleClicked && (
                  <p className="text-red-500 text-sm">
                  Please enter a weight
                  </p>
              )} 
            </div>
          </div>
  
          <div>
            <button onClick={handle} className='btn btn-success text-white'>
              Save
            </button>
          </div>
        </div>
        <Navbar />
      </div>
    );
  };
  
  export default AddCat;
  