import React, { ReactNode } from 'react';


interface FooterLink {
  tilte : string,
  children :ReactNode
}
export default function FooterLinks({tilte , children}:FooterLink) {
  return (
    <div className=''>
       <h4 className='text-customblue pt-5'> {tilte} </h4>
       <div>
         <ul>
            {children}
         </ul>
       </div>
    </div>
  );
}
