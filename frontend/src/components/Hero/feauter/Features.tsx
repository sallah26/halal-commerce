
import { Button } from '@/components/ui/button'
import Image from 'next/image'
    
      import { features, title } from 'process'
import React from 'react'
import shipp from "../../assets/Free shipping-cuate(1).png"
import hr24 from "../../assets/24hr.jpg"
import secure from "../../assets/8767.jpg"


export default function Features() {
  const featuresData = [
    {
      "id": 1,
      "title": "Free Shipping",
      "img": shipp,
      "description": "Enjoy fast and free shipping on all orders with no minimum purchase required."
    },
    {
      "id": 2,
      "title": "24/7 Support Online",
      "img": hr24,
      "description": "Our support team is available around the clock to assist you anytime."
    },
    {
      "id": 3,
      "title": "Secure Payment",
      "img": secure,
      "description": "Your transactions are protected with top-notch security measures for safe shopping."
    }
  ]
  return (
    <div className=" w-full my-14 flex flex-col items-start max-h-[37rem]" >
        <div className="flex items-center  justify-between">
            <p className='py-5 text-3xl font-semibold'>Our Dedicated features</p>
            {/* <Button variant="commerce" size="commerce" className='flex items-center gap-2 justify-center'>View All Products <ArrowRight /></Button> */}
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuresData.map((feature) => {
              return (
                <div className=" rounded-xl border-[2px]   border-slate-300 shadow-xl flex flex-col items-center justify-center gap-4 p-4">
                    <Image src={feature.img} alt={`features img`} width={250}/>
                    <p className="text-2xl font-semibold">{feature.title}</p>
                    <p className="text-lg text-center">{feature.description}</p>
                </div>
              )
            })}
            
        </div>

    </div>
  )
}
