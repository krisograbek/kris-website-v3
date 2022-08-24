import React from 'react'
import markdownStyles from './markdown-styles.module.css'

const MarkdownComponent = ({ content }) => {
  return (
    <div className='w-full'>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default MarkdownComponent;