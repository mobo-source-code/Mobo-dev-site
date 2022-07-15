import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import nextSeoConfig from '../next-seo.config'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <DefaultSeo {...nextSeoConfig} />
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
