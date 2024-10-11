"use client"


import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Biohazard, BookMarkedIcon, SlidersVerticalIcon, Star, Verified } from 'lucide-react'
import Image from 'next/image'
import headsetImg from "../../assets/H220-1_headset_1024x1024@2x.webp"
import Timer from './countdown/Timer'
import i1 from "../../assets/discount-products/1.webp"
import i2 from "../../assets/discount-products/2.png"
import i3 from "../../assets/discount-products/3.webp"
import i4 from "../../assets/discount-products/2565745.jpg"
import i5 from "../../assets/discount-products/q1.webp"
import i6 from "../../assets/discount-products/6.webp"
import i7 from "../../assets/discount-products/7.webp"
import i8 from "../../assets/discount-products/8.webp"
import i9 from "../../assets/discount-products/9.avif"
import i10 from "../../assets/discount-products/11.jpg"
import i11 from "../../assets/discount-products/deskt Giveaway Instagram Post.png"
import i12 from "../../assets/discount-products/q1.webp"
import i13 from "../../assets/discount-products/q2.jpg"
import i14 from "../../assets/discount-products/q3.webp"
import i15 from "../../assets/discount-products/q4.png"

export default function Discount() {
  const DiscountData = [
    {
      "id": 1,
      "img": i1,
    },
    {
      "id": 2,
      "img": i2,
    },
    {
      "id": 3,
      "img": i3,
    },
    {
      "id": 4,
      "img": i4,
    },
    {
      "id": 5,
      "img": i5,
    },
    {
      "id": 6,
      "img": i6,
    },
    {
      "id": 7,
      "img": i7,
    },
    {
      "id": 8,
      "img": i8,
    },
    {
      "id": 9,
      "img": i9,
    },
    {
      "id": 10,
      "img": i10,
    },
    {
      "id": 11,
      "img": i11,
    },
    {
      "id": 12,
      "img": i12,
    },
    {
      "id": 13,
      "img": i13,
    },
    {
      "id": 14,
      "img": i14,
    },
    {
      "id": 15,
      "img": i15,
    },
  ]
  return (
    <div className=" w-full my-14 flex flex-col p-4 items-start max-h-[37rem]" >
      <div className="flex flex-col ">
        <div className=" rounded-xl p-4 border-[2px] border-slate-300 shadow-xl w-full flex  ">
            <div className="flex w-full flex-col lg:flex-row">
                <div className='w-full lg:w-2/6'>
                <Splide
      options={ {
        type: 'loop',
        // gap: '1.2rem',
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
         
          <Image src={data.img} alt={`imggg`} width={350} className='p-3 rounded-3xl ' />
        </SplideSlide>
      ))}
        
    </Splide>
                </div>
                <div className='col-span-4 py-2 mr-10 flex flex-col justify-center items-start gap-3'>
                  <Timer />
                  <p className='text-xl font-semibold text-red-600 flex gap-1 items-center'><Biohazard color='red' fill='red' /> Monthly Discounts for you</p>
                  {/* <p className='text-6xl font-bold mb-5'>00d:00h:00:00</p> */}
                  <p className='text-4xl font-semibold '>Up To 40% off on Digital Items</p>
                  <p className='lg:text-lg pr-10 '>Discover amazing deals and save big with up to 40% off on digital items this month. Enjoy up to 40% off on your favorite digital products—dont miss out on these fantastic savings!</p>
                  <Button variant="commerce" size="commerce" className='flex max-w-60 mt-5 items-center gap-5 justify-center'>Buy it Now <ArrowRight /></Button>

                </div>
            </div>
            </div>

        </div>
    </div>
  )
}
