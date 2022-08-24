import React from 'react'

const SummaryCard = ({ summary }) => {
  return (
    <div className='text-white'>
      {summary.slug}
    </div>
  )
}

export default SummaryCard;