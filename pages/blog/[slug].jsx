import React from 'react'
import { getAllArticles, getArticleBySlug } from '../api/api';
import markdownToHtml from '../api/markdownToHTML';
import { ArticleDetails } from '../../components';
import Link from 'next/link';

const ArticlePage = ({ article }) => {
  return (
    <div className='pb-32 pt-10 container mx-auto md:px-5 max-w-screen-lg'>
      <div className='flex flex-col justify-center items-center mx-auto w-full md:w-3/4 lg:w-2/3'>
        <Link href="/blog">
          <div className='text-pink-400 font-bold mb-16 hover:underline cursor-pointer self-start'>
            Back to articles
          </div>
        </Link>
        <ArticleDetails article={article} />
      </div>
    </div>
  )
}

export default ArticlePage;

export const getStaticProps = async ({ params }) => {
  const article = getArticleBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(article.content || '')

  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  }
}

export const getStaticPaths = async () => {
  const articles = getAllArticles(['slug'])

  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article.slug,
        },
      }
    }),
    fallback: false,
  }
}
