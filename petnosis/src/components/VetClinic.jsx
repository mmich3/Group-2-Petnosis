import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './VetClinic.css';
import { Link } from 'react-router-dom';

function VetClinic(props) {

  const vetIcon = new L.Icon({
    iconUrl: "https://static-00.iconduck.com/assets.00/apps-paw-icon-2048x2048-32081l3g.png",
    iconSize: [32, 32],
  });

  return (
    <>
      <Marker position={props.coordinates} icon={vetIcon}>
        <Popup>
          <div
            className='pop-up-div'
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <img src={props.url} alt={props.title} style={{ margin: '0 0 20px 0' }} />
            <strong style={{ color: '#ca9973' }}>{props.title}</strong>
            <p>{props.body}</p>
          </div>
          <Link to={`/Vet/${props.id}`}><button>More info</button></Link>
        </Popup>
      </Marker>
    </>
  );
}

export default VetClinic;
