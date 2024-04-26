import React from 'react'
import './Footer.scss'
import { NavLink } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { IoIosCall } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='section footer-section'>
      <div className='footer-center section-center'>
        <article className='footer1'>
          <NavLink to='/'>
            <div className='nav-logo'>
              <h1 className='logo'>code </h1>
              <h1>shaper</h1>
            </div>
          </NavLink>
          <p>
            Welcome to our consultancy agency. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe aliquam quaerat, possimus
            ducimus harum distinctio!{' '}
          </p>
          <div className='footer-info'>
            <div>
              <IoIosCall className='footer-logo' />
              <p>+92 666 888 0000</p>
            </div>
            <div>
              <FaMessage className='footer-logo' />
              <p>needhelp@company.com</p>
            </div>
            <div>
              <FaMapMarkerAlt className='footer-logo' />
              <p>66 Broklyn Street New York, USA</p>
            </div>
          </div>
        </article>
        <article className='footer2'>
          <h4>explore</h4>
          <div className='links-c'>
            <div className='links1'>
              <NavLink>about</NavLink>
              <NavLink>meet our team</NavLink>
              <NavLink>case studies</NavLink>
              <NavLink>latest news</NavLink>
              <NavLink>contact</NavLink>
            </div>
            <div className='links2'>
              <NavLink>support</NavLink>
              <NavLink>term of use</NavLink>
              <NavLink>privacy & policy</NavLink>
              <NavLink>help</NavLink>
            </div>
          </div>
        </article>
        <article className='footer3'>
          <h4>newsletter</h4>
          <div className='form-center'>
            <p>Subscribe for latest articlesand resources</p>
            <form className='form'>
              <input type='text' placeholder='Email Address' />
              <button className='footer-btn' type='submit'>
                register
              </button>
            </form>
          </div>
        </article>
      </div>
    </footer>
  )
}

export default Footer
