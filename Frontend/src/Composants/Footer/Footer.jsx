import React from 'react'
import './Footer.css'



function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
         <img src="../src/assets/images/icon/logo1.jpeg" alt=""  />
        
         <p>SHOPPING Hfree</p> 
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-conteneur">
            <img src="../src/assets/images/icon/instagram_icon.png" alt=""  />
                
            </div>
            <div className="footer-icons-conteneur">
            <img src="../src/assets/images/icon/pintester_icon.png" alt=""  />
                
            </div>
            <div className="footer-icons-conteneur">
            <img src="../src/assets/images/icon/whatsapp_icon.png" alt=""  />
            
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p> Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer