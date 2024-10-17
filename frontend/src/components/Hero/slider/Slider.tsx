"use client"

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./slider.css"
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Slider() {
  const sliderData = [
    {
      "id": 1,
      "title": "Apple iPhone 14 Pro Max Smartphone",
      "description": "The latest iPhone with A16 Bionic chip, ProMotion technology, and advanced camera system. Experience unmatched performance and design.",
      "img_url": "/hero-bg/Removal-894.png",
      "price": 999.99
    },
    {
      "id": 2,
      "title": "Samsung Galaxy S22 Ultra Smartphone",
      "description": "High-resolution 108MP camera, S Pen integration, and the fastest chip ever in a Galaxy. Elevate your mobile experience.",
      "img_url":  "/hero-bg/Removal-56.png",
      "price": 1199.99
    },
    {
      "id": 3,
      "title": "Sony WH-1000XM4 Noise-Canceling Headphones",
      "description": "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.",
      "img_url":  "/hero-bg/Removal-430.png",
      "price": 349.99
    },
    {
      "id": 4,
      "title": "Dell XPS 13 Ultra-Slim Computer Desktop",
      "description": "Ultra-slim, lightweight laptop with a stunning 13.4-inch InfinityEdge display, powerful Intel Core processors, and long battery life.",
      "img_url":  "/hero-bg/Removal-665.png",
      "price": 1299.99
    },
    {
      "id": 5,
      "title": "Ergonomic Developer Chair with Lumbar Support",
      "description": "Designed for long coding sessions, this ergonomic chair features adjustable lumbar support, breathable mesh, and 4D armrests for maximum comfort.",
      "img_url":  "/hero-bg/Removal-504.png",
      "price": 329.99
    }
  ]
  
  return (
    <div className="w-full">

    <Splide
      options={ {
        type: 'loop',
        gap: '1rem',
        arrows: false,
        autoplay: true,
        interval: 5000,
        speed: 2500,
        rewind: true,
      } }
      aria-label="My Favorite Images"
    >
      {sliderData.map((data) => (
        <SplideSlide key={data.id}>
          <div className=" w-full min-h-full lg:px-24">
            <div className=" flex flex-col lg:flex-row-reverse lg:ml-14  gap-5 items-center justify-center">
              <div className="">
                <Image src={data.img_url} alt={`${data.title}  image`} width={800} height={500} className='size-full' />
              </div>
              <div className=" flex flex-col gap-2  w-full lg:w-1/2">
                <div className="flex items-center gap-2 font-semibold">

                  <Star color='gold' fill='gold' size={16}/>
                  <p>Top product of this month</p>
                </div>
                  <h1 className='text-2xl md:text-4xl font-semibold text-PrimaryColor'>{data.title}</h1>
                  <p className='lg:w-[80%]'>{data.description}</p>
                  {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                  <button className='bg-PrimaryColor w-fit text-white p-2 px-10 rounded-full font-semibold border-2 border-black/30'>Buy Now!</button>
              </div>
              
            </div>
          </div>
        </SplideSlide>
      ))}
        
    </Splide>
    </div>

  );
}
