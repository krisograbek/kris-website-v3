import React from 'react'
import MarkdownComponent from '../MarkdownComponent';


const ArticleDetails = ({ article }) => {
  return (
    <div className='text-white '>
      <div className='text-2xl md:text-3xl mb-8'>
        {article.title}
      </div>
      <div className='mb-8 md:flex md:justify-center'>
        <img src={article.coverImage} alt="cover Image" className='rounded-lg w-full' />
      </div>
      <MarkdownComponent content={article.content} />
    </div>
  )
}

export default ArticleDetails;