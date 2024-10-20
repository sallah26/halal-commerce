import Navbar from '@/components/Header/Navbar'
import TopBar from '@/components/Header/TopBar'
import React from 'react'
import DetailsMain from './DetailsMain'

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[]; // this is already an array of `Image`
  category: string;
  discount: number;
  rating: number;
  brand: string;
  model: string;
  color: string;
  size: string;
  hardDisk?: string;
  ram?: string;
  quantity: number;
};


export default function page() {

const productDetails:Product[] = [
  {
      id: 1,
      title: "Product 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      price: 100,
      images: ["/discount-products/7.webp",  "/discount-products/8.webp", "/discount-products/9.avif", "/discount-products/11.jpg"],
      category: "Electronics",
      discount: 10,
      rating: 4,
      brand: "Apple",
      model: "Macbook Pro",
      color: "Grey",
      size: "15 inch",
      hardDisk: "512 GB SSD",
      ram: "16 GB",
      quantity: 1
  },
] 
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center px-3" >
    <TopBar />
    <Navbar Bg={false}/>
    <DetailsMain productData={productDetails}/>
    </main>
  )
}
