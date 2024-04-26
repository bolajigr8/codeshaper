import React from 'react'
import './Case.scss'
import { FaCar } from 'react-icons/fa'

const Case = () => {
  return (
    <section className='section case-section'>
      <div className=' section-center case-center'>
        <h1>new case studies</h1>
        <p>we help our clients renew their business</p>
        <article>
          <div className='case-studies'>
            <div className='overlay'>
              <div className='case-logo'>
                <FaCar />
              </div>
              <div className='case-info'>
                <p>thought leadership</p>
                <h4>businesses growth</h4>
              </div>
            </div>
          </div>
          <div className='case-studies'>
            <div className='overlay'>
              <div className='case-logo'>
                <FaCar />
              </div>
              <div className='case-info'>
                <p>thought leadership</p>
                <h4>businesses growth</h4>
              </div>
            </div>
          </div>
          <div className='case-studies'>
            <div className='overlay overlay1'>
              <div className='case-logo'>
                <FaCar />
              </div>
              <div className='case-info'>
                <p>thought leadership</p>
                <h4>businesses growth</h4>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Case
