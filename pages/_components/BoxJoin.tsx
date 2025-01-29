import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

export default function BoxJoin() {
  return (
    <div className='relative w-full'>

      <div className='brightness-50 rounded-lg relative py-44 sm:py-32'>
        <Image
          src="/join.jpg"
          alt="Blog Thumbnail"
          className='"brightness-50 rounded-lg object-cover'
          fill
        />
      </div>

      <div className='absolute bottom-10 px-7 font-bold'>
        <h5 className='w-60 text-lg  text-white my-5'> Do you want to join our real estate network? </h5>
        <Link href="#" className='bg-azurePulse text-white py-3 px-5 rounded-lg text-sm hover:bg-oceandepthHover transition-colors duration-3000'>
          Become an Agent
        </Link>
      </div>

    </div>
  );
}
