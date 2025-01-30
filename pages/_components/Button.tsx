import Link from 'next/link';
import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  background?: string; // Optional background prop
  href: string; 
}

export default function Button({ children, background = 'bg-azurePulse', href="#" }: ButtonProps) {
  return (
    <div className=''>
      <Link href={href}
        className=" text-blue-700
      hover:text-white border
       border-blue-700 
       hover:bg-blue-800
         font-medium 
         rounded-md 
         text-sm 
         px-3 py-3 
         text-center 
         dark:border-blue-500 
         dark:text-blue-500
          dark:hover:text-white 
          dark:hover:bg-blue-500 
          dark:focus:ring-blue-800">
        {children}
      </Link>
    </div>
  );
}
