import Link from 'next/link';
import React from 'react'
import ArticleHeader from './ArticleHeader';
import CoverImage from './CoverImage';

const ArticleCard = ({ article }) => {
  return (
    <div>
      <CoverImage title={article.title} src={article.coverImage} slug={article.slug} />
      <ArticleHeader title={article.title} author={article.author} slug={article.slug} />
    </div>
  )
}

export default ArticleCard;