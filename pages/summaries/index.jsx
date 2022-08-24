import React from 'react'

import { Summaries } from '../../components'
import { getAllSummaries } from '../api/api';

const SummariesHome = ({ allSummaries }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Summaries summaries={allSummaries} />
    </div>
  )
}

export default SummariesHome;

export const getStaticProps = async () => {
  const allSummaries = getAllSummaries([
    'title',
    'slug'
  ]);

  return {
    props: { allSummaries },
  }
}
