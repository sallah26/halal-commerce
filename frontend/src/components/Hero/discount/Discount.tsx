"use client"


import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import { Button } from '@/components/ui/button'
import { ArrowRight, Biohazard } from 'lucide-react'
import Image from 'next/image'
import Timer from './countdown/Timer'

export default function Discount() {
  const DiscountData = [
    {
      "id": 1,
      "img": "/discount-products/1.webp",
    },
    {
      "id": 2,
      "img": "/discount-products/2.png",
    },
    {
      "id": 3,
      "img": "/discount-products/3.webp",
    },
    {
      "id": 4,
      "img":  "/discount-products/2565745.jpg",
    },
    {
      "id": 5,
      "img":  "/discount-products/q1.webp",
    },
    {
      "id": 6,
      "img":  "/discount-products/6.webp",
    },
    {
      "id": 7,
      "img":  "/discount-products/7.webp",
    },
    {
      "id": 8,
      "img":  "/discount-products/8.webp",
    },
    {
      "id": 9,
      "img":  "/discount-products/9.avif",
    },
    {
      "id": 10,
      "img":  "/discount-products/11.jpg",
    },
    {
      "id": 11,
      "img":  "/discount-products/deskt Giveaway Instagram Post.png",
    },
    {
      "id": 12,
      "img":  "/discount-products/q1.webp",
    },
    {
      "id": 13,
      "img":  "/discount-products/q2.jpg",
    },
    {
      "id": 14,
      "img":  "/discount-products/q3.webp",
    },
    {
      "id": 15,
      "img":  "/discount-products/q4.png",
    },
  ]
  return (
    <div className=" w-full my-14 flex flex-col items-start max-h-[37rem]" >
        <div className=" rounded-xl  border-[2px] border-slate-300 shadow-xl w-full flex  p-1">
            <div className="flex w-full flex-col lg:flex-row">
            <p className='text-lg md:text-xl font-semibold text-red-600 flex  md:hidden gap-1 items-center'><Biohazard color='red' fill='red' /> Monthly Discounts for you</p>
                <div className='w-full lg:w-2/6'>
                <Splide
      options={ {
        type: 'loop',
        autoplay: true,
        pagination: false,
        arrows: false,
        interval: 2000,
        perPage: 1,
        speed: 1000,
        rewind: true,
      } }
      aria-label="My Favorite Images"
    >
      {DiscountData.map((data) => (
        <SplideSlide key={data.id} className="flex items-center justify-center">
         
          <Image src={data.img} alt={"product image"} width={350} height={100} className='p-3 rounded-3xl ' />
        </SplideSlide>
      ))}
        
    </Splide>
                </div>
                <div className='col-span-4 py-2 mr-10 flex flex-col justify-center items-start gap-3'>
                  <Timer />
                  <p className='text-lg md:text-xl font-semibold text-red-600 hidden md:flex gap-1 items-center'><Biohazard color='red' fill='red' /> Monthly Discounts for you</p>
                  {/* <p className='text-6xl font-bold mb-5'>00d:00h:00:00</p> */}
                  <p className='text-3xl text-PrimaryColor md:text-4xl font-semibold '>Up To 40% off on Digital Items</p>
                  <p className='lg:text-lg lg:pr-10 '>Discover amazing deals and save big with up to 40% off on digital items this month. Enjoy up to 40% off on your favorite digital products—dont miss out on these fantastic savings!</p>
                  <Button variant="commerce" size="commerce" className='flex max-w-60 lg:mt-4 items-center gap-2 md:gap-5 justify-center'>Explore more <ArrowRight /></Button>
                </div>
            </div>
            </div>
    </div>
  )
}
