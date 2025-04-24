import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './VetClinic.css';

function VetClinic( props ) {
  return (
    <>

        

        <Marker position={props.coordinates}>


                <Popup>
                    <div className="pop-up-div" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={props.url} alt={props.title} style={{ margin: '0 0 20px 0'}} />
                        <strong style={{ color: '#ca9973' }}>{props.title}</strong>
                        <p>{props.body}</p>
                    </div>
                </Popup>
                
            </Marker>
    </>
  )
}

export default VetClinic