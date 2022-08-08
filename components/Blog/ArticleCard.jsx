import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ArticleHeader from './ArticleHeader';
import Avatar from './Avatar';
import CoverImage from './CoverImage';

const ArticleCard = ({ article }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-[20rem] mb-6'>
        <Link as={`/blog/${article.slug}`} href="/blog/[slug]">
          <img
            src={article.coverImage}
            alt={article.title}
            className="object-top absolute h-[20rem] w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg cursor-pointer"
          />
        </Link>
      </div>
      <Link as={`/blog/${article.slug}`} href="/blog/[slug]">
        <h1 className='transition duration-300 text-center cursor-pointer 
      mb-8 hover:text-pink-600 text-3xl font-semibold'>
          {article.title}
        </h1>
      </Link>
      <div className="max-w-2xl mx-auto">
        <div className="block text-center items-center justify-center mb-3 md:mb-6 w-full">
          <div className="flex items-center justify-center">
            <Image src={article.author.picture} className="rounded-full" width="40" height="40" alt={article.author.name} />
            <div className="inline text-xl font-bold pl-4">{article.author.name}</div>
          </div>
        </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:p-8 mb-8'>{article.excerpt}</p>
    </div>
  )
}

export default ArticleCard;