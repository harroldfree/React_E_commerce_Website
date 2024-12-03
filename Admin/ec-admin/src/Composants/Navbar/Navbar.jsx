import React from 'react'
import logo from '/logo.jpeg'
// import navProfile from '../../assets/nav-profile.svg'
import './Navbar.css'
import SocialProfileSimple from '../../SocialProfileSimple/SocialProfileSimple'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img  className='logo'  src={logo} alt="nav-logo" />
        <h1 className='icc'>SHOPPING Hfree</h1>
        <SocialProfileSimple />
        {/* <img src={navProfile} className='nav-profile' alt="" /> */}
      
    </div>
  )
}

export default Navbar
