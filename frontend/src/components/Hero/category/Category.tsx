import React from 'react';
import CategoryCard from './CategoryCard';
import { Headphones, Laptop, LucideRockingChair, Phone, RockingChair, RockingChairIcon, Shirt, Smartphone, SmartphoneIcon, Watch } from 'lucide-react';
import "../../../app/globals.css"
import Link from 'next/link';

export default function Category() {
  const categoryData = [
    {
      id: 1,
      title: 'Laptops',
      path: "/category",
      icon: Laptop,
    },
    {
      id: 2,
      title: 'Mobile',
      path: "/category",
      icon: SmartphoneIcon,
    },
    {
      id: 3,
      title: 'Watch',
      path: "/category",
      icon: Watch,
    },
    {
      id: 4,
      title: 'Headphone',
      path: "/category",
      icon: Headphones,
    },
    {
      id: 5,
      title: 'Rocking Chair',
      path: "/category",
      icon: LucideRockingChair,
    },
    {
      id: 6,
      title: 'Clothing',
      path: "/category",
      icon: Shirt,
    },
   
   
  ];

  return (
    <div className=" w-full my-14 flex flex-col gap-4 md:gap-6 items-center lg:items-start justify-center" >
        <p className='text-2xl md:text-3xl font-semibold'>Browse products by category</p>
      <div className="flex flex-wrap gap-4 md:gap-7">

      {categoryData.map((category) => (
        
          <CategoryCard key={category.id} path={category.path} title={category.title} icon={category.icon} />
        ))}
      </div>
    </div>
  );
}
