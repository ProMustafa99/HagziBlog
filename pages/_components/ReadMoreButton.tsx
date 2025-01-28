import Link from 'next/link';
import React from 'react';

interface ReadMoreButtonProps {
    id: number;
    pathLink: string
}

export default function ReadMoreButton({ id, pathLink }: ReadMoreButtonProps) {
    return (
        <Link href={`${pathLink}/${id}`} className='bg-azurePulse text-white py-2 px-5 rounded-lg text-sm'>
            Read more
        </Link>
    );
}
