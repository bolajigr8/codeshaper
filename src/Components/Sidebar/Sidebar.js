import React from 'react'
import { useGlobalContext } from '../../context'
import { NavLink, Link } from 'react-router-dom'
import './Sidebar.scss'
import { FaTimes } from 'react-icons/fa'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  const currentYear = new Date().getFullYear()
  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show-sidebar' : 'sidebar-wrapper '
      }`}
    >
      <aside className='sidebar'>
        <NavLink to='/'>
          <div className='sidebar-logo'>
            <h1 className='logo'>code </h1>
            <h1>shaper</h1>
          </div>
        </NavLink>
        <button onClick={closeSidebar} className='close-btn'>
          <FaTimes />
        </button>

        <article>
          <ul className='sidebar-links'>
            <li>
              <NavLink
                onClick={closeSidebar}
                to='/'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSidebar}
                to='/services'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                services
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSidebar}
                to='/pages'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                pages
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSidebar}
                to='/case-shops'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                case shop
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSidebar}
                to='/blog'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                blog
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSidebar}
                to='/content'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                content
              </NavLink>
            </li>
          </ul>
          <ul className='Sidebarsocial-icons'>
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
          <div className='sidebar-help'>
            <h4>Need help?</h4>
            <p>+92 666 555 0000 </p>
          </div>
        </article>

        <div className='sidebar-info'>
          <p>
            copywright @ <span>{currentYear}</span> code shaper. all rights
            reserved
          </p>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
