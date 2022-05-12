import Head from 'next/head'
import Intro from '../components/intro'
import Logos from '../components/logos'
import Nav from '../components/nav'
import BusinessProb from '../components/businessprob'
import BusinessSol from '../components/businesssol'
import Showcase from '../components/showcase'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&family=Ubuntu:wght@400;500;700&family=Varela+Round&display=swap" rel="stylesheet" />
      </Head>
      <header>
        <Nav />
        <Intro />
        <Logos />
        <BusinessProb />
        <BusinessSol />
        <Showcase />
      </header>
      <main>
        
      </main>
    </>
  )
}
