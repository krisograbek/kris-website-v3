import React from 'react'
import { SummaryDetails } from '../../components';
import { getAllSummaries, getSummaryBySlug } from '../api/api';
import markdownToHtml from '../api/markdownToHTML';

const SummaryPage = ({ summary }) => {
  return (
    <div>
      <SummaryDetails summary={summary} />
    </div>
  )
}

export default SummaryPage;

export const getStaticProps = async ({ params }) => {
  const summary = getSummaryBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(summary.content || '')

  return {
    props: {
      summary: {
        ...summary,
        content,
      },
    },
  }
}

export const getStaticPaths = async () => {
  const summaries = getAllSummaries(['slug']);
  return {
    paths: summaries.map((summary) => {
      return {
        params: {
          slug: summary.slug,
        },
      }
    }),
    fallback: false,
  }
}
