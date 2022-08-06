import Head from 'next/head'

const Home = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Kris Ograbek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <h3 className=''>Main Page</h3>
      </div>
    </div>
  )
}

export default Home
