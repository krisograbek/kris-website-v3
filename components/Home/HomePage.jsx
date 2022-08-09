import React from 'react'
import NavCard from './NavCard'

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-32 text-white">
      <h2 className='font-bold text-4xl mb-3'>Kris Ograbek</h2>
      <h3 className='font-bold text-3xl mb-6'>Content Creator</h3>
      <div className='w-full md:w-1/2 border-solid border-2 border-blue-400 rounded-lg p-4 mb-12'>
        <h4 className='font-bold text-2xl'>I believe in Lifelong Learning. Pursuing meaningful goals, etc. I still have to add more here</h4>
      </div>
      <div className='container max-w-screen-lg mx-auto flex flex-col justify-center'>
        <h3 className='text-3xl mx-auto'>Explore the website</h3>
        <div className='grid grid-cols-1 md:grid-cols-12'>
          <NavCard>
            Blog
          </NavCard>
          <NavCard>
            More about me
          </NavCard>
        </div>
      </div>
    </div>
  )
}

export default HomePage;