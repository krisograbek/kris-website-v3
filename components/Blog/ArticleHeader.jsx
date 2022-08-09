import Link from 'next/link';
import React from 'react'
import ArticleTitle from './ArticleTitle';
import Avatar from './Avatar';

const ArticleHeader = ({ title, author, slug }) => {
  console.log(author)
  return (
    <div>
      <ArticleTitle>
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          {title}
        </Link>
      </ArticleTitle>
      <div className="max-w-2xl mx-auto">
        <div className="block text-center items-center justify-center mb-3 md:mb-6 w-full">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </div>
  )
}

export default ArticleHeader;