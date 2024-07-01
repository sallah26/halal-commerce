import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import ProductCard from '../products/ProductCard'
import cameraImg from "../../assets/Feauterd-products/Camera(2).png"
import mouseImg from "../../assets/Feauterd-products/mouse.png"
import earbudImg from "../../assets/Feauterd-products/earbud.png"
import headphoneImg from "../../assets/Feauterd-products/headphone.png"
import pcImg from "../../assets/Feauterd-products/gaming-pc.png"
import chairImg from "../../assets/Feauterd-products/chair-devs.png"
import droneImg from "../../assets/Feauterd-products/drone.png"
import camImg from "../../assets/Feauterd-products/home-camera.png"

export default function FeauterdProducts() {
    
    const productsData = [
        {
          "id": 1,
          "price": 23,
          "img": mouseImg,
          "title": "Logitech Wireless Mouse",
          "description": "Wireless mouse with ergonomic design"
        },
        {
          "id": 2,
          "price": 26,
          "img": headphoneImg,
          "title": "Sony Noise-Cancel Headp hones",
          "description": "Industry-leading noise canceling technology"
        },
        {
          "id": 3,
          "price": 143,
          "img": cameraImg,
          "title": "Canon DSLR Camera",
          "description": "High-resolution DSLR with multiple lenses"
        },
        {
          "id": 4,
          "price": 17,
          "img": earbudImg,
          "title": "Apple AirPods Pro Earbud",
          "description": "True wireless earbuds with charging case"
        },
        {
          "id": 5,
          "price": 4612,
          "img": pcImg,
          "title": "MSI Gaming Laptop",
          "description": "Laptops with Intel 12th-gen & Nvidia GeForce RTX 30"
        },
        {
          "id": 6,
          "price": 149,
          "img": camImg,
          "title": "Lorex WiFi Smart Outdoor Camera",
          "description": "True wireless Camera with charging feature"
        },
        {
          "id": 7,
          "price": 87,
          "img": droneImg,
          "title": "Remote Control Drone",
          "description": "Smart and long life drone with smart controlling functionality"
        },
        {
          "id": 8,
          "price": 98,
          "img": chairImg,
          "title": "Gaming Chair with Speakers",
          "description": "Best Gaming Chair with Speakers for devs "
        },
        
      ]
      
  return (
    <div className=" w-full my-14 flex flex-col items-center justify-center" >
      <div className="flex flex-col">
        <div className="flex items-center  justify-between">
            <p className='py-5 text-3xl font-semibold'>Featured Products</p>
            <Button variant="commerce" size="commerce" className='flex items-center gap-2 justify-center'>View All Products <ArrowRight /></Button>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 gap-y-14">
        
        {productsData.map((product) => (
          <ProductCard key={product.id} img={product.img} price={product.price} title={product.title} description={product.description} />
        ))}
        
      </div>
    </div>
    </div>
  )
}
