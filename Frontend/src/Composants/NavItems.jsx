import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo/logo.jpg'


const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [socialToggle, setSocialToggle] = useState(false)
    const [headfixed, setHeaderFixed] = useState(false)

    // addevent listener
    window.addEventListener("scroll", () =>{
       if(window.scrollY > 200){
        setHeaderFixed(true)
       } else{
            setHeaderFixed(false)
       }
    } )
  return (
    <header className={`header-section style-4 ${headfixed ? "header-fixed fadeInUp" : ""}`}>
        {/*l'entete commence ici  */}
        <div className={`header-top d-md-none ${socialToggle ? "open": ""}`}>
           <div className='container'>
                <div className="header-top-area">
                    <Link to="/login" className='lab-btn me-3'><span>Creer un Compte</span></Link>
                    <Link to="/connexion"><span>Se Connectez</span></Link>
                </div>
           </div> 
        </div>
        {/* Bouton d'entete */}
        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    {/* logo */}
                    <div className="logo-search-acte">
                        <div className="logo">
                            <Link to={"/"}>
                            <img src={logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    {/* Barre de menu */}
                    <div>
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            {/* Inscrisption & Connection */}
                            <Link to="login" className='lab-btn  me-3 d-none d-md-block'>Creer un Compte</Link>
                            <Link to="/connexion" className=' d-none d-md-block'>Se Connectez</Link>
                            {/* Menu toggle */}
                            <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                             {/* Social toggler*/}
                         <div className='ellepsis-bar d-md-none'
                         onClick={() => setSocialToggle(!socialToggle)}
                         >
                         <i className="icofont-info-square"></i>
                         </div>
                           

                        </div>
                         

                    </div>
                </div>
            </div>
        </div>

    </header>
  )
}

export default NavItems