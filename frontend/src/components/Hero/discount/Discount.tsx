"use state"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Biohazard, BookMarkedIcon, SlidersVerticalIcon, Star, Verified } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import headsetImg from "../../assets/H220-1_headset_1024x1024@2x.webp"
import Timer from './countdown/Timer'

export default function Discount() {
  return (
    <div className=" w-full my-14 flex flex-col items-start max-h-[37rem]" >
      <div className="flex flex-col ">
        <div className=" rounded-xl border-[2px] border-slate-300 shadow-xl w-full flex  ">
            <div className="grid grid-cols-6">
                <div className='col-span-2'>
                    <Image src={headsetImg} alt={`image`} width={420} className='w-full p-3 h-full rounded-3xl ' />
                </div>
                <div className='col-span-4 py-2 mr-10 flex flex-col justify-center items-start gap-3'>
                  <Timer />
                  <p className='text-xl font-semibold text-red-600 flex gap-1 items-center'><Biohazard color='red' fill='red' /> Monthly Discounts for you</p>
                  {/* <p className='text-6xl font-bold mb-5'>00d:00h:00:00</p> */}
                  <p className='text-4xl font-semibold '>Up To 40% off on Digital Items</p>
                  <p className='text-lg pr-10 '>Discover amazing deals and save big with up to 40% off on digital items this month. Enjoy up to 40% off on your favorite digital products—don't miss out on these fantastic savings!</p>
                  <Button variant="commerce" size="commerce" className='flex max-w-60 mt-5 items-center gap-5 justify-center'>Buy it Now <ArrowRight /></Button>

                </div>
            </div>
            </div>

        </div>
    </div>
  )
}
