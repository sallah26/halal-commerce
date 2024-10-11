import React from 'react'
import '../../app/globals.css'
import Navbar from '../Header/Navbar'
import Slider from './slider/Slider'


export default function Hero() {
  return (
    <div  >
 
    <div className="hero-section">
      <div className="content">


      <div className='hero flex flex-col items-center justify-center'>
          <Slider />
      </div>
    </div>
      </div>
      
      </div>
  )
}
