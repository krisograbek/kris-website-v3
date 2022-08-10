import Link from 'next/link';
import React from 'react'

const NavCard = ({ slug, children }) => {
  return (
    <Link href={`/${slug}`}>
      <div className='bg-white text-blue-800 font-bold w-full p-4 border-solid border-2 rounded-2xl cursor-pointer'>
        {children}
      </div>
    </Link>
  )
}

export default NavCard;