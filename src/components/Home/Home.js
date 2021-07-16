import React from 'react'
import './Home.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {




  return (
    <div className='home' id='home'>
      <div className='container'>
        <div className='col-1'>
          <h1 className='header'>More fans, More Gigs, Less Effort Get Better feedback, Wider exposure and deeper industry access without ever switching tabs.</h1>
          <button>let's get started</button>
        </div>
        <div className='col-1'>
          <img src='assets/home-nobg.png' alt=''/>
        </div>
      </div>
     
    </div>
  )
}

export default Home
