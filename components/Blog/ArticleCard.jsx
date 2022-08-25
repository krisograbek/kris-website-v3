import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const ArticleCard = ({ article }) => {
  const parseDate = dateStr => (
    new Date(dateStr).toLocaleDateString('en-US', { day: "numeric", month: 'long', year: 'numeric' })
  )
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-6 pb-6 mb-6'>
      <div className='relative overflow-hidden shadow-md pb-[20rem] mb-6'>
        <Link as={`/blog/${article.slug}`} href="/blog/[slug]">
          <img
            src={article.coverImage}
            alt={article.title}
            className="object-top absolute h-[20rem] w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg cursor-pointer"
          />
        </Link>
      </div>
      <Link as={`/blog/${article.slug}`} href="/blog/[slug]">
        <h1 className='transition duration-300 text-center cursor-pointer 
      mb-4 hover:text-pink-600 text-3xl font-semibold'>
          {article.title}
        </h1>
      </Link>
      <div className="max-w-2xl mx-auto">
        <div className="block text-center items-center justify-center mb-3 w-full">
          <div className='pt-2'>
            {parseDate(article.date)}
          </div>
          {/* <div className="flex items-center justify-center">
            <Image src={article.author.picture} className="rounded-full" width="40" height="40" alt={article.author.name} />
            <div className="inline font-semibold pl-4">{article.author.name}</div>
          </div> */}
        </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 py-2 mb-2'>{article.excerpt}</p>
      <Link as={`/blog/${article.slug}`} href="/blog/[slug]">
        <p className='text-right text-lg text-pink-600 font-normal px-4 hover:underline cursor-pointer'>
          Read more...
        </p>
      </Link>
    </div>
  )
}

export default ArticleCard;