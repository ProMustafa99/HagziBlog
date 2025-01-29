import React from 'react';
import Layout from './Layout';
import Image from 'next/image';
import RelatedBlog from './RelatedList';
import Spinner from './Spinner';
import Breadcrumb from './Breadcrumb';

export default function BlogView({ blogInfo , breadcrumbs}: any) {

  const { title_en: titleArticle, description_en: description, cover_image_url: CoverImage, related_articles: relatedArticles } = blogInfo || {};


  const heroImage = '/wallpaper.png';

  if (!blogInfo) {

    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
        <p className="text-gray-600 ml-4">Loading blog content...</p>
      </div>
    );
  }

  return (
    <>

      <div className=" relative" >

        <div style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', }} className=" w-full  h-96 brightness-50">
        </div>

        <div className="absolute inset-0 container mx-auto  w-full sm:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-xl h-fit top-44 ">
          <h1 className="text-white sm:text-4xl font-bold text-2xl px-4 sm:px-10 lg:px-0 ">
            {titleArticle}
          </h1>
        </div>

        <Breadcrumb breadcrumbs={breadcrumbs} />

      </div>

      <Layout>

        <div className=' relative w-full py-24 sm:py-48'>
          <Image
            src={CoverImage}
            alt="Blog Thumbnail"
            fill
            className='object-cover'
          />
        </div>

        <div className="bg-white">
          <p className="text-dustyhorizon text-sm p-5 sm:p-11 whitespace-pre-line">
            {description}
          </p>

        </div>
      </Layout>

      <RelatedBlog relatedArticles={relatedArticles} />

    </>

  );
}
