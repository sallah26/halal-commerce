import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingCartIcon, User2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
 
export default function Navbar() {
  return (
    <nav className='w-screen flex justify-center items-center p-3 bg-[#B3C8CF]'>
        <div className="w-full flex justify-between lg:max-w-[1390px]  gap-4 flex-wrap items-center font-semibold">
            <div className="flex items-center flex-wrap justify-between gap-4 md:gap-6 lg:gap-10">
                <Link href="/">
                <Image src={"/logo-removebg-preview.png"} alt='Logo' width={200} height={70} className='w-28 md:w-44' /></Link>
                <Link href="/" className='opacity-60 hidden md:flex hover:opacity-100'>Categories</Link>
                <Link href="/" className='opacity-60 hidden md:flex hover:opacity-100'>Deels</Link>
                <Link href="/" className='opacity-60 hidden md:flex hover:opacity-100'>Whats New</Link>
                <Link href="/" className='opacity-60 hidden md:flex hover:opacity-100'>Delivery</Link>
                <div className="flex items-center gap-6">
                    <Link href="/" className='opacity-60  md:hidden hover:opacity-100'><User2 /></Link>
                    <Link href="/" className='opacity-60  md:hidden hover:opacity-100'><ShoppingCartIcon /></Link>
                </div>
            </div>
            <div className="profile  flex items-center gap-10">
                <div className="search flex relative">
                    <Input type="email" placeholder="Search here..." className='w-72' />
                    <Button type="submit" className='absolute right-2' variant="search"><Search width={20}/></Button>
                </div>
                    <Link href="/" className='hidden md:flex gap-1 opacity-60 hover:opacity-100'><User2 /> Account</Link>
                    <Link href="/" className='hidden md:flex gap-1 opacity-60 hover:opacity-100'><ShoppingCartIcon /> Cart</Link>

            </div>
        </div>
        </nav>
  )
}
