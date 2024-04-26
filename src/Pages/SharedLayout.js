import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

const SharedLayout = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default SharedLayout
