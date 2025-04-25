import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import { useParams } from 'react-router-dom';

const vetData = {
  "1": {
    title: "West Loop Vet",
    body: "...",
    url: "...",
  },
  "2": {
    title: "Medical District Veterinary Clinic at Illinois",
    body: "...",
    url: "...",
  },
  "3": {
    title: "Kindred Veterinary",
    body: "...",
    url: "...",
  },
};

export default function Vet() {
  const { id } = useParams();
  const vet = vetData[id];

  if (!vet) return <div>Vet clinic not found</div>;

  return (
    <div style={{ padding: "20px" }}>
      <BackButton/>
      <h1 style={{ color: "#ca9973" }}>{vet.title}</h1>
      <img src={vet.url} alt={vet.title} style={{ width: "100%", maxWidth: "600px", margin: "20px 0" }} />
      <p>{vet.body}</p>
    </div>
  );
}

