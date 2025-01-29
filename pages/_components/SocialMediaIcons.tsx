import React from 'react';
import Icons from './Icons';

export default function SocialMediaIcons() {
  return (
    <div className='flex justify-center sm:justify-start'>
      <Icons srcImage='./facebook-fill-1.svg'/>
      <Icons srcImage='./instagram.svg'/>
      <Icons srcImage='./twitter-2.svg'/>
    </div>
  );
}
