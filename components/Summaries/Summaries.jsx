import React from 'react'
import AboutAuthor from '../AboutAuthor';
import SummaryCard from './SummaryCard';

const Summaries = ({ summaries }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-20">
      <div className='lg:col-span-8 col-span-1'>
        <div className='bg-white p-4 shadow-lg rounded-lg'>
          <div>
            Intro
          </div>
          {summaries.map((summary) => (
            <div key={summary.slug} className='border-b last:border-b-0'>
              <SummaryCard summary={summary} />
            </div>
          ))}
        </div>
      </div>
      <div className='lg:col-span-4 col-span-1'>
        <AboutAuthor />
      </div>
    </div>
  )
}

export default Summaries;