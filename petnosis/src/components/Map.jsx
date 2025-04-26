import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import VetClinic from './VetClinic';
import L from 'leaflet';

// Optional: custom icon for user location
const userIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1320/1320933.png',
  iconSize: [32, 32],
});

export default function Map() {
  const chicagoCoords = [41.86879112472178, -87.64846988977077];
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error('Error getting user location:', error);
      },
    );
  }, []);

  return (
    <MapContainer
      center={chicagoCoords}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* User location marker */}
      {userLocation && (
        <Marker position={userLocation} icon={userIcon}>
          <Popup>You are here!</Popup>
        </Marker>
      )}
      {/* Vet clinics */}
      <VetClinic
        id='1'
        coordinates={[41.87777811992834, -87.64979928280339]}
        title='West Loop Veterinary Care'
        body="Combining over a decade of 
          experience in primary care and  specialty/emergency veterinary hospitals, the best technological advancements, holistic 
          integrative therapeutics, and a warm and caring staff, we've created a personalized veterinary experience that reflects 
          what we have always wanted to have for our own beloved pets! "
        address='815 W Randolph St, Chicago, IL 60607'
        rating={4.5}
        phone={+13124212275}
        website='https://westloopvet.com/west-loop/?utm_source=google&utm_medium=organic&utm_campaign=gmb&utm_term=website'
        url='https://westloopvet.com/wp-content/uploads/2023/03/1-outside-of-building-3.jpg'
      />
      <VetClinic
        id='2'
        coordinates={[41.87416420083566, -87.68227769174646]}
        title='Medical District Veterinary Clinic at Illinois'
        body='Medical District Veterinary Clinic is a full-service, family-oriented practice where your pet is a special member of 
          the family! We cater to cats and dogs in Chicago, Illinois. As a Cat Friendly Practice® our feline patients have full access
           to a cat-friendly space certified as GOLD status by the American Association of Feline Practitioners.'
        address='2242 W Harrison St, Chicago, IL 60612'
        rating={4.7}
        phone={+13122262588}
        website='https://www.medicaldistrictvet.com/'
        url='https://www.medicaldistrictvet.com/images/about-page-1.jpg'
      />
      <VetClinic
        id='3'
        coordinates={[41.85843048270482, -87.6537132302468]}
        title='Kindred Veterinary'
        body="Combining over a decade of experience in primary care and  specialty/emergency veterinary hospitals, the best technological
           advancements, holistic integrative therapeutics, and a warm and caring staff, we've created a personalized veterinary experience 
           that reflects what we have always wanted to have for our own beloved pets!"
        address='1106 W 18th St #1, Chicago, IL 60608'
        rating={4.5}
        phone={+17739971106}
        website='https://www.kindredveterinary.com/'
        url='https://images.squarespace-cdn.com/content/v1/64f4d27631e24b45303c9070/1695960821956-WQYIYUSB7YUM84QCWAYH/IMG_7104%2B%25281%2529-min.jpg?format=750w'
      />
      <VetClinic
        id='4'
        coordinates={[41.837775495984275, -87.65097701675604]}
        title='Urban PetRx'
        body="We strive to provide modern veterinary medicine with traditional sensibilities. This means we have developed a contemporary 
          clinic to offer the best care available for your pet, yet we don't subscribe to the practice of upselling our services. Our goal 
          is to be honest and fair and to never guilt you into doing anything… we offer a friendly, compassionate, and frank approach 
          towards caring for your family pet, all in a judgment-free environment."
        address='3113 S Morgan St, Chicago, IL 60608'
        rating={4.7}
        phone={+17738010771}
        website='https://urbanpetrx.com/'
        url='https://s3-media0.fl.yelpcdn.com/bphoto/WcPYabhWJXuUIHMkhi86Ng/348s.jpg'
      />
      <VetClinic
        id='5'
        coordinates={[41.89641148537514, -87.63098567442512]}
        title='Companion Animal Hospital River North'
        body='We service all the neighborhoods within Chicago, IL,  including River North, Gold Coast, Streeterville, River West, and more!
          Our dedicated team is available seven days a week to offer complete, progressive pet care. Become a part of the Companion family 
          and share in our passion for the human-animal bond.'
        address='749 N Clark St, Chicago, IL 60654'
        rating={4.3}
        phone={+13126432901}
        website='https://companionrn.com/'
        url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoEHUAI91WgEL46QJkYSmd8uEGsvQ78oobg&s'
      />
      <VetClinic
        id='6'
        coordinates={[41.90315713511997, -87.66598154558872]}
        title='Wicker Park Veterinary Clinic'
        body='Wicker Park Veterinary Clinic is a privately owned practice dedicated to providing the highest quality pet care in a professional 
          and friendly environment. Dr. Cohen, Dr. Mowry, Dr. Mullin, Dr. Singleton, Dr. Milkowski, and Dr. Santiago specialize in medical, surgical, 
          dental, and general care for all life stages of your pet, and emphasizes client education and preventative medicine. The experienced team 
          at WPVC values communication, understanding, compassion and honesty and aims to keep its clients well-informed and comfortable.'
        address='1166 N Milwaukee Ave, Chicago, IL 60642'
        rating={4.8}
        phone={+17732279700}
        website='http://wickerparkvet.com/'
        url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNEYgW46pcwbVGO5qaUAkJuOs2H2MvhwAagw&s'
      />
      <VetClinic
        id='7'
        coordinates={[41.82477724647515, -87.68661151483579]}
        title='Brighton Park Animal Hospital'
        body="Located in Chicago the veterinarians at Brighton Park Animal Hospital are committed to your pet's health. Chicago based Brighton Park 
          Animal Hospital excels in the science of Veterinary medicine and was founded in 1990. Since then Dr. Ernesto Perez and our staff have excelled
           in compassionate veterinary care in the Chicago area."
        address='3779 S Archer Ave, Chicago, IL 60632'
        rating={3.9}
        phone={+17732541111}
        website='http://www.brightonparkanimalhospital.com/'
        url='https://pethotels.com/media/cache/gallery_h960/images/p/2f7d99_10376l.jpg'
      />
      <VetClinic
        id='8'
        coordinates={[41.860581677194006, -87.6243626609351]}
        title='Metropolitan Veterinary Center'
        body="Located in Chicago the veterinarians at Brighton Park Animal Hospital are committed to your pet's health. Chicago based Brighton Park 
          Animal Hospital excels in the science of Veterinary medicine and was founded in 1990. Since then Dr. Ernesto Perez and our staff have excelled
           in compassionate veterinary care in the Chicago area."
        address='1556 S Michigan Ave Ste.100, Chicago, IL 60605'
        rating={4.6}
        phone={+13125831921}
        website='https://metrovetchicago.com/'
        url='https://metrovetchicago.com/wp-content/uploads/sites/317/2022/10/thumbnail.jpg'
      />
      Brighton Park Animal Hospital
    </MapContainer>
  );
}
