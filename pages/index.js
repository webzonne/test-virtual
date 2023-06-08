import { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Head from 'next/head'

export default function Home() {
  const { data: session } = useSession()
  console.log(session)

  if (session) {
    return (
      <>
        <div className='p-8'>
          <p>BIENVENIDO</p><span className='text-blue-900'>{session.user.name}</span>
          <br />
          <br />
          <br />
          <button className='border border-gray-500 px-4 py-2' onClick={() => signOut()}>Salirse</button>
        </div>
      </>
    )
  }
  return (
    <>
      <Head>
        <title>e-commerce</title>
        <meta name="description" content="tienda virtual" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='p-8'>
        <h1 className='text-center mb-8'>REGISTRARSE</h1>
        <div className='text-center'>
          <button className='border border-gray-500 px-4 py-2' onClick={() => signIn()}>Registrarse con Github</button>
        </div>
        
      </div>
    </>
  )
}
