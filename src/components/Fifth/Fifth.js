import React from 'react'
import './Fifth.scss'

const Fifth = () => {
  return (
    <div className='fifth' id='fifth'>
      <div className='container'>

        <div className='left'>
          <img src='assets/cassette.png' alt=''/>
        </div>

        <div className='right'>
          <h1>Listen and enjoy all trending music</h1>
          <div className='offers'>
            <i class="fas fa-circle"></i>
            <p>Whats hot</p>
          </div>
          <div className='offers'>
            <i class="fas fa-circle"></i>
            <p>By Genre</p>
          </div>
          <div className='offers'>
            <i class="fas fa-circle"></i>
            <p>By Location</p>
          </div>
          <div className='offers'>
            <i class="fas fa-circle"></i>
            <p>Lots more...</p>
          </div>
          <button>Start listening</button>
        </div>
      </div>
    </div>
  )
}

export default Fifth
