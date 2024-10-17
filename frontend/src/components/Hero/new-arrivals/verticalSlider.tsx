"use client"


import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// import '../../../app/globals.css'
// import "../slider/slider.css"
import Image from 'next/image';
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
              "img": "/new-products/apple.png"
            },
            {
              "id": 2,
              "title": "Samsung Galaxy S22 Ultra",
              "description": "High-resolution camera, fast performance, S Pen integration, and stunning display for an immersive experience.",
              "price": 1199.99,
              "img":  "/new-products/samsung.png"
            },
            {
              "id": 3,
              "title": "Sony WH-1000XM4 Headphones",
              "description": "Industry-leading noise canceling headphones with superior sound quality, comfort, and long battery life.",
              "price": 349.99,
              "img":  "/new-products/headphone(1).png"
            },
            {
              "id": 4,
              "title": "JBL Flip 5 Bluetooth Speaker",
              "description": "Portable and waterproof Bluetooth speaker with powerful sound and long battery life.",
              "price": 99.99,
              "img":  "/new-products/speaker.png"
            },
            {
              "id": 5,
              "title": "Men's Casual T-Shirt",
              "description": "Comfortable and stylish casual t-shirt made from high-quality cotton fabric.",
              "price": 29.99,
              "img":  "/new-products/Tshirt.png"
            },
            {
              "id": 6,
              "title": "Women's Summer Dress",
              "description": "Elegant and lightweight summer dress perfect for casual outings and beach days.",
              "price": 49.99,
              "img":  "/new-products/niqab.png"
            },
            {
              "id": 7,
              "title": "Logitech G502 Hero Mouse",
              "description": "High-performance gaming mouse with customizable features, ergonomic design, and precision tracking.",
              "price": 79.99,
              "img":  "/new-products/mouse(1).png"
            }
          ]
  
  return (
    <div className="min-h-full">

    <Splide
      options={ {
        type: 'loop',
        perPage: 3,
        gap: '0.1rem',
        height: "39rem",

                // make it responsive
        breakpoints: {
       
       
          700: {
            gap: '1rem',
            height: "20rem",
            perPage: 2,
          },
         
        },
        autoplay: true,
        pagination: false,
        arrows: false,
        heightRatio: 0.5,
        interval: 2000,
        direction: 'ttb',
        focus    : 'center',
        autoWidth: true,
        wheel    : true,
        speed: 1500,
        rewind: true,
      } }
      aria-label="My Favorite Images"
    >
      {productsData.map((data) => (
        <SplideSlide key={data.id} >
          <div className=" rounded-xl border-[2px]  border-slate-300  shadow-xl w-full flex  mb-3">
            <div className="grid grid-cols-3">
              <div className="col-span-1 my-2">
                <Image src={data.img} alt={`${data.title} image`} width={250} height={60} className='h-full  rounded-3xl' />
              </div>
              <div className="col-span-2 p-2 flex flex-col gap-0.5 md:justify-between">
                  <div className="flex justify-between">
                    <p className='text-lg md:text-xl line-clamp-1 font-semibold'>{data.title}</p>
                    <div className="flex items-center gap-1">

                    <Badge variant="newSm" className=''>New</Badge>
                    <Verified size={25} fill='green' className='flex md:hidden' color='white'/>
                    </div>
                  </div>
                  <p className='pt-2 pr-5 line-clamp-1 md:line-clamp-2'>{data.description}</p>
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
                    <Verified size={35} fill='green' className='hidden md:flex' color='white'/>
                    <Separator orientation="vertical" className='hidden md:block'/>
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
