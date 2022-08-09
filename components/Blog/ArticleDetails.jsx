import React from 'react'
import markdownStyles from '../markdown-styles.module.css'


// Questions:
// What does get rendered to a blockquote?
const ArticleDetails = ({ article }) => {
  return (
    <div className='text-white '>
      <div className='mb-8 md:flex md:justify-center'>
        <img src={article.coverImage} alt="cover Image" className='rounded-lg w-full' />
      </div>
      <div className='w-full'>
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

    </div>
  )
}

export default ArticleDetails;