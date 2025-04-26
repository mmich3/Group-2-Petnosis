import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import StarRating from '../components/StarRating';

const vetData = {
  "1": {
    title: "West Loop Veterinary Care",
    address: "815 W Randolph St, Chicago, IL 60607",
    rating: 4.5,
    body: "Combining over a decade of experience in primary care and  specialty/emergency veterinary hospitals, the best technological advancements, holistic integrative therapeutics, and a warm and caring staff, we've created a personalized veterinary experience that reflects what we have always wanted to have for our own beloved pets! ",
    url: "https://westloopvet.com/wp-content/uploads/2023/03/1-outside-of-building-3.jpg",
    website: "https://www.westloopvet.com",
  },
  "2": {
    title: "Medical District Veterinary Clinic at Illinois",
    address: "2242 W Harrison St STE 101, Chicago, IL 60612",
    rating: 4.7,
    body: "This full-service clinic is operated by the University of Illinois and provides care while also supporting vet education. High-quality, compassionate, and community-oriented care.",
    url: "https://www.medicaldistrictvet.com/images/about-page-1.jpg",
    website: "https://vetmed.illinois.edu/hospital/small-animal/medical-district/",
  },
  "3": {
    title: "Kindred Veterinary",
    address: "2130 S Halsted St, Chicago, IL 60608",
    rating: 5.0,
    body: "Combining over a decade of experience in primary care and  specialty/emergency veterinary hospitals, the best technological advancements, holistic integrative therapeutics, and a warm and caring staff, we've created a personalized veterinary experience that reflects what we have always wanted to have for our own beloved pets!",
    url: "https://images.squarespace-cdn.com/content/v1/64f4d27631e24b45303c9070/1695960821956-WQYIYUSB7YUM84QCWAYH/IMG_7104%2B%25281%2529-min.jpg?format=750w",
    website: "https://kindredvet.com",
  },
  "4": {
    title: "Urban PetRx",
    address: "3113 S Morgan St, Chicago, IL 60608",
    rating: 5.7,
    body: "We strive to provide modern veterinary medicine with traditional sensibilities. This means we have developed a contemporary clinic to offer the best care available for your pet, yet we don't subscribe to the practice of upselling our services. Our goal is to be honest and fair and to never guilt you into doing anything… we offer a friendly, compassionate, and frank approach towards caring for your family pet, all in a judgment-free environment.",
    url: "https://s3-media0.fl.yelpcdn.com/bphoto/WcPYabhWJXuUIHMkhi86Ng/348s.jpg",
    website: "https://urbanpetrx.com/",
  },
  "5": {
    title: "Companion Animal Hospital River North",
    address: "749 N Clark St, Chicago, IL 60654",
    rating: 4.3,
    body: "We service all the neighborhoods within Chicago, IL,  including River North, Gold Coast, Streeterville, River West, and more! Our dedicated team is available seven days a week to offer complete, progressive pet care. Become a part of the Companion family and share in our passion for the human-animal bond.",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoEHUAI91WgEL46QJkYSmd8uEGsvQ78oobg&s",
    website: "https://companionrn.com/",
  },
  "6": {
    title: "Wicker Park Veterinary Clinic",
    address: "1166 N Milwaukee Ave, Chicago, IL 60642",
    rating: 4.8,
    body: "Wicker Park Veterinary Clinic is a privately owned practice dedicated to providing the highest quality pet care in a professional and friendly environment. Dr. Cohen, Dr. Mowry, Dr. Mullin, Dr. Singleton, Dr. Milkowski, and Dr. Santiago specialize in medical, surgical, dental, and general care for all life stages of your pet, and emphasizes client education and preventative medicine. The experienced team at WPVC values communication, understanding, compassion and honesty and aims to keep its clients well-informed and comfortable.",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNEYgW46pcwbVGO5qaUAkJuOs2H2MvhwAagw&s",
    website: "http://wickerparkvet.com/",
  },
  "7": {
    title: "Brighton Park Animal Hospital",
    address: "3779 S Archer Ave, Chicago, IL 60632",
    rating: 3.9,
    body: "Located in Chicago the veterinarians at Brighton Park Animal Hospital are committed to your pet's health. Chicago based Brighton Park Animal Hospital excels in the science of Veterinary medicine and was founded in 1990. Since then Dr. Ernesto Perez and our staff have excelled in compassionate veterinary care in the Chicago area.",
    url: "https://pethotels.com/media/cache/gallery_h960/images/p/2f7d99_10376l.jpg",
    website: "http://www.brightonparkanimalhospital.com/",
  },
  "8": {
    title: "Metropolitan Veterinary Center",
    address: "1556 S Michigan Ave Ste.100, Chicago, IL 60605",
    rating: 4.6,
    body: "Wicker Park Veterinary Clinic is a privately owned practice dedicated to providing the highest quality pet care in a professional and friendly environment. Dr. Cohen, Dr. Mowry, Dr. Mullin, Dr. Singleton, Dr. Milkowski, and Dr. Santiago specialize in medical, surgical, dental, and general care for all life stages of your pet, and emphasizes client education and preventative medicine. The experienced team at WPVC values communication, understanding, compassion and honesty and aims to keep its clients well-informed and comfortable.",
    url: "https://metrovetchicago.com/wp-content/uploads/sites/317/2022/10/thumbnail.jpg",
    website: "https://metrovetchicago.com/",
  },
};

export default function Vet() {
  const { id } = useParams();
  const vet = vetData[id];

  if (!vet) return <div className='text-center mt-10 text-xl text-red-500'>Vet clinic not found</div>;

  return (
    <div className='flex min-h-screen flex-col bg-white'>
      <BackButton />
      <div className='mx-auto px-4 py-6'>
        <div className='card w-[80vw] max-w-2xl bg-amber-100 shadow-2xl'>
          <figure>
            <img src={vet.url} alt={vet.title} className='w-full object-cover max-h-50' />
          </figure>
          <div className='card-body'>
            <h1 className='text-3xl font-bold text-[#ca9973] text-center'>{vet.title}</h1>
            <p className='text-center font-semibold text-gray-700'>{vet.address}</p>
            <div className='flex justify-center my-2'>
              <StarRating rating={vet.rating} />
            </div>
            <p className='text-md text-justify text-gray-800'>{vet.body}</p>
            <div className='card-actions justify-center mt-4 gap-4'>
              <a href={vet.website} target='_blank' rel='noopener noreferrer' className='btn btn-sm btn-success'>
                Visit Website
              </a>
              <button className='btn btn-sm btn-primary'>
                Make Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}