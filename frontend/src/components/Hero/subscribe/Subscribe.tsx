import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function Subscribe() {
  return (
    <div className=" w-full mt-80 md:my-96 lg:my-20 flex flex-col items-center max-h-[37rem]" >
 
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="txt lg:w-1/2">
            <p className=" text-2xl md:text-3xl font-semibold">Join us & Get Updates</p>
            <p className="text-md md:text-lg mt-2">Sign up and get updates on our products, new arrivals, discounts and different news and updates</p>
        </div>
        <div className="flex w-full max-w-lg  items-center gap-2">
      <Input type="email" placeholder="Email Address" className='text-md outline-none border-slate-500 md:text-lg border-[2px]' />
      <Button variant="commerce" className='rounded-md ' >Subscribe</Button>
    </div>
        
    </div>

</div>
  )
}
