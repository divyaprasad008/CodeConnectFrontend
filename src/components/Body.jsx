import React from 'react'
import Navbar from './Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body
