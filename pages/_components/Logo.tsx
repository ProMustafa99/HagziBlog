import Link from 'next/link';
import React from 'react';

export default function Logo() {
    return (
        <Link href="/blog" className=''>
            <img src="/logo.webp" alt="Blog Logo" width={150} height={54} />
        </Link>
    );
}
