import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import FooterFull from './FooterFull'

const BodyFull = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <Outlet />
        <FooterFull />
    </div>
  )
}

export default BodyFull