import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import VetClinic from "../components/VetClinic";
import L from "leaflet";
import './Map.css';

// Optional: custom icon for user location
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.freepik.com/512/3093/3093496.png",
  iconSize: [32, 32],
});

export default function Map(props) {
  const chicagoCoords = [41.86879112472178, -87.64846988977077];
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  return (
    <div style={{ height: props.height, width: props.width}}>
      <MapContainer
        center={chicagoCoords}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* User location marker */}
        {userLocation && (
          <Marker position={userLocation} icon={userIcon}>
            <Popup>You are here!</Popup>
          </Marker>
        )}

        {/* Vet clinics */}
        <VetClinic
          id="1"
          coordinates={[41.87777811992834, -87.64979928280339]}
          title="West Loop Vet"
          body="Combining over a decade of 
          experience in primary care and  specialty/emergency veterinary hospitals, the best technological advancements, holistic 
          integrative therapeutics, and a warm and caring staff, we've created a personalized veterinary experience that reflects 
          what we have always wanted to have for our own beloved pets! "
          address="815 W Randolph St, Chicago, IL 60607"
          rating={4.5}
          url="https://media.istockphoto.com/id/1171733307/photo/vet-with-dog-and-cat-puppy-and-kitten-at-doctor.jpg?s=612x612&w=0&k=20&c=bgRM6090SMgF2-AHWdOk0OHs-fVe-o2mwkbmsKNwn3w="
        />

        {/* <VetClinic
          id="2"
          coordinates={[41.87416420083566, -87.68227769174646]}
          title="Medical District Veterinary Clinic at Illinois"
          body="Medical District Veterinary Clinic is a full-service, family-oriented practice where your pet is a special member of 
          the family! We cater to cats and dogs in Chicago, Illinois. As a Cat Friendly Practice® our feline patients have full access
           to a cat-friendly space certified as GOLD status by the American Association of Feline Practitioners."
          url="https://media.istockphoto.com/id/1171733307/photo/vet-with-dog-and-cat-puppy-and-kitten-at-doctor.jpg?s=612x612&w=0&k=20&c=bgRM6090SMgF2-AHWdOk0OHs-fVe-o2mwkbmsKNwn3w="
        />

        <VetClinic
          id="3"
          coordinates={[41.85843048270482, -87.6537132302468]}
          title="Kindred Veterinary"
          body="Combining over a decade of experience in primary care and  specialty/emergency veterinary hospitals, the best technological
           advancements, holistic integrative therapeutics, and a warm and caring staff, we’ve created a personalized veterinary experience 
           that reflects what we have always wanted to have for our own beloved pets!"
          url="https://images.squarespace-cdn.com/content/v1/64f4d27631e24b45303c9070/1695960821956-WQYIYUSB7YUM84QCWAYH/IMG_7104%2B%25281%2529-min.jpg?format=750w"
        />

        <VetClinic
          id="3"
          coordinates={[41.85843048270482, -87.6537132302468]}
          title="Kindred Veterinary"
          body="Combining over a decade of experience..."
          url="https://images.squarespace-cdn.com/content/v1/64f4d27631e24b45303c9070/1695960821956-WQYIYUSB7YUM84QCWAYH/IMG_7104%2B%25281%2529-min.jpg?format=750w"
        /> */}
      </MapContainer>
    </div>
  );
}
