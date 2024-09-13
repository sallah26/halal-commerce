import React from 'react'
import logo from "../assets/logo-removebg-preview.png"
import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingCartIcon, User2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
 
export default function Navbar() {
  return (
    <nav className='w-full  lg:max-w-[1390px] '>
        <div className="flex justify-between items-center font-semibold">
            <div className="logo flex items-center gap-10">
                <Link href="/">
                <Image src={logo} alt='Logo' width={200} height={70} /></Link>
                <Link href="/" className='opacity-60 hover:opacity-100'>Categories</Link>
                <Link href="/" className='opacity-60 hover:opacity-100'>Deels</Link>
                <Link href="/" className='opacity-60 hover:opacity-100'>Whats New</Link>
                <Link href="/" className='opacity-60 hover:opacity-100'>Delivery</Link>
            </div>
            <div className="profile  flex items-center gap-10">
                <div className="search flex relative">
                <Input type="email" placeholder="Search here..." className='w-72' />
                <Button type="submit" className='absolute right-2' variant="search"><Search width={20}/></Button>
                </div>
            <Link href="/" className='flex gap-1 opacity-60 hover:opacity-100'><User2 /> Account</Link>
            <Link href="/" className='flex gap-1 opacity-60 hover:opacity-100'><ShoppingCartIcon /> Cart</Link>

            </div>
            

        </div>
        
        </nav>
  )
}
