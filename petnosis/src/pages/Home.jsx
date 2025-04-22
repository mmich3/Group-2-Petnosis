import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
        <div>Homeeee</div>
        <Link to="/Blank"><button>Go to Blank</button></Link>
    </>
  )
}

export default Home