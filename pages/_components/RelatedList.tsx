import React from 'react';
import CardRelated from "@/pages/_components/CardRelated";
import Link from 'next/link';

export default function RelatedList({ relatedArticles }: any) {
  return (
    <div className='container mx-auto w-full sm:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-xl'>
      <div className="sm:grid grid-cols-3  sm:grid-cols-2 lg:grid-cols-3 xl: sm:gap-6 px-4 sm:px-10 lg:px-0">
        {relatedArticles.map((related) => (
          <CardRelated key={related.id} related={related} />
        ))}
      </div>

    </div>
  );
}
