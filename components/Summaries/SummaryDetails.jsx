import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import MarkdownComponent from '../MarkdownComponent';

const SummaryDetails = ({ summary }) => {
  return (
    <div className='text-white pt-32 '>
      <div className='flex gap-6 pb-12 border-b border-blue-300 '>
        <div className='flex-auto relative h-60'>
          <Image src={summary.coverImage} alt="cover Image" layout='fill' objectFit='contain' />
        </div>
        <div className='w-2/3 flex flex-col justify-center'>
          <div className='text-2xl pb-2'>
            {summary.title}
          </div>
          <div className='text-xl pb-4'>
            {summary.author}
          </div>
          <div className='text-lg pb-4'>
            First published: {summary.year}
          </div>
        </div>
      </div>
      {/* <div className='mb-8 md:flex md:justify-center'>
        <img src={summary.coverImage} alt="cover Image" className='rounded-lg w-full' />
      </div> */}
      <MarkdownComponent content={summary.content} />
    </div>

  )
}

export default SummaryDetails;