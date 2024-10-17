import React from 'react'
import '../../app/globals.css'
import Navbar from '../Header/Navbar'
import Slider from './slider/Slider'


export default function Hero() {
  return (
      <div className=' bg-[#B3C8CF] w-screen p-4 lg:px-20 flex flex-col items-center justify-center'>
        <Slider />
      </div>
  )
}
