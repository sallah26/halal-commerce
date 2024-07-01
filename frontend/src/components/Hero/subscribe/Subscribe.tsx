import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function Subscribe() {
  return (
    <div className=" w-full my-14 lg:my-20 flex flex-col items-center max-h-[37rem]" >
 
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="txt lg:w-1/2">
            <p className="text-4xl font-semibold">Join us & Get Updates</p>
            <p className="text-lg mt-2">Sign up and get updates on our products, new arrivals, discounts and different news and updates</p>
        </div>
        <div className="flex flex-col md:flex-row w-full max-w-lg  items-center space-x-4">
      <Input type="email" placeholder="Email Address" className='outline-none border-slate-500 text-lg border-[2px]' />
      <Button variant="commerce" className='text-lg rounded-md'>Subscribe</Button>
    </div>
        
    </div>

</div>
  )
}
