import React from 'react'
import markdownStyles from '../markdown-styles.module.css'

const ArticleDetails = ({ article }) => {
  return (
    <div>
      <p>{article.title}</p>
      <p>{article.author.name}</p>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

    </div>
  )
}

export default ArticleDetails;