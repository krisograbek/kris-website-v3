import Link from 'next/link';
import React from 'react'
import { ArticleCard, Blog } from '../../components';
import { getAllArticles } from '../api/api';

const BlogHome = ({ allArticles }) => {
  console.log(allArticles)
  return (
    <div className="flex flex-col min-h-screen items-center py-40">
      <Blog />
      {allArticles.map((article) => (
        <div key={article.slug}>
          <ArticleCard article={article} />
        </div>
      ))}

    </div>
  )
}

export default BlogHome;

export const getStaticProps = async () => {
  const allArticles = getAllArticles([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allArticles },
  }
}

