import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './VetClinic.css';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

function VetClinic(props) {

  const vetIcon = new L.Icon({
    iconUrl: "https://cdn.iconscout.com/icon/free/png-256/free-veterinary-symbol-icon-download-in-svg-png-gif-file-formats--sign-paw-medical-pack-healthcare-icons-5014300.png?f=webp&w=256",
    iconSize: [32, 32],
  });

  return (
    <>
      <Marker position={props.coordinates} icon={vetIcon}>
        <Popup >
          
          <div
            className='pop-up-div space-y-2'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '250px',
            }}
          >
            <img
              className='w-full rounded-md'
              src={props.url}
              alt={props.title}
              style={{ marginBottom: '10px' }}
            />
            <strong className='text-[#ca9973]'>{props.title}</strong>
            <strong className='text-[#ca9973]'>{props.address}</strong>
            <StarRating rating={props.rating} />
            <p className='text-sm text-center'>{props.body}</p>

            {/* Buttons Row */}
            <div className='flex flex-wrap justify-center gap-2 mt-2'>
              <a
                href={props.website}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-success btn-sm'
              >
                Visit Website
              </a>

              <a
                href={`tel:${props.phone}`}
                className='btn btn-info btn-sm'
              >
                Call
              </a>

              <Link
                to={`/Vet/${props.id}`}
                className='btn btn-neutral btn-sm'
              >
                More Info
              </Link>
            </div>
          </div>
        </Popup>
      </Marker>
    </>
  );
}

export default VetClinic;
