import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { CgMenuBoxed, CgSearch } from 'react-icons/cg'
import './Navbar.scss'
import { useGlobalContext } from '../../context'

const Navbar = () => {
  const { openSidebar } = useGlobalContext()
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <NavLink to='/'>
          <div className='nav-logo'>
            <h1 className='logo'>code </h1>
            <h1>shaper</h1>
          </div>
        </NavLink>
        <div className='vertical-rule'></div>
        <div>
          <CgMenuBoxed onClick={openSidebar} className='nav-btn' />
        </div>
        <ul className='nav-links'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'nav-link nav-active' : 'nav-link'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/services'
              className={({ isActive }) =>
                isActive ? 'nav-link nav-active' : 'nav-link'
              }
            >
              services
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/pages'
              className={({ isActive }) =>
                isActive ? 'nav-link nav-active' : 'nav-link'
              }
            >
              pages
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/case'
              className={({ isActive }) =>
                isActive ? 'nav-link nav-active' : 'nav-link'
              }
            >
              case shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blog'
              className={({ isActive }) =>
                isActive ? 'nav-link nav-active' : 'nav-link'
              }
            >
              blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/content'
              className={({ isActive }) =>
                isActive ? 'nav-link nav-active' : 'nav-link'
              }
            >
              content
            </NavLink>
          </li>
        </ul>

        <ul className='social-icons'>
          <li>
            <Link
              target='blank'
              to={`https://www.instagram.com`}
              className='social-icon'
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link
              target='blank'
              to={`https://www.linkedin.com`}
              className='social-icon'
            >
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link
              target='blank'
              to={`https://www.twitter.com`}
              className='social-icon'
            >
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link
              target='blank'
              to={`https://www.facebook.com`}
              className='social-icon'
            >
              <FaFacebook />
            </Link>
          </li>
        </ul>
        <div className='vertical-rule1'></div>
        <div className='search'>
          <CgSearch />
        </div>
        <div className='vertical-rule vertical-rule2'></div>
        <div className='nav-info'>
          <h4>Need help?</h4>
          <p>+92 666 555 0000 </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
