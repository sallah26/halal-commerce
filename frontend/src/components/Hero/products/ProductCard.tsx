interface ProductCardProps {
  img: string | StaticImageData;
  price: number;
  title: string;
  description: string;
}
  import type * as React from "react"

  import imggg from "/Feauterd-products/Camera.png"
  import sec from "/Feauterd-products/Camera(2).png"
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image, { type StaticImageData } from "next/image";
import { Star } from "lucide-react";
  
  const ProductCard: React.FC<ProductCardProps> = ({ title, description, img,  price }) => {
    return (
      <Card className="w-screen max-w-[317px] border-[2px] shadow-xl flex flex-col">
        <CardHeader className="flex flex-col items-center justify-center">
            <Image  src={img} alt={`${title} image`} width={230} height={23} className="w-40 md:w-60"/>
        </CardHeader>
        <CardContent>
          <CardTitle className="w-full mb-2 flex justify-between items-center">
            <p className="flex pr-2 text-2xl md:text-3xl line-clamp-2 md:line-clamp-2 ">{title}</p>
            <p className="text-PrimaryColor text-2xl md:text-3xl">${price}</p>
          </CardTitle>
            <p className="text-left text-sm md:text-[16px] opacity-95 line-clamp-1 md:line-clamp-2">
                {description}
            </p>
         <div className="rate flex gap-0.5 mt-2 items-center">
          <Star fill="gold" color="gold" size={15}/>
          <Star fill="gold" color="gold" size={15}/>
          <Star fill="gold" color="gold" size={15}/>
          <Star fill="gold" color="gold" size={15}/>
          <Star fill="gold" color="gold" size={15}/>
          <p className="text-sm ml-0.5 font-semibold">4.0</p>
         </div>
        </CardContent>
        <div className="px-4 pb-2 md:pb-4 flex gap-2 justify-between items-center">
            <Button className="w-full" variant="commerceOutline">Add to cart</Button>
            <Button className="w-full" variant="commerce">See Details</Button>
        </div>
      </Card>
    )
  }
  

  export default ProductCard;