
// Map.jsx
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../components/VetClinic";
import VetClinic from "../components/VetClinic";
import './Map.css'

export default function Map() {

    const chicagoCoords = [41.86879112472178, -87.64846988977077];

    return (

        <div style={{ height: "600px", width: "100%", marginTop: "20px" }}>
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
            
            <VetClinic coordinates={[41.87777811992834, -87.64979928280339]} title="West Loop Vet" body="Combining over a decade of 
            experience in primary care and  specialty/emergency veterinary hospitals, the best technological advancements, holistic 
            integrative therapeutics, and a warm and caring staff, we’ve created a personalized veterinary experience that reflects 
            what we have always wanted to have for our own beloved pets! From annual checkups to urgent care- we know how it feels 
            like to be on the receiving end. So, we will do our best to listen to your questions and understand your concerns - caring 
            for your pets like our very own! To inquire about same-day appointments - or if you have a pet emergency, please call 
            us at 773-997-1106." url="https://media.istockphoto.com/id/1171733307/photo/vet-with-dog-and-cat-puppy-and-kitten-at-doctor.jpg?s=612x612&w=0&k=20&c=bgRM6090SMgF2-AHWdOk0OHs-fVe-o2mwkbmsKNwn3w="/>
            
            <VetClinic coordinates={[41.87416420083566, -87.68227769174646]} title="Medical District Veterinary Clinic at Illinois" body="Combining over a decade of 
            experience in primary care and  specialty/emergency veterinary hospitals, the best technological advancements, holistic 
            integrative therapeutics, and a warm and caring staff, we’ve created a personalized veterinary experience that reflects 
            what we have always wanted to have for our own beloved pets! From annual checkups to urgent care- we know how it feels 
            like to be on the receiving end. So, we will do our best to listen to your questions and understand your concerns - caring 
            for your pets like our very own! To inquire about same-day appointments - or if you have a pet emergency, please call 
            us at 773-997-1106." url="https://media.istockphoto.com/id/1171733307/photo/vet-with-dog-and-cat-puppy-and-kitten-at-doctor.jpg?s=612x612&w=0&k=20&c=bgRM6090SMgF2-AHWdOk0OHs-fVe-o2mwkbmsKNwn3w="/>
            
            <VetClinic coordinates={[41.85843048270482, -87.6537132302468]} title="Kindred Veterinary" body="Combining over a decade of 
            experience in primary care and  specialty/emergency veterinary hospitals, the best technological advancements, holistic 
            integrative therapeutics, and a warm and caring staff, we’ve created a personalized veterinary experience that reflects 
            what we have always wanted to have for our own beloved pets! From annual checkups to urgent care- we know how it feels 
            like to be on the receiving end. So, we will do our best to listen to your questions and understand your concerns - caring 
            for your pets like our very own! To inquire about same-day appointments - or if you have a pet emergency, please call 
            us at 773-997-1106." url="https://images.squarespace-cdn.com/content/v1/64f4d27631e24b45303c9070/1695960821956-WQYIYUSB7YUM84QCWAYH/IMG_7104%2B%25281%2529-min.jpg?format=750w"/>
            
        </MapContainer>
        </div>
    );
}
