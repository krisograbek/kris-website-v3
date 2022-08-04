import Head from 'next/head'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Kris Ograbek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3 className=''>Hello</h3>
    </div>
  )
}

export default Home
