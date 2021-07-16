import React from 'react'
import './Fourth.scss'

const Fourth = () => {
  return (
    <div className='fourth' id='fourth'>
      <div className='container'>
        <div className='left'> 
          <img src='assets/fone.png' alt=''/>
        </div>

        <div className='right'> 
          <h1>Expansion Page</h1>
          <p>
            Discover artistes all around the world by their location via the expansion page. also get to know the top artistes in any location on the globe.
          </p>
            <div className='songs'>
              <div className='tracks'>
                <h4>01</h4>
                <img className='imago' style={{width:80, height:'auto'}} src='assets/rihanna.jpg' alt=''/>
                <div className='names'>
                  <h3>Rihanna</h3>
                  <p>Close By</p>
                </div>
                <i className="fas fa-heart icon"></i>
              </div>
              <div className='tracks'>
                <h4>02</h4>
                <img className='imago2' style={{width:65, height:65}} src='assets/chrisbrown.jpg' alt=''/>
                <div className='names'>
                  <h3>Chris Brown</h3>
                  <p>Indigo</p>
                </div>
                <i className="fas fa-heart icon2"></i>
              </div>
              <div className='tracks'>
                <h4>03</h4>
                <img className='imago' style={{width:80, height:'auto'}} src='assets/teni.png' alt=''/>
                <div className='names'>
                  <h3>Teni</h3>
                  <p>Injure me</p>
                </div>
                <i className="fas fa-heart icon"></i>
              </div>
              <div className='tracks'>
                <h4>03</h4>
                <img className='imago' style={{width:80, height:'auto'}} src='assets/simisola.jpg' alt=''/>
                <div className='names'>
                  <h3>Simi</h3>
                  <p>Simisola</p>
                </div>
                <i className="fas fa-heart icon"></i>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Fourth
