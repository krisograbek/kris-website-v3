import AboutAuthor from '../AboutAuthor';
import ArticleCard from './ArticleCard';

const Blog = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12  md:gap-12">
      <div className='lg:col-span-8 col-span-1'>
        {articles.map((article) => (
          <div key={article.slug}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
      <div className='lg:col-span-4 col-span-1'>
        <AboutAuthor />
        {/* <RecentArticles /> */}
      </div>
    </div>
  )
}

export default Blog;