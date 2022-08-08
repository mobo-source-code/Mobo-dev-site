import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import nextSeoConfig from '../next-seo.config'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script strategy='lazyOnload' src='https://www.googletagmanager.com/gtag/js?id=G-J927T7L7XM'/>
      <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-J927T7L7XM', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <DefaultSeo {...nextSeoConfig} />
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
