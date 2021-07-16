import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='container'>

          <div className='sect1'>
            <img src='assets/logo.png' alt='logo'/>
            <small className='copyright'>© 2020 Napollo</small>
            <div className='last'>
              <div className>
                <small className='sm'>Legals</small>
                <small className='sm'>Privacy</small>
                <small className='sm'>cokies</small>
              </div>
            </div>
          </div>

          <div className='sect2'> 
            <p>Napollo</p>
            <p>About</p>
            <p>Signup</p>
            <p>Forgot Password</p>
            <p>Contact</p>
          </div>

          <div className='sect3'> 
            <p>Napollo</p>
            <p>About</p>
            <p>Signup</p>
            <p>Forgot Password</p>
            <p>Contact</p>
            <p>Forgot Password</p>
            <p>Contact</p>
          </div>

          <div className='sect4'> 
            <p>Napollo</p>
            <p>About</p>
            <p>Signup</p>
            <p>Forgot Password</p>
            <p>Contact</p>
            <p>Forgot Password</p>
            <p>Contact</p>
          </div>

          <div className='sect5'> 
            <p>Follow</p>
            <div className='sector'>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            </div> 
            <p>Download App</p> 
          </div>

      </div>
    </div>
  )
}

export default Footer
