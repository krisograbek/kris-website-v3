import React from 'react'
import { getAllArticles, getArticleBySlug } from '../api/api';
import markdownToHtml from '../api/markdownToHTML';
import { ArticleDetails } from '../../components';

const ArticlePage = ({ article }) => {
  return (
    <div className='py-32'>
      <ArticleDetails article={article} />
      {/* {article.title} */}
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
