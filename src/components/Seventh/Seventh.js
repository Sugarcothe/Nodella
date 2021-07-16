import React, {useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Seventh.scss'

const Seventh = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 2,
    pauseOnHover: true,
    autoplay: true,
    slidesToScroll: 1
  };

  const testimonial  = [
    {
      message: ' "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem" ',
      name: 'Buju',
      genre: 'Hip Pop',
      image: 'assets/buju.webp'
    },
    {
      message: ' "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem" ',
      name: 'Simisola',
      genre: 'RnB',
      image: 'assets/simi.jpg'
    },
    {
      message: ' "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem" ',
      name: 'Donald Glover" ',
      name: 'Rihanna',
      genre: 'Hip Hop',
      image: 'assets/riri.jpg'
    },
    {
      message: ' "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem" ',
      name: 'Donald Glover',
      genre: 'Pop',
      image: 'assets/gambino.jpg'
    },
    {
      message: ' "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem" ',
      name: 'Phyno',
      genre: 'Rap',
      image: 'assets/phyno.jpg'
    }

  ]

  return (
    <div className='seventh' id='seventh'>
      <div className='slider'>
        <Slider {...settings}>
        {testimonial.map((d) => (      
          <div className='section'> 
              <div className='card'>
              <p className='paragraphy'>
              {d.message}
              </p>
              <div className='testi'>
                <p>{d.name}</p>
                <small>{d.genre}</small>
              </div>
              <img style={{width:90, height:'auto'}} src={d.image} alt='testimonial'/>
            </div>      
          </div>
          ))}
        </Slider>      
        </div>  
      </div>
  )
}

export default Seventh
