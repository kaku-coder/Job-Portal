import React from 'react'
import './Homepage.css'
import backgroundImage from '../assets/background1.jpeg'

const HomePage = () => {
  return (
    <div className='homepage' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="home-content">
        <h1>hello</h1>
      </div>
    </div>
  )
}

export default HomePage