import React from 'react';

export default function FooterLinks({tilte , children}) {
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
