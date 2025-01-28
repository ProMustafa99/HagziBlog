import Link from 'next/link';
import React from 'react';
import { Josefin_Sans } from 'next/font/google';

const jsosefin = Josefin_Sans({
  subsets: ['latin'],
  display: "swap"
});


export default function Menu() {
  return (
    <nav className={`w-[35%] relative ${jsosefin.className}`}>
      <ul className='flex flex-row justify-evenly h-full items-center'>
        <li className='text-azurePulse'>
          <Link href="#">Apartment</Link>
        </li>

        <li className='text-azurePulse'>
          <Link href="#">Studio</Link>
        </li>

        <li className='text-azurePulse'>
          <Link href="#">Villa</Link>
        </li>

        <li className='text-azurePulse'>
          <Link href="#">Blog</Link>
        </li>

        <li className='text-azurePulse'>
          <Link href="#">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
