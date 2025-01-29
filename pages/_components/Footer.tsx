import React from 'react';
import Logo from './Logo';
import SocialMediaIcons from './SocialMediaIcons';
import FooterLinks from './FooterLinks';
import Link from 'next/link';

export default function Footer() {
  // Define the links for each footer section
  const propertyLinks = [
    { label: 'Villa', href: '#' },
    { label: 'Apartment', href: '#' },
    { label: 'Studio', href: '#' },
  ];

  const neighbourhoodLinks = [
    { label: 'Amman', href: '#', className: 'text-azurePulse' },
    { label: 'Abdoun', href: '#' },
    { label: 'Shmesani', href: '#' },
    { label: '7th Circle', href: '#' },
    { label: 'Jabal Amman', href: '#' },
  ];

  return (
    <footer className='bg-white container mx-auto w-full lg:max-w-screen-md xl:max-w-screen-xl py-20 sm:py-32 flex flex-col items-center  justify-between sm:flex-row sm:items-start'>

      <div>
        <Logo />
        <SocialMediaIcons />
      </div>

      <FooterLinks tilte="Property type">
        {propertyLinks.map((link, index) => (
          <li key={index} className='py-1 text-center sm:text-start '>
            <Link href={link.href} className='text-oceandepth font-bold text-sm hover:text-azurePulse'>{link.label}</Link>
          </li>
        ))}
      </FooterLinks>

      <FooterLinks tilte="Most Popular Neighbourhoods">
        {neighbourhoodLinks.map((link, index) => (
          <li key={index} className='py-1 text-center sm:text-start '>
            <Link href={link.href} className='text-oceandepth font-bold text-sm hover:text-azurePulse'>{link.label}</Link>
          </li>
        ))}
      </FooterLinks>

    </footer>
  );
}
