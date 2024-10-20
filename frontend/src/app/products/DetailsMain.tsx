"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import type { Product } from './page'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

interface detailsProps {
    productData: Product[]
}

export default function DetailsMain({productData}: detailsProps) {  

    const [mainImage, setMainImage] = useState(productData[0].images[0]);
    const [quantity, setQuantity] = useState(0)
    return (
    <section className='w-full flex items-center justify-center py-10 md:py-20 mb-80'>
        {productData.map((product)=> {
        return(
            <div key={product.id} className="flex flex-col gap-6 w-full max-w-[1200px] ">

        <div   className='w-full flex flex-col md:flex-row gap-4'>
            <div className="flex w-full  md:w-[55%]"> 
                <div className="flex w-full flex-col-reverse gap-2 md:gap-4 md:flex-row">
                    <div className="flex md:flex-col  gap-2 md:gap-4 md:w-20% ">
                        {product.images.map((img, index) => {
                            return (
                                <Image onClick={()=>setMainImage(img)} className={cn('w-16 rounded-lg border-2 md:p-1 border-black/20 hover:cursor-pointer md:w-32', mainImage === img ? "border-black/40 shadow-2xl" : "")} key={img} src={img} width={100} height={100} alt='image'/>
                                // <Image onClick={()=>setMainImage(img)} className='w-16 md:w-32' key={img} src={img} width={100} height={100} alt='image'/>
                            )
                        })}
                    </div>
                    <div className="w-full">  
                        <Image className='w-full border-2 md:p-4 shadow-2xl rounded-lg border-black/20' src={mainImage} unoptimized={true} width={100} height={100} alt='image'/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1  w-full md:w-[45%]">
            <p className="flex text-PrimaryColor font-bold text-2xl md:text-3xl ">{productData[0].title}</p>
            {/* <p className="text-PrimaryColor text-2xl md:text-3xl">${productData[0].price}</p> */}
            <p className="text-sm md:text-[16px] opacity-95 ">
                {productData[0].description}
            </p>
         <div className="rate flex gap-0.5 md:gap-1 my-1 items-center">
          <Star fill="gold" color="gold" size={15}/>
          <Star fill="gold" color="gold" size={15}/>
          <Star fill="gold" color="gold" size={15}/>
          <Star fill="gold" color="gold" size={15}/>
          <Star fill="gold" color="gold" size={15}/>
          <p className="text-sm md:text-lg ml-1 font-semibold"> (490 reviews)</p>
         </div>
         <p className="flex text-PrimaryColor font-semibold text-2xl md:text-4xl  "><span className='line-through mr-4'>${productData[0].discount}</span> ${productData[0].price} Fixed</p>
        <p className="md:text-lg">Color : <span className='font-bold'>{productData[0].color}</span></p>
        <p className="md:text-lg">Model : <span className='font-bold'>{productData[0].model}</span></p>
        <p className="md:text-lg">Brand : <span className='font-bold'>{productData[0].brand}</span></p>
        <p className="md:text-lg">Size : <span className='font-bold'>{productData[0].size}</span></p>
        <p className="md:text-lg">Quantity : <span className='font-bold'>{productData[0].quantity}</span></p>
        {productData[0].hardDisk && <p className="md:text-lg">Hard Disk : <span className='font-bold'>{productData[0].hardDisk}</span></p>}
        {productData[0].ram && <p className="md:text-lg">RAM : <span className='font-bold'>{productData[0].ram}</span></p>}
        <div className="flex gap-2 mt-2 items-center">
            <div className="flex items-center  justify-center text-neutral-800">
                <Button onClick={()=>setQuantity(quantity - 1)} disabled={quantity === 0} className={cn(quantity === 0 ? 'cursor-wait' : '', 'p-2 px-4 border-2 border-neutral-300 bg-neutral-200 rounded-none rounded-s-2xl hover:bg-neutral-300 text-black font-bold text-2xl h-fit flex items-center justify-center', )}>-</Button>
                <span className='text-lg border-y-2 px-3 p-1 border-neutral-300'>{quantity}</span>
                <Button onClick={()=>setQuantity(quantity + 1)} className={cn('p-2  px-4 border-2 border-neutral-300 bg-neutral-200 rounded-none rounded-e-2xl hover:bg-neutral-300 text-black font-bold text-2xl h-fit flex items-center justify-center', )}>+</Button>
            </div>
            <div className="flex flex-col">
                <p>Only <span className='font-semibold text-red-500'>{productData[0].quantity}</span> items are left!</p>
            </div>

        </div>
        <div className="mt-2 flex gap-4 items-center">
            <Button className="text-md px-6" variant="commerceOutline">Add to cart</Button>
            <Button className="text-md px-6" variant="commerce">Buy Now</Button>
        </div>
      </div>
        </div>
       <div className="flex mt-20">
                <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specification">Specification</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium fuga quae dolorem voluptates eaque id placeat, nam delectus repellat provident maxime atque adipisci, tempora at eligendi architecto non reiciendis recusandae?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium fuga quae dolorem voluptates eaque id placeat, nam delectus repellat provident maxime atque adipisci, tempora at eligendi architecto non reiciendis recusandae?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium fuga quae dolorem voluptates eaque id placeat, nam delectus repellat provident maxime atque adipisci, tempora at eligendi architecto non reiciendis recusandae?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium fuga quae dolorem voluptates eaque id placeat, nam delectus repellat provident maxime atque adipisci, tempora at eligendi architecto non reiciendis recusandae?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium fuga quae dolorem voluptates eaque id placeat, nam delectus repellat provident maxime atque adipisci, tempora at eligendi architecto non reiciendis recusandae?
            </TabsContent>
            <TabsContent value="specification">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem a assumenda voluptatibus deserunt saepe unde, facilis doloremque odio autem nam repudiandae quas praesentium reprehenderit, temporibus sit animi et laudantium quibusdam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem a assumenda voluptatibus deserunt saepe unde, facilis doloremque odio autem nam repudiandae quas praesentium reprehenderit, temporibus sit animi et laudantium quibusdam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem a assumenda voluptatibus deserunt saepe unde, facilis doloremque odio autem nam repudiandae quas praesentium reprehenderit, temporibus sit animi et laudantium quibusdam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem a assumenda voluptatibus deserunt saepe unde, facilis doloremque odio autem nam repudiandae quas praesentium reprehenderit, temporibus sit animi et laudantium quibusdam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem a assumenda voluptatibus deserunt saepe unde, facilis doloremque odio autem nam repudiandae quas praesentium reprehenderit, temporibus sit animi et laudantium quibusdam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem a assumenda voluptatibus deserunt saepe unde, facilis doloremque odio autem nam repudiandae quas praesentium reprehenderit, temporibus sit animi et laudantium quibusdam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem a assumenda voluptatibus deserunt saepe unde, facilis doloremque odio autem nam repudiandae quas praesentium reprehenderit, temporibus sit animi et laudantium quibusdam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem a assumenda voluptatibus deserunt saepe unde, facilis doloremque odio autem nam repudiandae quas praesentium reprehenderit, temporibus sit animi et laudantium quibusdam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem a assumenda voluptatibus deserunt saepe unde, facilis doloremque odio autem nam repudiandae quas praesentium reprehenderit, temporibus sit animi et laudantium quibusdam?
            </TabsContent>
            <TabsContent value="reviews">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem a assumenda voluptatibus deserunt saepe unde, facilis doloremque odio autem nam repudiandae quas praesentium reprehenderit, temporibus sit animi et laudantium quibusdam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem a assumenda voluptatibus deserunt saepe unde, facilis doloremque odio autem nam repudiandae quas praesentium reprehenderit, temporibus sit animi et laudantium quibusdam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem a assumenda voluptatibus deserunt saepe unde, facilis doloremque odio autem nam repudiandae quas praesentium reprehenderit, temporibus sit animi et laudantium quibusdam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem a assumenda voluptatibus deserunt saepe unde, facilis doloremque odio autem nam repudiandae quas praesentium reprehenderit, temporibus sit animi et laudantium quibusdam?
            </TabsContent>
            </Tabs>
       </div>
       </div>
        )
    })
    }
        
    </section>
  )
}
