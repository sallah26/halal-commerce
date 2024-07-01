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
    <Link href={path} className="category-card max-w-48 hover:border-PrimaryColor hover:shadow-PrimaryColor items-center shadow-xl hover:shadow-md hover:transition-transform  flex border-[1px] border-slate-300 p-4 py-6 rounded-lg flex-col justify-evenly gap-10">
      <Icon size={70} color='#420690' stroke="#420690"/>
      <h2 className='text-lg font-semibold'>{title}</h2>
    </Link>
  );
};

export default CategoryCard;
