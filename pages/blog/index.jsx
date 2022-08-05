import Link from 'next/link';
import React from 'react'
import { Blog } from '../../components';
import { getAllArticles } from '../api/api';

const BlogHome = ({ allArticles }) => {
  console.log(allArticles)
  return (
    <div className="flex flex-col min-h-screen items-center py-40">
      <Blog />
      {allArticles.map((article) => (
        <div key={article.slug}>
          <p>
            <Link as={`/blog/${article.slug}`} href="/blog/[slug]">
              <a className="hover:underline">{article.title}</a>
            </Link>
          </p>
          <p>{article.date}</p>
          <p>{article.author.name}</p>
          <div>---</div>
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

