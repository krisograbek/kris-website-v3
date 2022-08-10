import Link from 'next/link'
import React from 'react'


const AboutAuthor = () => {
  return (
    <Link href="/about">
      <div className='lg:sticky relative top-8 bg-white shadow-lg rounded-lg p-8 mb-8 cursor-pointer'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
          About Author
        </h3>
        <p>
          I'm Kris, and I love learning. I spend a lot of time reading books about learning, personal growth, productivity, and finances.
        </p>
        <p>
          On this website, I'm sharing the key takeaways from books as well as personal insights.
        </p>
      </div>
    </Link>
  )
}

export default AboutAuthor