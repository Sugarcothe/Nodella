import React from 'react';
import './Sixth.scss'

const Sixth = () => {
  return (
    <div className='sixth' id='sixth'>
      <div className='container'>
        <div className='top'>
          <h1>Choose Your Plan</h1>
        </div>
        <div className='bottom'>     
            <div className='left'>   
              <img src='assets/cardimage1.png' alt=''/>
              <div classNmae='hsection'>
                <p className='para'>Free</p>
                <small>Enjoy sustainable</small>
                <p>$7.60<span>Month</span></p>
                <p>Start with one month free trial</p>
                <hr/>
            </div>
              
              <button>features</button>
              <div className='check'>
                <i class="fas fa-check"></i>
                <p>Online Listening</p>
              </div>
              <div className='check'>
                <i class="fas fa-check"></i>
                <p>Online Listening</p>
              </div>
              <div className='check'>
                <i class="fas fa-check"></i>
                <p>Online Listening</p>
              </div>
              <div className='check'>
                <i class="fas fa-check"></i>
                <p>Online Listening</p>
              </div>
              <div className='check'>
                <i class="fas fa-check"></i>
                <p>Online Listening</p>
              </div>
              <div className='btn'>
              <button className='boton'>Activate</button>
              </div>
            </div>


            <div className='right'> 
            <img src='assets/cardimage2.png' alt=''/>
              <div classNmae='hsection'>
                <p className='para'>Free</p>
                <small>Enjoy sustainable</small>
                <p>$7.60<span>Month</span></p>
                <p>Start with one month free trial</p>
                <hr/>
            </div>
              
              <button>features</button>
              <div className='check'>
                <i class="fas fa-check"></i>
                <p>Online Listening</p>
              </div>
              <div className='check'>
                <i class="fas fa-check"></i>
                <p>Online Listening</p>
              </div>
              <div className='check'>
                <i class="fas fa-check"></i>
                <p>Online Listening</p>
              </div>
              <div className='check'>
                <i class="fas fa-check"></i>
                <p>Online Listening</p>
              </div>
              <div className='check'>
                <i class="fas fa-check"></i>
                <p>Online Listening</p>
              </div>
              <div className='btn'>
              <button className='boton'>Activate</button>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Sixth
