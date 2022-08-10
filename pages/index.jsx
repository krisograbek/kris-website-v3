import Head from 'next/head'
import { HomePage } from '../components'

const Home = () => {
  return (
    <div className="container mx-auto mb-8">
      <Head>
        <title>Kris Ograbek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}

export default Home
