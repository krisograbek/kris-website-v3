import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col px-20 gap-12 text-white'>
      <div className=''>
        <Image src='/me_gray.JPG' alt='me' width="360" height="270" />
      </div>
      <div className='flex flex-col flex-1 gap-8'>
        <div>
          Welcome. My name is Kris Ograbek.
        </div>
        <div>
          OK, my real name is Krzysztof, but people get very creative with misspelling it. So, feel free to call me Kris.
        </div>
        <div>
          In 2008, I failed programming classes and dropped out of college.
          In 2022, I lose track of time while coding.
        </div>
        <div>
          In my 20's, learning was my unpleasant duty.
          In my 30's, learning is my passion.
        </div>
        <div>
          At the age of 32, I finally found my purpose. I want to learn and grow every day.
          I'm on the best journey of my life, the one that never ends. Lifelong Learning.
        </div>
        <div>
          Join me!
        </div>
      </div>
    </div>
  )
}

export default About