import React from 'react';
import { LucideIcon } from 'lucide-react'; // Ensure you have the correct type for Lucide icons
import "../../../app/globals.css"
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  path: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon: Icon, path }) => {
  return (
    <Link href={path} className="category-card w-38 md:w-44 hover:border-PrimaryColor hover:shadow-PrimaryColor items-center shadow-xl hover:shadow-md hover:transition-transform  flex border-[1px] border-slate-300 p-4 md:py-6 rounded-lg flex-col justify-evenly gap-4 md:gap-10">
      <Icon className='size-16 md:size-32' color='#420690' stroke="#420690"/>
      <h2 className='text-lg font-semibold'>{title}</h2>
    </Link>
  );
};

export default CategoryCard;
