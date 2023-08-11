import React from 'react'
import Logo from "../Assets/logo.png"
import "../Styles/footer.css"
import Apple from "../Assets/Apple store.png"
import Playstore from "../Assets/play_store.png"
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-section row">
        <div className="kitchly-logo-section col-md-4" style={{ width: '25rem' }}> 
        <div className="logo_box">
        <img className='logo' src={Logo} alt="" />
        </div>

          <p className='footer-text'> 
            Order your favorite food to your doorstep from kitchens in you neighborhood with the Kitchly service.
          </p>

          <div className="">
            <div className="download-app-btn">
              <div className="apple_playstore">
                <img src={Apple} alt="" />
              </div>
              <div className="apple_playstore">
              <img src={Playstore} alt="" />
              </div>
            </div>

           
          </div>
        </div>



        <div className="about-section col-md-4" style={{ width: '25rem' }}>
          <h2>About Us</h2>
          <p>Privacy Policy</p>
        </div>



        <div className="cook-earn-section col-md-4" style={{ width: '25rem' }}>
          <h2>Cook and earn now!</h2>
          <p>Use the link below to see how to open your kitchen account</p>
        </div>
      </div>
    </div>
  )
}

export default Footer