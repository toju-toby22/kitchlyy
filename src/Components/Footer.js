import React from 'react'
import Logo from "../Assets/logo.png"
import "../Styles/footer.css"
import Apple from "../Assets/Apple store.png"
import Playstore from "../Assets/image 23.png"
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-section">
            <div className="kitchly-logo-section">
                <img className='Logo'  src={Logo} alt="" />

                <p>
                Order your favorite food to your doorstep from kitchens in you neighborhood with the Kitchly service.
                </p>

                <div className="download-app-btn">
                    <img src={Apple} alt="" />
                    <img src={Playstore} alt="" />
                </div>
            </div>



            <div className="about-section">
            <h2>About Us</h2>
            <p>Privacy Policy</p>
            </div>



            <div className="cook-earn-section">
            <h2>Cook and earn now!</h2>
            <p>Use the link below to see how to open your kitchen account</p>
            </div>
        </div>
    </div>
  )
}

export default Footer