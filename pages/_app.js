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
      <Script strategy="afterInteractive" 
                dangerouslySetInnerHTML={{
                  __html: `
                  (function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='7a20462fb80eeaa2b49821319a3082ca8cc5bc55782d31040aa253c39d94b9a3';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/')
                `,
                }}
                />
      <DefaultSeo {...nextSeoConfig} />
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
