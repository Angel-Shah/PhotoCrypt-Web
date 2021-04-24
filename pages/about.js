import Head from 'next/head'
import Navbar from '../components/Navbar'


export default function About() {
  return (
    <div >
      <Head>
        <title>PhotoCrypt | About</title>
        <link rel="icon" href="/PhotoCrypt-Favicon.png" />
      </Head>

      <h1 className="container">This is the 'About' page.</h1>
      
    </div>
  )
}
