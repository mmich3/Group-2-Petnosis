import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function Blank() {
  return (
    <div>
        <h1>BLANK</h1>
        <Link to="/"><button>Blank Page</button></Link>
    </div>
  )
}

export default Blank