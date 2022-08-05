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
          <a className="hover:underline">{title}</a>
        </Link>
      </ArticleTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div> */}
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </div>
  )
}

export default ArticleHeader;