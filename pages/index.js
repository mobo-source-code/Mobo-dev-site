import Head from "next/head";
import Intro from "../components/intro";
import Logos from "../components/logos";
import Nav from "../components/nav";
import BusinessProb from "../components/businessprob";
import BusinessSol from "../components/businesssol";
import Shell from "../components/showcase";
import Megazone from "../components/megazone";
import Cryptonite from "../components/cryptonite";
import WYG from "../components/whatyouget";
import Testimonials from "../components/testimonials";
import Godfatheroffer from "../components/godfatheroffer";
import Whyus from "../components/whyus";
import Corevalues from "../components/corevalues";
import Whywedoit from "../components/whywedoit";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PopupWidget } from "react-calendly";
import dynamic from "next/dynamic";
import Script from "next/script";

const DynamicComponent = dynamic(
  () => import ('../components/schedule'),
  {ssr: false}
)

export default function Home() {
  return (
    <>
      <Head>
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&family=Ubuntu:wght@400;500;700&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <Script strategy="afterInteractive" 
                dangerouslySetInnerHTML={{
                  __html: `
                  (function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='7a20462fb80eeaa2b49821319a3082ca8cc5bc55782d31040aa253c39d94b9a3';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/')
                `,
                }}
                />
      </Head>
      <header>
        <Nav />
        <Intro />
        <Logos />
      </header>
      <main>
        <BusinessProb />
        <BusinessSol />
        <Shell />
        <Megazone />
        <Cryptonite />
        <WYG />
        <Testimonials />
        <Godfatheroffer />
        <Whyus />
        <Corevalues />
        <Whywedoit />
      </main>
    </>
  );
}
