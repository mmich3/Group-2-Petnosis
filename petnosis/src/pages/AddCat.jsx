import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

const catBreeds = [
  { value: "abysinnian", label: "Abyssinian" },
  { value: "american_bobtail", label: "American Bobtail" },
  { value: "american_curl", label: "American Curl" },
  { value: "american_shorthair", label: "American Shorthair" },
  { value: "american_wirehair", label: "American Wirehair" },
  { value: "balinese", label: "Balinese" },
  { value: "bengal", label: "Bengal" },
  { value: "birman", label: "Birman" },
  { value: "bombay", label: "Bombay" },
  { value: "british_shorthair", label: "British Shorthair" },
  { value: "burmese", label: "Burmese" },
  { value: "burmilla", label: "Burmilla" },
  { value: "cornish_rex", label: "Cornish Rex" },
  { value: "devon_rex", label: "Devon Rex" },
  { value: "egyptian_maau", label: "Egyptian Mau" },
  { value: "exotic_shorthair", label: "Exotic Shorthair" },
  { value: "himalayan", label: "Himalayan" },
  { value: "japanese_bobtail", label: "Japanese Bobtail" },
  { value: "javanese", label: "Javanese" },
  { value: "khao_manee", label: "Khao Manee" },
  { value: "korat", label: "Korat" },
  { value: "maine_coon", label: "Maine Coon" },
  { value: "manx", label: "Manx" },
  { value: "norwegian_forest_cat", label: "Norwegian Forest Cat" },
  { value: "ocicat", label: "Ocicat" },
  { value: "oriental_shorthair", label: "Oriental Shorthair" },
  { value: "persian", label: "Persian" },
  { value: "ragdoll", label: "Ragdoll" },
  { value: "russian_blue", label: "Russian Blue" },
  { value: "savannah", label: "Savannah" },
  { value: "scottish_fold", label: "Scottish Fold" },
  { value: "selkirk_rex", label: "Selkirk Rex" },
  { value: "siamese", label: "Siamese" },
  { value: "singapura", label: "Singapura" },
  { value: "siberian", label: "Siberian" },
  { value: "snowshoe", label: "Snowshoe" },
  { value: "somali", label: "Somali" },
  { value: "sphynx", label: "Sphynx" },
  { value: "tonkinese", label: "Tonkinese" },
  { value: "turkish_angora", label: "Turkish Angora" },
  { value: "turkish_van", label: "Turkish Van" }
];
  
const AddCat = () => {

    const [name, setName] = useState('');
    const [bday, setBday] = useState(null);
    const [breed, setBreed] = useState('');
    const [size, setSize] = useState('');
    const [weight, setWeight] = useState('');

    const handle = () => {

        const catData = JSON.parse(localStorage.getItem('cats')) || [];

        const cat = {
            name,
            birthday: bday ? bday.toISOString() : '',
            breed,
            size,
            catWeight: weight ? weight.toISOString() : '',
        };

        catData.push(cat);
        localStorage.setItem('cats', JSON.stringify(catData));
    }

  return (
    <div className='min-h-screen'>
      <div className='flex flex-col items-center space-y-4 py-42'>
      <div className='flex justify-center items-center'>
          <p className='mb-5 text-5xl font-bold text-[#ca9973]'>Enter Cat Info</p>
        </div>


        <div className="flex justify-center items-center gap-8 ">
            <div>
                <label className="block w-[200px] text-lg font-semibold mb-2 text-gray-700 ">Name:</label>
                <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    value={name}
                    placeholder='Ex: John'
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label className="block w-[200px] text-lg font-semibold mb-2 text-gray-700">Birth Date:</label>
                <DatePicker
                    popperClassName="my-datepicker"
                    selected={bday}
                    onChange={(e) => setBday(e)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="DD/MM/YYYY"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    className=" input input-bordered w-[200px]"
                />            
            
          </div>
            
        </div>

        <div className="flex justify-center items-center gap-8">
            <div>
                <label className=" block w-[200px] text-lg font-semibold mb-2 text-gray-700">Breed:</label>
                <Select
                    options={catBreeds}
                    value={catBreeds.find((breedObj) => breedObj.value === breed)}
                    onChange={(e) => setBreed(e.value)}
                    placeholder="Select"
                    className="max-w-xs min-w-[200px]"
                />
            </div>

            <div>
                <label className="block text-lg font-semibold mb-2 text-gray-700">Size:</label>
                <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className=" select select-bordered w-[200px] mr-[0px]"
                >
                    <option value="">Select</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            
        </div>

        <div className="flex justify-center items-center gap-8 mb-4">
            <div>
                <label className="block w-[150px] text-lg font-semibold mb-2 text-gray-700">Weight (lbs):</label>
                <input 
                    type="number" 
                    placeholder="Enter..." 
                    value={weight} 
                    min={0}
                    onChange={(e) => setWeight(e.targetValue)}
                    className='input input-bordered w-[200px]' 
                    
                />

            </div>

            
        </div>

        <div>
            <button 
                onClick={handle} 
                className='btn btn-accent'>
                Save
            </button>
        </div>
        
      </div>
    </div>

    
  );

  
};


export default AddCat;
