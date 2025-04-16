import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import Hero from '../Component/Hero/Hero'
import Testimonials from '../Component/Testimonials/Testimonials'
import Features from '../Component/Features/Features'
import Newsletter from '../Component/Newsletter/Newsletter'
import Questions from '../Component/Questions/Questions'
import Dashboard from '../Component/Dashboard/Dashboard'
import Featuregrid from '../Component/Featuregrid/Featuregrid'

const Contact_sales = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Dashboard/>
    <Features/>
    <Questions/>
    <Testimonials/>
    <Featuregrid/>
    {/* <Newsletter/> */}
    <Footer/>
    </>
  )
}

export default Contact_sales