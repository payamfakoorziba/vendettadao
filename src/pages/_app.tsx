import Head from 'next/head'
import { AppProps } from 'next/app'
import 'styles/index.css'
import Navbar from 'components/Navbar'
import { Footer } from 'components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vendetta DAO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="relative bg-black">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp