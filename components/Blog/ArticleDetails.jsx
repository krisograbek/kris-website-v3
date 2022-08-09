import React from 'react'
import markdownStyles from '../markdown-styles.module.css'


// Questions:
// What does get rendered to a blockquote?
const ArticleDetails = ({ article }) => {
  return (
    <div className='text-white'>
      <div className='mb-8 rounded-md'>
        <img src={article.coverImage} alt="cover Image" />
      </div>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

    </div>
  )
}

export default ArticleDetails;