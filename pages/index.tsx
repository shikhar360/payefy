import Head from 'next/head'
import Image from 'next/image'
import Homepage from '../components/Homepage'

export default function Home() {
  return (
    <div className='min-h-screen w-full '>
      <Head>
        <title>Payefy</title>
        <meta name="description" content="Created by Shikhar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="img/bg.png" />
      </Head>
      <Homepage />
    </div >
  )
}
