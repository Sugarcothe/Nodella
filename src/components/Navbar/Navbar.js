import React from 'react'
import './Navbar.scss'
// import 'bootstrap/dist/css/bootstrap.css'

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#home' className='logo'><img  styel={{height:20}} src='assets/logo.png' alt=''/></a>
          <input 
            class="form-inpute" 
            placeholder="Search for artist, songs, albums..."
          />
        </div>

        <div className='buttons'>
          <img style={{width:150, height:'auto'}} src='assets/appstore.png' alt=''/>
        </div>
        <div className='text'>
          <h4>Signup/Login</h4>
        </div>
        <div>
          <img style={{cursor:'pointer'}} src='assets/butt.png' alt=''/>
        </div>
        <div className='center'>
        </div>
        <div className='right'>
          <div className='harmburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
