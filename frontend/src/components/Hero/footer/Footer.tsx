import React from 'react'
import Image from 'next/image'
import { Copyright, FacebookIcon, LinkedinIcon, LucideMessageSquareDiff, MapPin, Phone, TwitterIcon, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='w-screen flex items-center justify-center text-white bg-PrimaryColor'>
        <div className=" max-w-[1300px] mt-0 lg:mt-14 w-full justify-between lg:my-20 flex flex-col md:flex-row items-center lg:max-h-[37rem]" >
            <div className="flex flex-col gap-4">
                <Image src="/logo-removebg-preview-dark.png" width={250} height={100} alt='logo'/>
                <div className="socials flex gap-4">
                    <FacebookIcon size={34} className='p-1 bg-slate-800 bg-opacity-50 rounded-md'/>
                    <YoutubeIcon size={34} className='p-1 bg-slate-800 bg-opacity-50 rounded-md'/>
                    <TwitterIcon size={34} className='p-1 bg-slate-800 bg-opacity-50 rounded-md'/>
                    <LinkedinIcon size={34} className='p-1 bg-slate-800 bg-opacity-50 rounded-md'/>
                </div>
                <p className="text-md flex">
                    <Copyright size={20}/>All Rights are reserved from the company!
                </p>
            </div>
            <div className="flex flex-col md:flex-row text-md gap-6 w-full p-4 lg:gap-10">
            <div className="flex flex-col gap-3">
                    <Link href={"/"} className="title text-lg font-semibold mb-3">Contact</Link>
                    <Link href={"/"} className="hover:translate-x-2 hover:opacity-60 duration-300 flex gap-3"><Phone  />+1 (251) 926-37-83670</Link>
                    <Link href={"/"} className="hover:translate-x-2 hover:opacity-60 duration-300 flex gap-3"><LucideMessageSquareDiff />selahadinhamid26@gmail.com</Link>
                    <Link href={"/"} className="hover:translate-x-2 hover:opacity-60 duration-300 flex gap-3"><MapPin />22 Golagol Tower 22th floor</Link>
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                    <Link href={"/"} className="title text-lg font-semibold mb-1">Get to know About Us</Link>
                    <Link href={"/"} className="hover:translate-x-2 hover:opacity-60 duration-300 ">About Us</Link>
                    <Link href={"/"} className="hover:translate-x-2 hover:opacity-60 duration-300 ">News & Blogs</Link>
                    <Link href={"/"} className="hover:translate-x-2 hover:opacity-60 duration-300 ">Contact Us</Link>
                    <Link href={"/"} className="hover:translate-x-2 hover:opacity-60 duration-300 ">How to Shop</Link>
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                    <Link href={"/"} className="title text-lg font-semibold mb-3">Orders & Returns</Link>
                    <Link href={"/"} className="hover:translate-x-2 hover:opacity-60 duration-300 ">Messaging & Delivery</Link>
                    <Link href={"/"} className="hover:translate-x-2 hover:opacity-60 duration-300 ">Payment & Exchange</Link>
                    <Link href={"/"} className="hover:translate-x-2 hover:opacity-60 duration-300 ">Selling Tags</Link>
                    <Link href={"/"} className="hover:translate-x-2 hover:opacity-60 duration-300 ">Payment</Link>
                </div>
               <Link href="https://selahadin.tech" className='self-center text-blue-100'>developed by <span className='text-blue-300'>Selahadin H.</span></Link>
            </div>
    

</div>
</div>
  )
}
