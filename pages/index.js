import Head from 'next/head'

export default function Home() {

  return (
    <>
     <Head>
        <title>e-commerce</title>
        <meta name="description" content="tienda virtual" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-blue-900'>
        <h1 className='text-center'>BIENVENIDO</h1>
      </div>
    </>
  )
}
