import Github from '../svgs/github.svg';
import Linkedin from '../svgs/linkedin.svg';
import Medium from '../svgs/medium.svg';
import StackOverflow from '../svgs/stackoverflow.svg';
import Twitter from '../svgs/twitter.svg';
import YouTube from '../svgs/youtube.svg';
import NavCard from './NavCard';

const icons = [
  { name: "linkedin", component: Linkedin, link: 'https://www.linkedin.com/in/kris-ograbek' },
  { name: "twitter", component: Twitter, link: 'https://twitter.com/KrisOgrabek' },
  { name: "medium", component: Medium, link: 'https://medium.com/@kris-ograbek' },
  { name: "youtube", component: YouTube, link: 'https://www.youtube.com/channel/UCyi_Df2NF35qjIV0LdtUY9w' },
  { name: "github", component: Github, link: 'https://github.com/krisograbek' },
  { name: "stackoverflow", component: StackOverflow, link: 'https://stackoverflow.com/users/15191870/krisograbek' },
]

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center pt-32 text-white">
      <h2 className='font-bold text-4xl mb-3'>Kris Ograbek</h2>
      <h3 className='font-bold text-3xl mb-6'>Lifelong Learner & Content Creator</h3>
      <div className='w-full md:w-2/3 border-solid border-2 border-blue-300 rounded-lg p-4 mb-32'>
        <h4 className='font-bold text-xl'>
          I believe in Self Education. Taking control over own knowledge and skills is the best long-term investment.
        </h4>
      </div>
      <div className='container max-w-screen-lg mx-auto flex flex-col justify-center my-20'>
        <h3 className='text-3xl mx-auto mb-6'>Explore the website</h3>
        <div className='grid grid-cols-1 md:grid-cols-12'>
          <div className='col-span-1 md:col-span-4 my-2 md:mx-4'>
            <NavCard slug="blog">
              Blog
            </NavCard>
          </div>
          <div className='col-span-1 md:col-span-4 my-2 md:mx-4'>
            <NavCard slug="summaries">
              Book summaries
            </NavCard>
          </div>
          <div className='col-span-1 md:col-span-4 my-2 md:mx-4'>
            <NavCard slug="about">
              About me
            </NavCard>
          </div>
        </div>
      </div>
      <div className='container max-w-screen-lg mx-auto flex flex-col justify-center my-20'>
        <h3 className='text-3xl mx-auto mb-6'>Coming soon...</h3>
        <div className='grid grid-cols-1 md:grid-cols-12'>
          {/* <div className='col-span-1 md:col-span-4 my-2 md:mx-4'>
            <NavCard slug="summaries">
              Book summaries
            </NavCard>
          </div> */}
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
      {/* Icons */}
      <div className='mx-auto flex flex-col justify-center my-20'>
        <h3 className='text-3xl mx-auto mb-6'>Connect with me</h3>
        <div className='my-6 flex'>
          {icons.map((icon) => {
            const Icon = icon.component;
            return (
              <a key={icon.name} href={icon.link} target='_blank' rel='noreferrer noopener'>
                <div className='mx-2 h-8 w-8 cursor-pointer'>
                  <Icon fill="white" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div >
  )
}

export default HomePage;