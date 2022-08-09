import React from 'react';
import { Blog } from '../../components';
import { getAllArticles } from '../api/api';

const BlogHome = ({ allArticles }) => {
  return (
    <div className="flex flex-col min-h-screen items-center py-20">
      <Blog articles={allArticles} />
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

