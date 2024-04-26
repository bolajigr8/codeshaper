import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.scss'
const Hero = () => {
  return (
    <header className='hero section'>
      <div className='section-center hero-center'>
        <p>welcome to codeshaper</p>
        <h1>consulting for every business</h1>
        <Link to={`/services`}>
          <button className='btn hero-btn' type='button'>
            discover more
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Hero
