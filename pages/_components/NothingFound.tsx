import Image from 'next/image';
import React from 'react';

export default function NothingFound() {
  return (
    <div className='bg-white p-8 text-center flex flex-col items-center'>

      <h2 className='text-oceandepth font-bold text-3xl'>
        NothingFound
      </h2>

      <p className='py-8'> It seems we can't find what you're looking for. </p>

      <Image src={`/notfoundResult.png`} width={200} height={200} alt='Not Found'/>
    </div>
  );
}
