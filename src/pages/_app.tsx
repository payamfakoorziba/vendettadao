import Head from 'next/head'
import { AppProps } from 'next/app'
import 'styles/index.css'
import Navbar from 'components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS TW</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="relative bg-black">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp