import React from 'react';
import './About.scss'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='container'>
        <div className='left'>
          <h1>About Napollo</h1>
          <p className='para1'>
            Napollo is a music streaming service that connects to listeers in a way that has never been done before.
          </p>
          <p className='para1'>
            Artists, musicians, music lovers, producers, no mater your taste or skills are, we are here to derbe you the best all around the world.
          </p>
        </div>
        <div className='right'>
          <img src='assets/about.png' alt='about ima'/>
        </div>
      </div>
    </div>
  )
}

export default About
