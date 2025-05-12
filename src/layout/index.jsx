import React from 'react'
import Header from './Header'
import Footer from './footer'
import BannerSection from '../section/BannerSection'

const Layout = ({children}) => {
  return (
   <div>
    <Header/>
    <main>{children}</main>
    <Footer/>
   </div>
  )
}

export default Layout