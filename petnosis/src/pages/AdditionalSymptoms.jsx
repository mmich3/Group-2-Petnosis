import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';

const AdditionalSymptoms = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <BackButton />
      <div className='flex grow flex-col items-center justify-center'>
        <div className='hero-content mb-5 text-center'>
          <p className='text-5xl font-bold text-[#ca9973]'>Additional Info</p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <b style={{marginBottom: 10, fontSize:40, color: 'green'}}>Log Duration</b>
            <div>
                <p style={{textAlign: 'center', fontSize: 35, color:'#46A3FF'}}>1. Limping</p>
                <div style={{display: 'flex', marginBottom: 10}}>
                    <p style = {{padding: 3, fontSize: 25}}>From:</p>
                    <input type='date' style={{border: '1px solid black', borderRadius: '4px' ,width: 110, fontSize:15}}></input>
                    <p style = {{paddingLeft: 10, padding: 3, fontSize: 25}}>To:</p>
                    <input type='date' style={{border: '1px solid black', borderRadius: '4px' ,width: 110, fontSize:15}}></input>
                </div>
                <p style={{textAlign: 'center', fontSize: 35, color:'#46A3FF'}}>2. Coughing</p>
                <div style={{display: 'flex', marginBottom: 10}}>
                    <p style = {{padding: 3, fontSize: 25}}>From:</p>
                    <input type='date' style={{border: '1px solid black', borderRadius: '4px' ,width: 110, fontSize:15}}></input>
                    <p style = {{paddingLeft: 10, padding: 3, fontSize: 25}}>To:</p>
                    <input type='date' style={{border: '1px solid black', borderRadius: '4px' ,width: 110, fontSize:15}}></input>
                </div>
                <p style={{textAlign: 'center', fontSize: 35, color:'#46A3FF'}}>3. Lack of appetite</p>
                <div style={{display: 'flex', marginBottom: 10}}>
                    <p style = {{padding: 3, fontSize: 25}}>From:</p>
                    <input type='date' style={{border: '1px solid black', borderRadius: '4px' ,width: 110, fontSize:15}}></input>
                    <p style = {{paddingLeft: 10, padding: 3, fontSize: 25}}>To:</p>
                    <input type='date' style={{border: '1px solid black', borderRadius: '4px' ,width: 110, fontSize:15}}></input>
                </div>
            </div>
        </div>

        <div style={{marginTop: 100, fontSize: 23}}>
            <p>-Optional-</p>
            <p style={{color: '#46A3FF'}}>DESCRIPTION:</p>
            <input type='text' style={{border: '1px solid black', borderRadius: '9px' ,width: 330, height: 40, paddingLeft: 20}} onFocus={(e) => e.target.value = ''} defaultValue="Start typing..."></input>
        </div>

        <div className='hero' style={{justifyContent: 'right'}}>
          <div className='hero-content mt-0'>
            <Link to='/Results'>
              <button className='btn btn-accent'>Get Diagnosis</button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default AdditionalSymptoms;