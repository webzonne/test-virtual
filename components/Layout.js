import React from 'react'
import { Inter } from 'next/font/google'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export default function Layout({children}) {
 
  return (
    <>
      <Head>
        <title>e-commerce</title>
        <meta name="description" content="tienda virtual" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-blue-900 min-h-screen flex'>
      <div className='bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4'>{children}</div>
      </div>
      
    </>
  )
}