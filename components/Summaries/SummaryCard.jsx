import Link from 'next/link';
import React from 'react'

const SummaryCard = ({ summary }) => {
  return (
    <div className='text-white'>
      <Link as={`/summaries/${summary.slug}`} href="/summaries/[slug]">
        {summary.slug}
      </Link>
    </div>
  )
}

export default SummaryCard;