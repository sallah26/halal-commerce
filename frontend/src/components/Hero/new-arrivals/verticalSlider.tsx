"use client"


import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// import '../../../app/globals.css'
// import "../slider/slider.css"
import Image from 'next/image';
import appleImg from "../../assets/new-products/apple.png"
import SamsungImg from "../../assets/new-products/samsung.png"
import headphoneImg from "../../assets/new-products/headphone(1).png"
import speakerImg from "../../assets/new-products/speaker.png"
import shirtImg from "../../assets/new-products/Tshirt.png"
import mouseImg from "../../assets/new-products/mouse(1).png"
import niqabImg from "../../assets/new-products/niqab.png"

import { Star, Verified } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function VerticalSlider() {
        const productsData = [
            {
              "id": 1,
              "title": "Apple iPhone 14 Pro",
              "description": "The latest iPhone with advanced features, sleek design, and exceptional performance for everyday use.",
              "price": 999.99,
              "img": appleImg,
            },
            {
              "id": 2,
              "title": "Samsung Galaxy S22 Ultra",
              "description": "High-resolution camera, fast performance, S Pen integration, and stunning display for an immersive experience.",
              "price": 1199.99,
              "img": SamsungImg,
            },
            {
              "id": 3,
              "title": "Sony WH-1000XM4 Headphones",
              "description": "Industry-leading noise canceling headphones with superior sound quality, comfort, and long battery life.",
              "price": 349.99,
              "img": headphoneImg,
            },
            {
              "id": 4,
              "title": "JBL Flip 5 Bluetooth Speaker",
              "description": "Portable and waterproof Bluetooth speaker with powerful sound and long battery life.",
              "price": 99.99,
              "img": speakerImg,
            },
            {
              "id": 5,
              "title": "Men's Casual T-Shirt",
              "description": "Comfortable and stylish casual t-shirt made from high-quality cotton fabric.",
              "price": 29.99,
              "img": shirtImg,
            },
            {
              "id": 6,
              "title": "Women's Summer Dress",
              "description": "Elegant and lightweight summer dress perfect for casual outings and beach days.",
              "price": 49.99,
              "img": niqabImg,
            },
            {
              "id": 7,
              "title": "Logitech G502 Hero Mouse",
              "description": "High-performance gaming mouse with customizable features, ergonomic design, and precision tracking.",
              "price": 79.99,
              "img": mouseImg,
            }
          ]
  
  return (
    <div className="min-h-full">

    <Splide
      options={ {
        type: 'loop',
        gap: '1.2rem',
        autoplay: true,
        pagination: false,
        arrows: false,
        interval: 2000,
        direction: 'ttb',
        perPage: 3,
        height   : '39rem',
        focus    : 'center',
        autoWidth: true,
        wheel    : true,
        speed: 1500,
        rewind: true,
      } }
      aria-label="My Favorite Images"
    >
      {productsData.map((data) => (
        <SplideSlide key={data.id}>
          <div className=" rounded-xl border-[2px]   border-slate-300 min-h-full shadow-xl w-full flex  ">
            <div className="grid grid-cols-3">
              <div className="col-span-1 ">
              <Image src={data.img} alt={`${data.title} image`} className='h-full p-3  rounded-3xl' />
              </div>
              <div className="col-span-2 p-2 flex flex-col justify-between">
              <div className="flex justify-between">
                    <p className='text-xl font-semibold'>{data.title}</p>
                    <Badge variant="newSm">New</Badge>
                  </div>
                  <p className='pt-2 pr-5 line-clamp-2'>{data.description}</p>
                  <div className="rate flex gap-1 mt-2 items-center">
                    <Star fill="gold" color="gold" size={18}/>
                    <Star fill="gold" color="gold" size={18}/>
                    <Star fill="gold" color="gold" size={18}/>
                    <Star fill="gold" color="gold" size={18}/>
                    <Star fill="gold" color="gold" size={18}/>
                    <p className="text-md ml-0.5 font-semibold">5.0</p>
                  </div>
                  <div className="flex justify-between mt-3 items-center">
                    <p className='text-2xl font-semibold'>${data.price}</p>
                    <Separator orientation="vertical" />
                    <Verified size={35} fill='green' color='white'/>
                    <Separator orientation="vertical" />
                    <Button className="" variant="commerceOutline">Buy Now</Button>
                  </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
        
    </Splide>
    </div>

  );
}
