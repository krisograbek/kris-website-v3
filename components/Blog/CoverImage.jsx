import Link from "next/link"


const CoverImage = ({ title, src, slug }) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className='hover:shadow-lg transition-shadow duration-200'
    />
  )
  return (
    <div className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg">
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage;