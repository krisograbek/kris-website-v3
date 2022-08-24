import React from 'react'
import MarkdownComponent from '../MarkdownComponent';

const SummaryDetails = ({ summary }) => {
  return (
    <div className='text-white '>
      <div className='mb-8 md:flex md:justify-center'>
        <img src={summary.coverImage} alt="cover Image" className='rounded-lg w-full' />
      </div>
      <MarkdownComponent content={summary.content} />
    </div>

  )
}

export default SummaryDetails;