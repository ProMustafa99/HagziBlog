import React from 'react';
import Tags from '@/pages/_components/Tags';
import Image from 'next/image';
import ReadMoreButton from './ReadMoreButton';



export default function BlogPostCard({ searchResults }: any) {

  const { id, title_en, description_en, cover_image_url, tags } = searchResults;

  return (

    <div className=" bg-white rounded-lg shadow-md overflow-hidden mb-6">

      <div className=' relative w-full py-32 sm:py-48'>
        <Image
          src={cover_image_url}
          alt="Blog Thumbnail"
          fill
          className='object-cover'
        />
      </div>

      <h2 className="text-lg font-bold p-6 text-oceandepth">
        {title_en}
      </h2>

      <div className="px-6 pb-4">
        <p className="text-dustyhorizon text-sm">
          {description_en}
        </p>
      </div>

      <Tags tags={tags} />

      <div className='border-t flex justify-end items-center px-6 py-4 my-2'>
        <ReadMoreButton pathLink='/blog' id={id} />
      </div>


    </div>
  );
}
