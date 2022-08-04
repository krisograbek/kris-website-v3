import Link from 'next/link';
import React from 'react'

const categories = [
  { slug: "about", name: "About" },
  { slug: "projects", name: "Projects" },
  { slug: "blog", name: "Blog" },
]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block mt-2 align-middle cursor-pointer font-semibold'>
          <Link href="/">
            <span>
              Home
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.map((category) => (
            <Link key={category.slug} href={`/${category.slug}`} >
              <span className='md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header;