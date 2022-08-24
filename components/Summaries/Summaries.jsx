import React from 'react'
import SummaryCard from './SummaryCard';

const Summaries = ({ summaries }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className='lg:col-span-8 col-span-1'>
        {summaries.map((summary) => (
          <div key={summary.slug}>
            <SummaryCard summary={summary} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Summaries;