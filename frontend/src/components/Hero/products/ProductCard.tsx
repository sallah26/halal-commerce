interface ProductCardProps {
  img: string | StaticImageData;
  price: number;
  title: string;
  description: string;
}
  import * as React from "react"

  import imggg from "../../assets/Feauterd-products/Camera.png"
  import sec from "../../assets/Feauterd-products/Camera(2).png"
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Image, { StaticImageData } from "next/image";
import { Star } from "lucide-react";
  
  const ProductCard: React.FC<ProductCardProps> = ({ title:title, description:description, img:img,  price:price }) => {
    return (
      <Card className="w-[300px] border-[2px] shadow-xl flex flex-col">
        <CardHeader className="flex flex-col items-center justify-center">
            <Image  src={img} alt={`${title} image`} width={230} height={23}/>
        </CardHeader>
        <CardContent>
          <CardTitle className="w-full mb-2 flex justify-between items-center">
            <p className="flex pr-2  ine-clamp-1">{title}</p>
            <p className="text-PrimaryColor text-3xl">${price}</p>
          </CardTitle>
            <p className="text-left text-[16px] opacity-95 ine-clamp-2">
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
        <div className="px-4 pb-3 flex gap-2 justify-between items-center">
            <Button className="w-full" variant="commerceOutline">Add to cart</Button>
            <Button className="w-full" variant="commerce">Buy Now</Button>
        </div>
      </Card>
    )
  }
  

  export default ProductCard;