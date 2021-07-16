import React from 'react'
import './Eight.scss'

const Eight = () => {
  return (
    <div className='eight' id='eight'>
      <div className='container'>
        <div className='left'>
          <img src='assets/phones1.png' alt='phones' />
        </div>
        <div className='right'>
          <h1>Download Our iOS and Android apps</h1>
          <h2>For Free</h2>
          <p>Dowload over 10million times in less than 10months, Our cross platform apps allows you to listen to, discover favourites and share music on the go
          </p>
          <div className='imago'>
            <img className='images1' src='assets/appstore.png' alt=''/>
            <img className='images' src='assets/googleplay.png' alt=''/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eight
