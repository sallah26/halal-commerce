"use client"
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import '../../../app/globals.css'
import "./slider.css"
import iPhoneImg from "../../assets/hero-bg/Removal-894.png"
import smsngImg from "../../assets/hero-bg/Removal-56.png"
import Headphones from "../../assets/hero-bg/Removal-430.png"
import Dell from "../../assets/hero-bg/Removal-665.png"
import Developer from "../../assets/hero-bg/Removal-504.png"
import Image from 'next/image';
import { Star } from 'lucide-react';
export default function Slider() {
  const sliderData = [
    {
      "id": 1,
      "title": "Apple iPhone 14 Pro Max Smartphone",
      "description": "The latest iPhone with A16 Bionic chip, ProMotion technology, and advanced camera system. Experience unmatched performance and design.",
      "img_url": iPhoneImg,
      "price": 999.99
    },
    {
      "id": 2,
      "title": "Samsung Galaxy S22 Ultra Smartphone",
      "description": "High-resolution 108MP camera, S Pen integration, and the fastest chip ever in a Galaxy. Elevate your mobile experience.",
      "img_url": smsngImg,
      "price": 1199.99
    },
    {
      "id": 3,
      "title": "Sony WH-1000XM4 Noise-Canceling Headphones",
      "description": "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.",
      "img_url": Headphones,
      "price": 349.99
    },
    {
      "id": 4,
      "title": "Dell XPS 13 Ultra-Slim Computer Desktop",
      "description": "Ultra-slim, lightweight laptop with a stunning 13.4-inch InfinityEdge display, powerful Intel Core processors, and long battery life.",
      "img_url": Dell,
      "price": 1299.99
    },
    {
      "id": 5,
      "title": "Ergonomic Developer Chair with Lumbar Support",
      "description": "Designed for long coding sessions, this ergonomic chair features adjustable lumbar support, breathable mesh, and 4D armrests for maximum comfort.",
      "img_url": Developer,
      "price": 329.99
    }
  ]
  
  return (
    <div className="main">

    <Splide
      options={ {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        interval: 5000,
        speed: 2500,
        rewind: true,
      } }
      aria-label="My Favorite Images"
    >
      {sliderData.map((data) => (
        <SplideSlide key={data.id}>
          <div className="first w-full p-4 min-h-full ">
            <div className="second flex flex-col lg:flex-row gap-5">
              <div className="second-first">
                <div className="divv">
                  <div className='star'>

                  <Star color='white' fill='white' size={16}/>
                  </div>
                  <p>Top product of month</p>
                </div>
                <h1 className='title'>{data.title}</h1>
                <p className='description'>{data.description}</p>
                <div className="second-price">
                  {/* <h4 className='price'>${data.price}</h4> */}
                  <button className='btn'>Buy Now!</button>
                </div>
              </div>
              <div className="second-second">
                <Image src={data.img_url} alt={`${data.title} image`} />
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
        
    </Splide>
    </div>

  );
}
