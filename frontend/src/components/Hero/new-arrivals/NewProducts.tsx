"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Badge } from '@/components/ui/badge'

import VerticalSlider from './verticalSlider'

export default function NewProducts() {
   
      
  return (
    <div className=" w-full my-14 flex flex-col items-center p-4 lg:p-0 justify-center" >
      <div className="flex flex-col">
        <div className="flex items-center flex-wrap gap-1 py-3  justify-between">
            <p className='py-1 md:py-5 text-3xl font-semibold'>New Arrivals</p>
            <Button variant="commerce" size="commerce" className='flex items-center gap-2 justify-center'>View All Products <ArrowRight /></Button>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="single flex flex-col gap-4">
            <Card className="w-full border-[2px] border-slate-300 p-8 shadow-xl flex flex-col">
                <div className="flex w-full flex-col gap-2">
                  <div className="flex flex-col md:flex-row-reverse justify-between">

                    <Badge variant="new" className='w-fit'>New</Badge>
                    <p className='text-2xl font-semibold '>Samsung Galaxy S24 Ultra Back 
                    </p>
                  </div>
                    <p className=' lg:text-lg md:w-3/4 space-y-2 lg:space-y-4'>Smart and Lauxary Smart phone made for those who have nice and best mindset</p>
                </div>
            
            <div className="flex w-full justify-center p-5">
                <Image src={"/new-products/smsngUltra.webp"} width={311} alt='samsung products' height={120} />
            </div>
            <div className="flex lg:w-1/2 items-center  mt-2 justify-center">
            
            <Button variant="commerce" size="commerce" className='w-full flex justify-center gap-3 text-lg'>Buy it Now <ArrowRight /></Button>
            </div>
            </Card>
        </div>
        <div className="sliderN min-h-full">
            <VerticalSlider />


        {/* {productsData.map((product) => (
          <ProductCard key={product.id} img={product.img} price={product.price} title={product.title} description={product.description} />
        ))} */}
          </div>
        
      </div>
    </div>
    </div>
  )
}
