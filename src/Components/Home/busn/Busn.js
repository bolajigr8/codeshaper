import React from 'react'
import { GiPrayer } from 'react-icons/gi'
import { IoMdCheckmark, IoMdCheckmarkCircleOutline } from 'react-icons/io'
import './busn.scss'

const Busn = () => {
  return (
    <>
      {' '}
      <section className='section busn-section'>
        <div className='busn-center'>
          <article className='busn-info'>
            <div className='busnLogo-container'>
              <GiPrayer className='busn-logo' />
            </div>
            <h4>420</h4>
            <p>consulting solutions</p>
          </article>
          <article className='busn-info'>
            <div className='busnLogo-container'>
              <GiPrayer className='busn-logo' />
            </div>
            <h4>420</h4>
            <p>consulting solutions</p>
          </article>
          <article className='busn-info'>
            <div className='busnLogo-container'>
              <GiPrayer className='busn-logo' />
            </div>
            <h4>420</h4>
            <p>consulting solutions</p>
          </article>
          <article className='busn-info'>
            <div className='busnLogo-container'>
              <GiPrayer className='busn-logo' />
            </div>
            <h4>420</h4>
            <p>consulting solutions</p>
          </article>
        </div>
        <article className='busn-growth'>
          <div className='busnGrowth-info'>
            <h4>business growth</h4>
          </div>
          <div className='busnGrowth-info'>
            <h4>business growth</h4>
          </div>
          <div className='busnGrowth-info'>
            <h4>business growth</h4>
          </div>
        </article>
      </section>
      <Sub />
    </>
  )
}

const Sub = () => {
  return (
    <section className='section sub-section'>
      <div className='section-center sub-center'>
        <article className='sub1'>
          <header className='sub-container'>
            <div className='subLogo-c'>
              <IoMdCheckmarkCircleOutline className='subLogo' />
            </div>
            <div className='sub1-info'>
              <h4>highest success rates</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                eos incidunt illo error itaque magni!
              </p>
            </div>
          </header>
          <header className='sub-container'>
            <div className='subLogo-c'>
              <IoMdCheckmarkCircleOutline className='subLogo' />
            </div>
            <div className='sub1-info'>
              <h4>we build experience</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                eos incidunt illo error itaque magni!
              </p>
            </div>
          </header>
        </article>
        <article className='sub2'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            reprehenderit, porro cupiditate perferendis ad, accusamus obcaecati
            fugit quod odio ipsa nesciunt eius iste quasi quibusdam animi
            consectetur voluptatibus veritatis optio quidem doloribus in
            voluptas laboriosam? Ratione eaque non placeat aliquam!
          </p>
          <article className='mark'>
            <div className='mark-container'>
              <IoMdCheckmark className='mark-logo' />
              <p>neuculiar cing edit</p>
            </div>
            <div className='mark-container'>
              <IoMdCheckmark className='mark-logo' />
              <p>swipe radiase suscript sagitis leo</p>
            </div>
            <div className='mark-container'>
              <IoMdCheckmark className='mark-logo' />
              <p>enlarge equilibrium dignissione posture</p>
            </div>
            <div className='mark-container'>
              <IoMdCheckmark className='mark-logo' />
              <p>if you are going to use a passage</p>
            </div>
            <div className='mark-container'>
              <IoMdCheckmark className='mark-logo' />
              <p>if you are going to use a passage head data</p>
            </div>
          </article>
        </article>
      </div>
    </section>
  )
}

export default Busn
