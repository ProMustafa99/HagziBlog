import { TagsList } from '@/interfaces/Tags';
import React from 'react';

export default function Tags({ tags }: TagsList) {

  const tagList = tags?.split(',');


  if (tagList?.length) {
    return (
      <div className="px-6 pb-4 flex items-baseline">
        <span className='text-duskylavender text-sm mr-3'>Tags:</span>

        <div className="flex flex-wrap gap-2">

          {tagList?.map((tag, index) => (
            <span key={index} className="bg-cloudwhisper text-duskylavender px-3 py-2 text-sm">
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
    );
  }


  return null;
}
