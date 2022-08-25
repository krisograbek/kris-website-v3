import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const SummaryCard = ({ summary }) => {
  return (
    <div className='flex flex-col pt-8 pb-12'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='md:flex-auto relative h-60'>
          <Image src={summary.coverImage} alt="cover Image" layout='fill' objectFit='contain' />
        </div>
        <div className='md:w-2/3 flex flex-col justify-center'>
          <div className='text-2xl pb-2'>
            {summary.title}
          </div>
          <div className='text-xl pb-4'>
            {summary.author}
          </div>
          <div className='text-lg pb-4'>
            First published: {summary.year}
          </div>
          <Link as={`/summaries/${summary.slug}`} href="/summaries/[slug]">
            <div className='pb-2 cursor-pointer hover:underline text-pink-600'>
              Read Summary
            </div>
          </Link>
        </div>
      </div>
      <div className='pt-8'>
        {summary.excerpt}
      </div>
    </div>
  )
}

export default SummaryCard;