import React from 'react'
import './Exp.scss'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
const Exp = () => {
  return (
    <section className='section exp-section'>
      <div className='section-center exp-center'>
        <h2>real-world experience</h2>
        <p>the best business consulting firm you can count on!</p>
        <div className='exp-info'>
          <div className='expBox-center'>
            <article className='exp-box'>
              <h3>wealth management</h3>
              <button>read more</button>
              <div className='shape'></div>
              <div className='inner-shape'></div>
            </article>
            <article className='exp-box'>
              <h3>wealth management</h3>
              <button>read more</button>
              <div className='shape'></div>
              <div className='inner-shape'></div>
            </article>
            <article className='exp-box'>
              <h3>wealth management</h3>
              <button>read more</button>
              <div className='shape'></div>
              <div className='inner-shape'></div>
            </article>
          </div>

          <div className='line-container'>
            <div className='line'></div>

            <div className='text'>meet the partners</div>
            <div className='line'></div>
          </div>
        </div>
        <div className='expBtn-container'>
          <button className='exp-btn' type='button'>
            <FaArrowLeft />
          </button>
          <button className='exp-btn' type='button'>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Exp
