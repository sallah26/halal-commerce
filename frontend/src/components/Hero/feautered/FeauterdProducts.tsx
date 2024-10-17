import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import ProductCard from '../products/ProductCard'

export default function FeauterdProducts() {
    
    const productsData = [
        {
          "id": 1,
          "price": 23,
          "img": "/Feauterd-products/mouse.png",
          "title": "Logitech Wireless Mouse",
          "description": "Wireless mouse with ergonomic design and long battery life"
        },
        {
          "id": 2,
          "price": 26,
          "img":  "/Feauterd-products/earbud.png",
          "title": "Sony Noise-Cancel Headp hones",
          "description": "Industry-leading noise canceling technology"
        },
        {
          "id": 3,
          "price": 143,
          "img":  "/Feauterd-products/Camera(2).png",
          "title": "Canon DSLR Camera",
          "description": "High-resolution DSLR with multiple lenses"
        },
        {
          "id": 4,
          "price": 17,
          "img":  "/Feauterd-products/earbud.png",
          "title": "Apple AirPods Pro Earbud",
          "description": "True wireless earbuds with charging case"
        },
        {
          "id": 5,
          "price": 4612,
          "img" : "/Feauterd-products/gaming-pc.png",
          "title": "MSI Gaming Laptop",
          "description": "Laptops with Intel 12th-gen & Nvidia GeForce RTX 30"
        },
        {
          "id": 6,
          "price": 149,
          "img": "/Feauterd-products/home-camera.png",
          "title": "Lorex WiFi Smart Outdoor Camera",
          "description": "True wireless Camera with charging feature"
        },
        {
          "id": 7,
          "price": 87,
          "img":  "/Feauterd-products/drone.png",
          "title": "Remote Control Drone",
          "description": "Smart and long life drone with smart controlling functionality"
        },
        {
          "id": 8,
          "price": 98,
          "img":  "/Feauterd-products/headphone.png",
          "title": "Gaming Chair with Speakers",
          "description": "Best Gaming Chair with Speakers for devs "
        },
        
      ]
      
  return (
    <div className=" w-full my-4 md:my-14 min-w-80 flex flex-col gap-4 items-start md:items-center justify-center" >
        <div className="w-full flex items-center flex-wrap  justify-between">
            <p className=' md:py-5 text-2xl md:text-3xl font-semibold'>Featured Products</p>
            <Button variant="commerce" size="commerce" className='hidden md:flex items-center gap-2 justify-center mb-4 md:mb-0'>View All Products <ArrowRight /></Button>
        </div>
      <div className="flex flex-wrap gap-6  md:gap-y-10 justify-center">
        
        {productsData.map((product) => (
          <ProductCard key={product.id} img={product.img} price={product.price} title={product.title} description={product.description} />
        ))}
        
      </div>
      <Button variant="commerce" size="commerce" className='flex md:hidden items-center gap-2 justify-center mb-4 md:mb-0'>View All Products <ArrowRight /></Button>
    </div>
  )
}
