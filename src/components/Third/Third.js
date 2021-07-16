import React from 'react'
import './Third.scss'

const Third = () => {
  const albums = [
    {
      img: 'assets/devilsgun.jpg',
      title: 'Devils Gun',
      author: 'Jayz',
      likes: '1.5k'
    },
    {
      img: 'assets/nirvaana.webp',
      title: 'Never Mind',
      author: 'Nirvana',
      likes: '17k'
    },
    {
      img: 'assets/ladipoe.jpeg',
      title: 'Feeling now',
      author: 'Ladipoe',
      likes: '12k'
    }
  ]

  const singles = [
  {
      img: 'assets/omo.jpeg',
      title: 'Omo x 100',
      author: 'Olamide',
      likes: '25k'
  },
  {
      img: 'assets/royalblood.jpg',
      title: 'Royal Blood',
      author: 'Band James',
      likes: '13k'
  },
  {
      img: 'assets/zaha.jpg',
      title: 'God is a Plug',
      author: 'Zaheer',
      likes: '5k'
  },
]


  return (
    <div className='third' id='third'>
      <div className='container'>
        <h1>What's Hot!</h1>
        <div>
          <small className='albums'>Albums</small>
        </div>

        <div className='section'>
          <div className='left'>
            {albums.map((d) => (
            <div className='col'>
                <img src={d.img} alt=''/>
                <div className='sect'>
                  <div className='title'>
                    <small>{d.title}</small>
                    <p>{d.author}</p>
                  </div>
                  <div className='likes'>
                  <i class="far fa-heart"></i>
                    <h5>{d.likes}</h5>
                  </div>
                  
                </div>
            </div>))}
          </div>

        <div className='right'>
          <img style={{width:360}} src='assets/phone.png' alt='what hot'/>
        </div>
        </div>


        <div className='section2'>
          <div className='left'>
            {singles.map((d) => (
            <div className='col'>
                <img src={d.img} alt=''/>
                <div className='sect'>
                  <div className='title'>
                    <small>{d.title}</small>
                    <p>{d.author}</p>
                  </div>
                  <div className='likes'>
                    <h5>{d.likes}</h5>
                    <i class="far fa-heart"></i>
                  </div>
                  
                </div>
            </div>))}
          </div> 
{/* 
         <div className='right'>
          <img style={{width:400}} src='assets/phone.png' alt='what hot'/>
        </div>  */}
        </div>
      </div>
    </div>
  )
}

export default Third
