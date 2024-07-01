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
    {
      id: 7,
      title: 'Clothing',
      path: "/category",
      icon: Shirt,
    },
   
  ];

  return (
    <div className=" w-full my-14 flex flex-col items-start justify-center" >
      <div className="flex flex-col ">
        <p className='py-5 text-3xl font-semibold'>Browse products by category</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-7">

      {categoryData.map((category) => (
        
          <CategoryCard key={category.id} path={category.path} title={category.title} icon={category.icon} />
        ))}
      </div>
    </div>
    </div>
  );
}
