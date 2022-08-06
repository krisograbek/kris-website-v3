import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';


const categories = [
  { slug: "blog", name: "Blog" },
  { slug: "projects", name: "Projects" },
  { slug: "about", name: "About" },
  // { slug: "journal", name: "Journal" },
  // { slug: "fav-quotes", name: "Favorite Quotes" },
]

// this implementation can be improved by creating a hook (eg. useClickOutsideMenu)
// details: https://www.youtube.com/watch?v=eWO1b6EoCnQ&ab_channel=RyanToronto

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef();
  const btnRef = useRef();

  // if menu doesn't work properly, it's probably somewhere here
  useEffect(() => {
    const closeDropdown = e => {
      if ((!menuRef.current.contains(e.target)) && (!btnRef.current.contains(e.target))) {
        console.log(e)
        setShowMenu(false);
      }
    }

    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown)
  });

  return (
    <div className="mx-auto px-10 mb-8">
      <div className='text-white border-blue-300 border-b flex justify-between px-20 py-2 items-center w-full font-semibold '>
        <Link href="/">
          <div className='cursor-pointer'>
            Home
          </div>
        </Link>
        <nav>
          <button ref={btnRef} className="md:hidden mt-2" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <ul className='hidden md:flex gap-8 p-2'>
            {categories.map((category) => (
              <Link key={category.slug} href={`/${category.slug}`} >
                <li className='cursor-pointer'>
                  {category.name}
                </li>
              </Link>
            ))}
          </ul>
          <ul ref={menuRef} className={showMenu ? 'flex flex-col items-center fixed inset-0 top-12 left-1/4 bg-gray-300 pt-8 md:hidden' : 'hidden'}>
            {categories.map((category) => (
              <Link key={category.slug} href={`/${category.slug}`} >
                <li className='cursor-pointer px-2 py-4 border-solid border-t w-full text-center' onClick={() => setShowMenu(false)}>
                  <span className='font-semibold cursor-pointer'>
                    {category.name}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div >
    </div>
  )
}

export default Header;
