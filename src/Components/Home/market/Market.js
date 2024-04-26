import React from 'react'
import './Market.scss'
import { FaPhoneVolume } from 'react-icons/fa6'
const Market = () => {
  return (
    <section className='section mkt-section'>
      <div className='mkt-center'>
        <div className='video'>
          <div className='video-icon'></div>
        </div>
        <article className='mkt'>
          <h1>we're leading in the market</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            voluptatem vel, quaerat pariatur velit eveniet error laudantium
            molestias doloremque natus.
          </p>
          <h4>
            We have 35+ years of experience. We offer marketing abd consulting
            services
          </h4>

          <div className='bar-container1'>
            <div className='bar1'></div>
            <span className='text1'>consulting</span>
            <span className='no1'>83%</span>
          </div>
          <div className='bar-container2'>
            <div className='bar2'></div>
            <span className='text2'>advices</span>
            <span className='no2'>61%</span>
          </div>
          <div className='mkt-help'>
            <div className='mkt-logo'>
              <FaPhoneVolume />
            </div>
            <div className='help-info'>
              <p>have any question? Give us a call</p>
              <p id='help-no'>+92 666 888 0000</p>
            </div>
          </div>
        </article>
        <article className='mktInfo-container'>
          <div className='mkt-info'>
            <div className='info-box'>
              <span>01</span>
            </div>
            <article>
              <h4>get professional advice</h4>
              <p>
                there are many variations available but the majority have
                suffered alteration
              </p>
            </article>
          </div>
          <div className='mkt-info'>
            <div className='info-box'>
              <span>02</span>
            </div>
            <article>
              <h4>get professional advice</h4>
              <p>
                there are many variations available but the majority have
                suffered alteration
              </p>
            </article>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Market
