import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './Composants/NavItems'
import Footer from './Composants/Footer/Footer'
import Banner from './Home/Banner'
import CategoryShowCase from './Home/CategoryShowCase'
import HomeCategory from './Home/HomeCategory'
import Register from './Home/Register'
import LocationSprade from './Home/LocationSprade'
import AboutUs from './Home/AboutUs'
import AppSection from './Home/AppSection'
import Sponsor from './Home/Sponsor'

const Accueil = () => {
  return (
    <>
        <NavItems/>
        <Banner />
        <HomeCategory/>
        <CategoryShowCase />
        <Register />
        <LocationSprade />
        <AboutUs />
        <AppSection />
        <Sponsor />
        <Footer />
    
    </>
  )
}

export default Accueil