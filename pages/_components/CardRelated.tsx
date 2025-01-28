import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReadMoreButton from './ReadMoreButton';

export default function CardRelated({ related }: any) {

  const { id, title_en, cover_image_url } = related;

  return (
    <article className='mb-11 shadow-lg'>

      <div className='relative py-32'>
        <Image src="/test.png" fill className='rounded-tl-lg rounded-tr-lg' alt={`Image/${title_en}`} />
      </div>

      <div className='bg-white p-4'>

        <h3 className='text-oceandepth font-bold'> {title_en} </h3>

        <div className='py-4'>
          <ReadMoreButton pathLink='/blog' id={id} />
        </div>
      </div>
    </article>
  );
}
