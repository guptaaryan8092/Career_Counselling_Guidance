import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        <ScrollToTop />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout