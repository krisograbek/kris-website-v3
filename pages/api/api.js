import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const articlesDirectory = join(process.cwd(), '_articles');
const summariesDirectory = join(process.cwd(), '_summaries');

export function getSlugs(directory) {
  return fs.readdirSync(directory);
}

export function getArticleBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(articlesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)


  // console.log("get posts by slug", data)
  // console.log('---')
  // console.log(content) 

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getSummaryBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(summariesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)


  // console.log("get posts by slug", data)
  // console.log('---')
  // console.log(content) 

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllArticles(fields = []) {
  const slugs = getSlugs(articlesDirectory)
  const posts = slugs
    .map((slug) => getArticleBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export const getAllSummaries = (fields = []) => {
  const slugs = getSlugs(summariesDirectory);
  console.log('slugs', slugs)
  const summaries = slugs
    .map((slug) => getSummaryBySlug(slug, fields));

  console.log(summaries)
  return summaries;
}
