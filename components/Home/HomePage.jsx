import React from 'react'
import NavCard from './NavCard'

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center pt-32 text-white">
      <h2 className='font-bold text-4xl mb-3'>Kris Ograbek</h2>
      <h3 className='font-bold text-3xl mb-6'>Lifelong Learner & Content Creator</h3>
      <div className='w-full md:w-2/3 border-solid border-2 border-blue-300 rounded-lg p-4 mb-32'>
        <h4 className='font-bold text-2xl'>
          I believe in Lifelong Learning. If you take care of your brain, you'll be able to learn everythin in any age.
        </h4>
      </div>
      <div className='container max-w-screen-lg mx-auto flex flex-col justify-center mb-12'>
        <h3 className='text-3xl mx-auto mb-6'>Explore the website</h3>
        <div className='grid grid-cols-1 md:grid-cols-12'>
          <div className='col-span-1 md:col-span-6 my-2 md:mx-4'>
            <NavCard slug="blog">
              Blog
            </NavCard>
          </div>
          <div className='col-span-1 md:col-span-6 my-2 md:mx-4'>
            <NavCard slug="about">
              About me
            </NavCard>
          </div>
        </div>
      </div>
      <div className='container max-w-screen-lg mx-auto flex flex-col justify-center'>
        <h3 className='text-3xl mx-auto mb-6'>Coming soon...</h3>
        <div className='grid grid-cols-1 md:grid-cols-12'>
          <div className='col-span-1 md:col-span-4 my-2 md:mx-4'>
            <NavCard slug="summaries">
              Book summaries
            </NavCard>
          </div>
          <div className='col-span-1 md:col-span-4 my-2 md:mx-4'>
            <NavCard slug="projects">
              Personal Projects
            </NavCard>
          </div>
          <div className='col-span-1 md:col-span-4 my-2 md:mx-4'>
            <NavCard slug="tips">
              Learning Tips
            </NavCard>
          </div>
        </div>
      </div>
    </div >
  )
}

export default HomePage;