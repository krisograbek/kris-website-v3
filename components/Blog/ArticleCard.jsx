import Link from 'next/link';
import React from 'react'

const ArticleCard = ({ article }) => {
  return (
    <div>
      <p>
        <Link as={`/blog/${article.slug}`} href="/blog/[slug]">
          <a className="hover:underline">{article.title}</a>
        </Link>
      </p>
      <p>{article.date}</p>
      <p>{article.author.name}</p>
      <div>---</div>
    </div>
  )
}

export default ArticleCard;